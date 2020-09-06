import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async getAllUsers(): Promise<IUser[]> {
    const users = await this.userModel.find().exec();
    return users;
  }

  async getUser(userID): Promise<IUser> {
    const user = await this.userModel.findById(userID).exec();
    return user;
  }

  async getAllCarsOfUser(userID): Promise<IUser> {
    const cars = await this.userModel
      .findById(userID)
      .populate('cars')
      .exec();
    return cars;
  }

  async addUser(createUserDTO: CreateUserDTO): Promise<IUser> {
    const newUser = await this.userModel(createUserDTO);
    return newUser.save();
  }

  async updateUser(userID, createUserDTO: CreateUserDTO): Promise<IUser> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userID,
      createUserDTO,
      { new: true },
    );
    return updatedUser;
  }

  async deleteUser(userID): Promise<any> {
    const deletedUser = await this.userModel.findByIdAndRemove(userID);
    return deletedUser;
  }
}
