import { INote } from './INote'

export interface IUser {
  id: number;
  th: string;
  name: string;
  notes: INote[];
  createdAt: Date;
  updatedAt: Date;
}
