import {
    Controller, Get, Response, HttpStatus, Param, Body, Post,
    Request, Patch, Delete, Put
} from '@nestjs/common';
import { UserserviceService } from './userservice.service';
import { userserviceI, userI } from './interfaces';
import { CreateUserDto } from './dto/user.dto';

import { ApiResponse, ApiUseTags } from '@nestjs/swagger';



@Controller('user')
@ApiUseTags('user')
export class UsercontrollerController {
        
    constructor(private readonly userService: UserserviceService) { }
   
    
    @Post()
    @ApiResponse({ status: 201, description: 'The user has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    public async createUser(@Response() res, @Body() createUserBody: CreateUserDto) {

        console.log("aqui se crea el user ", createUserBody);
        let obj = await this.userService.createUser(createUserBody);

        return res.status(HttpStatus.OK).json(obj);
    }
     
    @Get()
    @ApiResponse({ status: 200, description: 'Everything is correct to show all user'})
    @ApiResponse({ status: 404, description: 'Users not found.'})
    public async findAllUsers(@Response() res) {

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
    @ApiResponse({ status: 200, description: 'Everything is correct to show a user'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiResponse({ status: 404, description: 'User not found.'})
    public async findOneUser(@Param('id') id: string, @Response() res) {

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
    @ApiResponse({ status: 201, description: 'The user has been deleted succesfully.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiResponse({ status: 404, description: 'Notes not found.'})
    public async removeOneUser(@Param('id') id: string, @Response() res) {
      
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
    @ApiResponse({ status: 201, description: 'The user has been successfully updated.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiResponse({ status: 404, description: 'Notes not found.'})
    public async updateOneUser(@Param('id') id: string, @Body() userToUpdate: CreateUserDto, @Response() res) {

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
