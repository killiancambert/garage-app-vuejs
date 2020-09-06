import { Document } from 'mongoose';
import { IUser } from 'src/user/interfaces/user.interface';

export interface ICar extends Document {
  readonly model: string;
  readonly modelNumber: string;
  readonly owner: string;
}
