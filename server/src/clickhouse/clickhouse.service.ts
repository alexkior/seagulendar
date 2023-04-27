import { Injectable } from '@nestjs/common';
import { ClickHouse } from 'clickhouse';

@Injectable()
export class ClickhouseService {
  private client: ClickHouse;

  constructor() {
    this.client = new ClickHouse({
      url: 'http://localhost',
      port: 8123,
      debug: false,
      basicAuth: null,
      format: 'json',
      raw: false,
    });
  }

  async execute(query: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.client.query(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}
