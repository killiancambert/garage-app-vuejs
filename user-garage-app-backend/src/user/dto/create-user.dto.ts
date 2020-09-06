import { ICar } from 'src/car/interfaces/car.interface';

export class CreateUserDTO {
  readonly firstName: string;
  readonly lastName: string;
  readonly cars: string;
}
