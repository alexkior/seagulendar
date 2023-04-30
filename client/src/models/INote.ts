export interface INote {
  id: number;
  date: number;
  month: string;
  year: number;
  content: string;
  parentId: number;
  children: INote[];
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
