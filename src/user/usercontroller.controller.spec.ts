import { Test, TestingModule } from '@nestjs/testing';
import { UsercontrollerController } from './usercontroller.controller';

describe('Usercontroller Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UsercontrollerController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: UsercontrollerController = module.get<UsercontrollerController>(UsercontrollerController);
    expect(controller).toBeDefined();
  });
});
