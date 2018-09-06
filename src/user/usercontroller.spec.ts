import { Test, TestingModule } from '@nestjs/testing';
import { Usercontroller } from './usercontroller';
import { Userservice } from './userservice';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/user.dto';
import { Response, HttpStatus } from '@nestjs/common';


describe('Usercontroller', () => {

  //Declaracion de variables que apuntan al servicio y controlador.
  let userController: Usercontroller;
  let userService: Userservice;


  let res: Response;


  beforeEach(() => {
    userService = new Userservice(Model);
    userController = new Usercontroller(userService);

  });

  //Falta por implementar. Dudas.


  //Servicio de userservice tiene un metodo de findAll que deberia retornar todo el arreglo de users que hay.
  describe('findAll', () => {

    it("It should return an array of users", async () => {
      const resultUsers = ['test'];
      jest.spyOn(userService, 'findAll').mockImplementation(() => resultUsers);
      expect(await userController.findAllUsers()).toBe(resultUsers);

    });


    describe('createUser', () => {

      it("It should create an user", async () => {

        let userToTest = new CreateUserDto();

        let resultCreatedUser;

        jest.spyOn(userService, 'createUser').mockImplementation(() => resultCreatedUser);
        expect(await userController.createUser(userToTest)).toBe(resultCreatedUser);

      });
    });



    describe('findOneUserByUsername', () => {

      it("It should find a user by giving their username", async () => {

        let username = "userfortest";

        let result;

        jest.spyOn(userService,'getOneUserByUsername').mockImplementation(() => result);
        expect(await userController.findOneUserByUsername(username)).toBe(result);

      });
    });



    describe('findOneUserById', () => {

      it("It should find a user by giving their id", async () => {

        let iduser = "5b90765776d990001fe10c86";
        let result;

        jest.spyOn(userService,'getOneUserById').mockImplementation(() => result);

        expect(await userController.findOneUserById(iduser)).toBe(result);

        console.log('basura');
        
      });
    });



    describe('deleteOneUserByUsername', () => {

      it("It should delete a user by giving their username", async () => {

        let username = "userfortest";
        let result;
        jest.spyOn(userService,'deleteOneUserByUsername').mockImplementation(() => result);
        expect(await userController.deleteOneUserByUsername(username)).toBe(result);
        
      });
    });


    describe('deleteOneUserById', () => {

      it("It should delete a user by giving their id", async () => {

        let iduser = "5b90765776d990001fe10c86";
        let result;
        jest.spyOn(userService,'deleteOneUserById').mockImplementation(() => result);
        expect(await userController.deleteOneUserById(iduser)).toBe(result);
        
      });
    });


    describe('updateOneUser', () => {
      it("It should delete a user by giving their id", async () => {

        let iduser = "5b90765776d990001fe10c86";
        
        let userToUpdate = new CreateUserDto();
        let result;
        jest.spyOn(userService,'updateUser').mockImplementation(() => result);
        expect(await userController.updateOneUser(iduser,userToUpdate)).toBe(result);
        
      });
    });

  });

});

