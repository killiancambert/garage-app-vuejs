import { IUser } from 'src/user/interfaces/user.interface';

export class CreateCarDTO {
  readonly model: string;
  readonly modelNumber: string;
  readonly owner: string;
}
