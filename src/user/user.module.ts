import { Module } from '@nestjs/common';
import { Userservice } from './userservice';
import { Usercontroller } from './usercontroller';

import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schemas/userschema';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'user', schema: userSchema }])],
    controllers: [Usercontroller] ,
    providers:  [Userservice]

})
export class UserModule {}
