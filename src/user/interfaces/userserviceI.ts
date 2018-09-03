import { userI } from './userinterface';
import { CreateUserDto } from '../dto/user.dto';

export interface userserviceI {

     createUser(userBody: CreateUserDto): Promise<userI>;

     findAll(): Promise<userI[]>;

     getOneUser(idUser: string): Promise<userI>;

     deleteOneUser(idUser: string): Promise<userI>;

     updateUser(idUser: string, newNoteBody:CreateUserDto);

}