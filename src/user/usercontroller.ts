import {
    Controller, Get, Response, HttpStatus, Param, Body, Post,
    Request, Patch, Delete, Put,
} from '@nestjs/common';
import { Userservice } from './userservice';
import { userserviceI } from './interfaces/userserviceI';
import { userI } from './interfaces/userinterface';
import { CreateUserDto } from './dto/user.dto';

import { ApiResponse, ApiUseTags } from '@nestjs/swagger';

@Controller('user')
@ApiUseTags('user')
export class Usercontroller {

    constructor(private readonly userService: Userservice) { }

    @Post()
    @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
    public async createUser(@Body() createUserBody: CreateUserDto): Promise<userI> {

        console.log("aqui se crea el user ", createUserBody);
        const userCreated = await this.userService.createUser(createUserBody);
        return userCreated;
    }

    @Get()
    @ApiResponse({ status: 200, description: 'Everything is correct to show all user' })
    public async findAllUsers(): Promise<userI[]> {

        return await this.userService.findAll();

    }

    @Get('/getbyusername/:username')
    @ApiResponse({ status: 200, description: 'Everything is correct to show a user' })
    public async findOneUserByUsername(@Param('username') username: string): Promise<userI> {

        console.log("username a buscar ", username);
        return await this.userService.getOneUserByUsername(username);
    }

    @Get('getbyid/:id')
    @ApiResponse({ status: 200, description: 'Everything is correct to show a user' })
    public async findOneUserById(@Param('id') id: string): Promise<userI> {
        return await this.userService.getOneUserById(id);
    }

    @Delete('/deletebyusername/:username')
    @ApiResponse({ status: 200, description: 'The user has been deleted succesfully.' })
    public async deleteOneUserByUsername(@Param('username') username: string): Promise<userI> {

        console.log('entro aca eliminar por username');
        return await this.userService.deleteOneUserByUsername(username);

    }

    @Delete('/deletebyid/:id')
    @ApiResponse({ status: 200, description: 'The user has been deleted succesfully.' })
    public async deleteOneUserById(@Param('id') id: string): Promise<userI> {

        return await this.userService.deleteOneUserById(id);

    }

    @Put(':id')
    @ApiResponse({ status: 201, description: 'The user has been successfully updated.' })
    public async updateOneUser(@Param('id') id: string, @Body() userToUpdate: CreateUserDto): Promise<userI> {

        console.log("El id ", id);
        console.log("Nota a actualizar ", userToUpdate);
        return await this.userService.updateUser(id, userToUpdate);

    }

}
