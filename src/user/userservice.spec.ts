import { Test, TestingModule } from '@nestjs/testing';
import { Usercontroller } from './usercontroller';
import { Userservice } from './userservice';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/user.dto';
import { Response, HttpStatus } from '@nestjs/common';

describe('Userservice', () => {

  // Declaracion de variables que apuntan al servicio y controlador.
  let userController: Usercontroller;
  let userService: Userservice;

  beforeEach(() => {
    userService = new Userservice(Model);
    userController = new Usercontroller(userService);

  });

  describe('findAllNotes', () => {

    it('should find all notes', async () => {
        jest.spyOn(userService,'findAll').mockImplementation(() => []);
        const response = await userService.findAll();
        expect(response).toBeInstanceOf(Array);
        expect(response).toEqual([]);
    });
   });

    describe('createUser', () => {

      it('It should create an user', async () => {

        const userToTest = new CreateUserDto();

        const resultCreatedUser = [];

        jest.spyOn(userService, 'createUser').mockImplementation(() => resultCreatedUser);
        expect(await userController.createUser(userToTest)).toBe(resultCreatedUser);

      });
    });

    describe('getOneUserByUsername', () => {

      it('It should find a user by giving their username', async () => {

        const username = 'userfortest';

        const result = [];

        jest.spyOn(userService, 'getOneUserByUsername').mockImplementation(() => result);
        expect(await userController.findOneUserByUsername(username)).toBe(result);

      });
    });

    describe('getOneUserById', () => {

      it('It should find a user by giving their id', async () => {

        const iduser = '5b90765776d990001fe10c86';
        const result = [];

        jest.spyOn(userService, 'getOneUserById').mockImplementation(() => result);

        expect(await userController.findOneUserById(iduser)).toBe(result);
      });
    });

    describe('deleteOneUserByUsername', () => {

      it('It should delete a user by giving their username', async () => {

        const username = 'userfortest';
        const result = [];
        jest.spyOn(userService, 'deleteOneUserByUsername').mockImplementation(() => result);
        expect(await userController.deleteOneUserByUsername(username)).toBe(result);
      });
    });

    describe('deleteOneUserById', () => {

      it('It should delete a user by giving their id', async () => {

        const iduser = '5b90765776d990001fe10c86';
        const result = [];
        jest.spyOn(userService, 'deleteOneUserById').mockImplementation(() => result);
        expect(await userController.deleteOneUserById(iduser)).toBe(result);
      });
    });
    describe('updateUser', () => {
      it('It should delete a user by giving their id', async () => {

        const iduser = '5b90765776d990001fe10c86';
        const userToUpdate = new CreateUserDto();
        const result = [];
        jest.spyOn(userService, 'updateUser').mockImplementation(() => result);
        expect(await userController.updateOneUser(iduser, userToUpdate)).toBe(result);
      });
    });

});


