import {
    Controller, Get, Response, HttpStatus, Param, Body, Post,
    Request, Patch, Delete, Put,
} from '@nestjs/common';
import { NoteserviceService } from './noteservice.service';
import { noteserviceI, note } from './interfaces';
import { CreateNoteDto } from './dto/note.dto';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('note')
@Controller('note')
export class NotecontrollerController {

    constructor(private readonly noteService: NoteserviceService) { }

    @Post()
    @ApiResponse({ status: 201, description: 'The note has been successfully created.'})
    public async createNote(@Body() createNoteBody: CreateNoteDto): Promise<note> {

        const createdNote = await this.noteService.createNote(createNoteBody);
        return createdNote;

    }

    @Get()
    @ApiResponse({ status: 200, description: 'Everything is correct to show all notes'})
    public async findAllNotes(): Promise<note[]> {

        return await this.noteService.findAll();

    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Everything is correct to show a note'})
    public async findOneNote(@Param('id') id: string): Promise<note> {

        return await this.noteService.getOneNote(id);

    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'The note has been deleted succesfully.'})
    public async removeOneNote(@Param('id') id: string): Promise<note> {

        return await this.noteService.deleteOneNote(id);
    }

    @Put(':id')
    @ApiResponse({ status: 201, description: 'The note has been successfully updated.'})
    public async updateOneNote(@Param('id') id: string, @Body() noteToUpdate: CreateNoteDto) {
        return await this.noteService.updateNote(id, noteToUpdate);
    }

    @Get('/mynotes/:idUser')
    @ApiResponse({ status: 200, description: 'Avalaiable to show the notes written by the user'})
    public async getMyNotes(@Param('idUser') id: string): Promise<note[]> {
        return await this.noteService.getMyNotes(id);
      //  return await this.noteService.updateNote(id, noteToUpdate);
    }

}
