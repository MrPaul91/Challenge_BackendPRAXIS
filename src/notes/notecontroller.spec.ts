import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { Response, HttpStatus } from '@nestjs/common';
import { NotecontrollerController } from './notecontroller.controller';
import { noteserviceI } from './interfaces/noteserviceI';
import { CreateNoteDto } from './dto/note.dto';
import { NoteserviceService } from './noteservice.service';

describe('NotecontrollerController', () => {

  // Declaracion de variables que apuntan al servicio y controlador.
  let noteController: NotecontrollerController;
  let noteService: NoteserviceService;

  beforeEach(() => {
    noteService = new NoteserviceService(Model);
    noteController = new NotecontrollerController(noteService);

  });

  // Servicio de userservice tiene un metodo de findAll que deberia retornar todo el arreglo de users que hay.
  describe('findAllNotes', () => {

    it('It should return an array of notes', async () => {
      const resultNotes = ['test'];
      jest.spyOn(noteService, 'findAll').mockImplementation(() => resultNotes);
      expect(await noteController.findAllNotes()).toBe(resultNotes);

    });

    describe('createNote', () => {

      it('It should create a note', async () => {

        const noteToTest = new CreateNoteDto();

        const resultCreatedNote = [];

        jest.spyOn(noteService, 'createNote').mockImplementation(() => resultCreatedNote);
        expect(await noteService.createNote(noteToTest)).toBe(resultCreatedNote);

      });
    });

    describe('findOneNote', () => {

      it('It should find a note by giving the id', async () => {

        const idNote = '5b9094fd2aa114001f030466';

        const result = [];

        jest.spyOn(noteService, 'getOneNote').mockImplementation(() => result);
        expect(await noteController.findOneNote(idNote)).toBe(result);

      });
    });

    describe('removeOneNote', () => {

      it('It should delete a note by giving their id', async () => {

        const idNote = '5b9094fd2aa114001f030466';
        const result = [];

        jest.spyOn(noteService, 'deleteOneNote').mockImplementation(() => result);

        expect(await noteController.removeOneNote(idNote)).toBe(result);
      });
    });

    describe('updateOneNote', () => {

      it('It should update a note by giving their id', async () => {

        const idNote = '5b9094fd2aa114001f030466';
        const noteToUpdate = new CreateNoteDto();
        const result = [];
        jest.spyOn(noteService, 'updateNote').mockImplementation(() => result);
        expect(await noteController.updateOneNote(idNote, noteToUpdate)).toBe(result);
      });
    });

    describe('getMyNotes', () => {

      it('It should get a note by giving their id', async () => {

        const iduser = '5b8fa85de8ee343bb85814d2';
        const result = ['test'];
        jest.spyOn(noteService, 'getMyNotes').mockImplementation(() => result);
        expect(await noteController.getMyNotes(iduser)).toBe(result);
      });
    });

  });

});
