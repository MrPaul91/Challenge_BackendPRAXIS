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


  describe('findAllUsers', () => {
    test('It should response the GET method with a 200', async () => {
      return userController.findAllUsers(res).then(response => {
       // expect(response.)
      });
    });
  })








});



/*
import { Test } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { noteSchema } from '../notes/schemas/noteschema';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
        controllers: [CatsController],
        providers: [CatsService],
      }).compile();

    catsService = module.get<CatsService>(CatsService);
    catsController = module.get<CatsController>(CatsController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});


*/

