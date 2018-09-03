import { Module } from '@nestjs/common';
import { UserserviceService } from './userservice.service';
import { UsercontrollerController } from './usercontroller.controller';

import { MongooseModule } from '@nestjs/mongoose';

import { userSchema } from './schemas/userschema';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'user', schema: userSchema }])],
    controllers: [UsercontrollerController] ,
    providers:  [UserserviceService]

})
export class UserModule {}
