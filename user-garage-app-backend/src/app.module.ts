import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/user-app', {
      useNewUrlParser: true,
    }),
    UserModule,
    CarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
