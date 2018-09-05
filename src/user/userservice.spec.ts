import { Test, TestingModule } from '@nestjs/testing';
import { Usercontroller } from './usercontroller';
import { Userservice } from './userservice';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/user.dto';

describe('Userservice', () => {

    //Declaracion de variables que apuntan al servicio y controlador.
    let userController: Usercontroller;
    let userService: Userservice;

    beforeEach(() => {
        userService = new Userservice(Model);
        userController = new Usercontroller(userService);

    });

    //Servicio de userservice tiene un metodo de findAll que deberia retornar todo el arreglo de users que hay.
    describe('findAll', () => {

        it("It should return an array of users", async () => {
            const resultUsers = ['test'];
            jest.spyOn(userService, 'findAll').mockImplementation(() => resultUsers);
            console.log("TEST ACA", resultUsers);
            expect(await userService.findAll()).toBe(resultUsers);

        });

    });


    describe('createUser', () => {
        it('It should return a created user', async () => {
            var result;
            jest.spyOn(userService, 'createUser').mockImplementation(() => result);
            const testUser = new CreateUserDto();
            expect(await userService.createUser(testUser)).toBe(result);
        });
    });
    
    describe('getOneUser', ()=>{ 
        it('It should retrieve one user', async() => {
            let idusertest = "5b8dfcc8865aa3001fa04fab";
            var result;
            jest.spyOn(userService, 'getOneUser').mockImplementation(() => result);
            expect(await userService.getOneUser(idusertest)).toBe(result);
        });
    })


    //Dudas aca.
    describe('deleteOneUser', () => {
        it('It should delete an user', async () => {

            //For this test we test a delete with an user from our database ??
            let idusertest  = "5b8dfcc8865aa3001fa04fab";
            var result;
            console.log("antes");
            console.log(result);
            jest.spyOn(userService, 'deleteOneUser').mockImplementation(() => {
                console.log(result);
                return result;        
            });
      
            expect(await userService.deleteOneUser(idusertest)).toBe(result);

        });
    });



 
    







});
