import { Test, TestingModule } from '@nestjs/testing';
import { NoteserviceService } from './noteservice.service';

describe('NoteserviceService', () => {
  let service: NoteserviceService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteserviceService],
    }).compile();
    service = module.get<NoteserviceService>(NoteserviceService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
