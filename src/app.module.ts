import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesModule } from './notes/notes.module';
import { UserModule } from './user/user.module';
import { Test } from '@nestjs/testing';




@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:admin123@ds237832.mlab.com:37832/nest'),
    NotesModule,
    UserModule,
    Test
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
