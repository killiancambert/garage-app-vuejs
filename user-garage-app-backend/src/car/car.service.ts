import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICar } from './interfaces/car.interface';
import { CreateCarDTO } from './dto/create-car.dto';

@Injectable()
export class CarService {
  constructor(@InjectModel('Car') private readonly carModel: Model<ICar>) {}

  async getAllCars(): Promise<ICar[]> {
    const cars = await this.carModel.find().exec();
    return cars;
  }

  async getCar(carID): Promise<ICar> {
    const car = await this.carModel.findById(carID).exec();
    return car;
  }

  async getUserOfCar(carID): Promise<ICar> {
    const user = await this.carModel
      .findById(carID)
      .populate('user')
      .exec();
    return user;
  }

  async addCar(createUserDTO: CreateCarDTO): Promise<ICar> {
    const newCar = await this.carModel(createUserDTO);
    return newCar.save();
  }

  async updateCar(carID, createCarDTO: CreateCarDTO): Promise<ICar> {
    const updatedCar = await this.carModel.findByIdAndUpdate(
      carID,
      createCarDTO,
      { new: true },
    );
    return updatedCar;
  }

  async deleteCar(carID): Promise<any> {
    const deletedCar = await this.carModel.findByIdAndRemove(carID);
    return deletedCar;
  }
}
