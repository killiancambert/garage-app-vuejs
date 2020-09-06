import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDTO } from './dto/create-car.dto';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  //create a car
  @Post('/create')
  async addCar(@Res() res, @Body() createCarDTO: CreateCarDTO) {
    const car = await this.carService.addCar(createCarDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Car created successfully',
      car,
    });
  }

  //Get all cars
  @Get('cars')
  async getAllCars(@Res() res) {
    const cars = await this.carService.getAllCars();
    return res.status(HttpStatus.OK).json(cars);
  }

  //Get a specific car by ID
  @Get('car/:carID')
  async getCar(@Res() res, @Param('carID') carID) {
    const car = await this.carService.getCar(carID);
    if (!car) throw new NotFoundException('Car does not exist !');
    return res.status(HttpStatus.OK).json(car);
  }

  //Get user of car
  @Get('car/:carID/user')
  async getUserOfCar(@Res() res, @Param('carID') carID) {
    const user = await this.carService.getUserOfCar(carID);
    return res.status(HttpStatus.OK).json(user);
  }

  //Update a car
  @Put('/update')
  async updateUser(
    @Res() res,
    @Query('carID') carID,
    @Body() createCarDTO: CreateCarDTO,
  ) {
    const car = await this.carService.updateCar(carID, createCarDTO);
    if (!car) throw new NotFoundException('Car does not exist !');
    return res.status(HttpStatus.OK).json({
      message: 'Car updated successfully',
      car,
    });
  }

  //Delete a car
  @Delete('/delete')
  async deleteCar(@Res() res, @Query('carID') carID) {
    const car = await this.carService.deleteCar(carID);
    if (!car) throw new NotFoundException('Car does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Car deleted',
      car,
    });
  }
}
