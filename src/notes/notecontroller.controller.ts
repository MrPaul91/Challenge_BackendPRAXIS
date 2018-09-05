import {
    Controller, Get, Response, HttpStatus, Param, Body, Post,
    Request, Patch, Delete, Put
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
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    public async createNote(@Response() res, @Body() createNoteBody: CreateNoteDto) {

        let obj = await this.noteService.createNote(createNoteBody);


        return res.status(HttpStatus.CREATED).json(obj);
    }

    @Get()
    @ApiResponse({ status: 200, description: 'Everything is correct to show all notes'})
    @ApiResponse({ status: 404, description: 'Notes not found.'})
    public async findAllNotes(@Response() res) {

        await this.noteService.findAll().then(

            data => {
                res.status(HttpStatus.OK).json(data);
            },
            error => {
                res.status(HttpStatus.NOT_FOUND).json(error);
            }
        )

    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Everything is correct to show a note'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiResponse({ status: 404, description: 'Notes not found.'})
    
    public async findOneNote(@Param('id') id: string, @Response() res) {

        await this.noteService.getOneNote(id).then(data => {

            if (data === null) {
                return res.status(HttpStatus.NO_CONTENT).json(data);
            }

            return res.status(HttpStatus.OK).json(data);

        }).catch(error => {
            return res.status(HttpStatus.FORBIDDEN).json(error);
        }
        );

    }

    @Delete(':id')
    @ApiResponse({ status: 201, description: 'The note has been deleted succesfully.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiResponse({ status: 404, description: 'Notes not found.'})
    public async removeOneNote(@Param('id') id: string, @Response() res) {

        await this.noteService.deleteOneNote(id).then(data => {

            if (data === null) {
                return res.status(HttpStatus.NOT_FOUND).json(data);
            }

            return res.status(HttpStatus.CREATED).json(data);

        }).catch(error => {

            console.log(error);
            return res.status(HttpStatus.FORBIDDEN).json(error);
        }
        );
    }

    @Put(':id')
    @ApiResponse({ status: 201, description: 'The note has been successfully updated.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiResponse({ status: 404, description: 'Notes not found.'})
    public async updateOneNote(@Param('id') id: string, @Body() noteToUpdate: CreateNoteDto, @Response() res) {

        console.log("El id ", id);
        console.log("Nota a actualizar ", noteToUpdate);


        await this.noteService.updateNote(id, noteToUpdate).then((data) => {

            console.log("la data", data);
            return res.status(HttpStatus.CREATED).json(data);
        }).catch((error) => {

            return res.status(HttpStatus.FORBIDDEN).json(error);
        });

    }

}
