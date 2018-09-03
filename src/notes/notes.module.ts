import { Module } from '@nestjs/common';
import { NotecontrollerController } from './notecontroller.controller';
import { NoteserviceService } from './noteservice.service';
import { MongooseModule } from '@nestjs/mongoose';

import { noteSchema  } from './schemas/noteschema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'note', schema: noteSchema }])],
  controllers: [NotecontrollerController],
  providers: [NoteserviceService]
})
export class NotesModule {}
