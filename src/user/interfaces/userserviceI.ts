import { userI } from './userinterface';
import { CreateUserDto } from '../dto/user.dto';

export interface userserviceI {

     createUser(userBody: CreateUserDto): Promise<userI>;

     findAll(): Promise<userI[]>;

     getOneUserById(idUser: string): Promise<userI>;

     getOneUserByUsername(username: string): Promise<userI>;

     deleteOneUserByUsername(user: string): Promise<userI>;

     deleteOneUserById(idUser: string): Promise<userI>;

     updateUser(idUser: string, newNoteBody: CreateUserDto);

}