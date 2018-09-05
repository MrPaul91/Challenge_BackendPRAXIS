import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userI } from './interfaces/userinterface';
import { userserviceI } from './interfaces/userserviceI';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class Userservice implements userserviceI {


    constructor(@InjectModel('user') private readonly userModel: Model<userI>) {
    }

    async createUser(userBody: CreateUserDto): Promise<userI> {
        
        const createdNoteObj = new this.userModel(userBody);
        return await createdNoteObj.save();
    }

    async findAll(): Promise<userI[]>{
        return await this.userModel.find().exec();
    }

    async getOneUserById(idUser: string): Promise<userI> {
        return await this.userModel.findById(idUser).exec();
    }


    async getOneUserByUsername(user: string): Promise<userI> {
        console.log("el username ", user)
        return await this.userModel.findOne({username:user}).exec();
    }

    async deleteOneUserById(idUser: string): Promise<userI> {

        console.log("Id a a eliminar ", idUser);
        return await this.userModel.findByIdAndRemove(idUser).exec();
    }


    async deleteOneUserByUsername(user: string): Promise<userI> {
        
        console.log("usuario a eliminar", user);
        return await this.userModel.deleteOne({username:user}).exec();
    }

    //Check.
    async updateUser(idUser: string, newUserBody : CreateUserDto )/*: Promise<note>*/{

        let note = await this.userModel.findById(idUser).exec();

        if(!note){
            throw new Error(`User with ID ${idUser} not found in the DB`);
        }
        else{
            return await this.userModel.findByIdAndUpdate(idUser, newUserBody).exec();
        }
        
    } 
}
