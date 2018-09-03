import {
    Controller, Get, Response, HttpStatus, Param, Body, Post,
    Request, Patch, Delete, Put
} from '@nestjs/common';
import { UserserviceService } from './userservice.service';
import { userserviceI, userI } from './interfaces';
import { CreateUserDto } from './dto/user.dto';
@Controller('user')
export class UsercontrollerController {
        
    constructor(private readonly userService: UserserviceService) { }

    @Post()
    public async createNote(@Response() res, @Body() createUserBody: CreateUserDto) {

        console.log("aqui se crea el user ", createUserBody);
        let obj = await this.userService.createUser(createUserBody);

        return res.status(HttpStatus.OK).json(obj);
    }

    @Get()
    public async findAllNotes(@Response() res) {

        await this.userService.findAll().then(

            data => {
                res.status(HttpStatus.OK).json(data);
            },
            error => {
                res.status(HttpStatus.NOT_FOUND).json(error);
            }
        )

    }

    @Get(':id')
    public async findOneNote(@Param('id') id, @Response() res) {

        await this.userService.getOneUser(id).then(data => {

            if (data === null) {
                return res.status(HttpStatus.NOT_FOUND).json(data);
            }

            return res.status(HttpStatus.OK).json(data);

        }).catch(error => {
            return res.status(HttpStatus.FORBIDDEN).json(error);
        }
        );

    }


    @Delete(':id')
    public async removeOneNote(@Param('id') id, @Response() res) {
      
        console.log(id);
        await this.userService.deleteOneUser(id).then(data => {

            if (data === null) {
                return res.status(HttpStatus.NOT_FOUND).json(data);
            }

            return res.status(HttpStatus.OK).json(data);

        }).catch(error => {

            console.log(error);
            return res.status(HttpStatus.FORBIDDEN).json(error);
        }
        );
    }



    @Put(':id')
    public async updateOneNote(@Param('id') id, @Body() userToUpdate: CreateUserDto, @Response() res) {

        console.log("El id ", id);
        console.log("Nota a actualizar ", userToUpdate);


        await this.userService.updateUser(id, userToUpdate).then((data) => {

            console.log("la data", data);
            return res.status(HttpStatus.OK).json(data);
        }).catch((error) => {

            return res.status(HttpStatus.FORBIDDEN).json(error);
        });

    }




}
