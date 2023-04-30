import { Controller, Get, Query, Redirect, Res, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import * as crypto from 'crypto';

const BOT_TOKEN = 'XXXXXXXX:XXXXXXXXXXXXXXXXXXXXXXXX'; // place bot token of your bot here

interface AuthData {
  hash: string;
  auth_date: number;
  [key: string]: string | number;
}

function checkTelegramAuthorization(auth_data: AuthData): AuthData {
  const check_hash = auth_data.hash;
  delete auth_data.hash;

  const data_check_arr: string[] = [];
  for (const key in auth_data) {
    data_check_arr.push(`${key}=${auth_data[key]}`);
  }
  data_check_arr.sort();
  const data_check_string = data_check_arr.join('\n');
  const secret_key = crypto.createHash('sha256').update(BOT_TOKEN).digest();
  const hash = crypto
    .createHmac('sha256', secret_key)
    .update(data_check_string)
    .digest('hex');

  if (hash !== check_hash) {
    throw new Error('Data is NOT from Telegram');
  }
  if (Date.now() / 1000 - auth_data.auth_date > 86400) {
    throw new Error('Data is outdated');
  }
  return auth_data;
}

function saveTelegramUserData(res: Response, auth_data: AuthData): void {
  const auth_data_json = JSON.stringify(auth_data);
  res.cookie('tg_user', auth_data_json);
}

@Controller()
export class TelegramAuthController {
  @Get()
  @Redirect('login_example.html')
  async checkAuth(@Query() query: AuthData, @Res() res: Response) {
    try {
      const auth_data = checkTelegramAuthorization(query);
      saveTelegramUserData(res, auth_data);
    } catch (e) {
      res.send(e.message);
      return;
    }
  }
  @Get('get-user-data')
  getTelegramUserData(@Req() req: Request): Record<string, any> | false {
    const auth_data_json = decodeURIComponent(req.cookies?.tg_user || '');
    if (auth_data_json) {
      const auth_data = JSON.parse(auth_data_json);
      return auth_data;
    }
    return false;
  }

  @Get('logout')
  @Redirect('login_example.php')
  logout(@Res() res: Response) {
    res.cookie('tg_user', '');
  }
}
