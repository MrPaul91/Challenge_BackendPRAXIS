import {
    Controller, Get, Response, HttpStatus, Param, Body, Post,
    Request, Patch, Delete, Put
} from '@nestjs/common';
import { NoteserviceService } from './noteservice.service';
import { noteserviceI, note } from './interfaces';
import { CreateNoteDto } from './dto/note.dto';


@Controller('note')
export class NotecontrollerController {

    constructor(private readonly noteService: NoteserviceService) { }

    @Post()
    public async createNote(@Response() res, @Body() createNoteBody: CreateNoteDto) {

        console.log("aqui se crea ", createNoteBody);
        let obj = await this.noteService.createNote(createNoteBody);

        return res.status(HttpStatus.OK).json(obj);
    }

    @Get()
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
    public async findOneNote(@Param('id') id, @Response() res) {

        await this.noteService.getOneNote(id).then(data => {

            if (data === null) {
                return res.status(HttpStatus.NOT_FOUND).json(data);
            }

            return res.status(HttpStatus.OK).json(data);

        }).catch(error => {
            return res.status(HttpStatus.FORBIDDEN).json(error);
        }
        );

    }


    @Delete(':id')
    public async removeOneNote(@Param('id') id, @Response() res) {

        await this.noteService.deleteOneNote(id).then(data => {

            if (data === null) {
                return res.status(HttpStatus.NOT_FOUND).json(data);
            }

            return res.status(HttpStatus.OK).json(data);

        }).catch(error => {

            console.log(error);
            return res.status(HttpStatus.FORBIDDEN).json(error);
        }
        );
    }



    @Put(':id')
    public async updateOneNote(@Param('id') id, @Body() noteToUpdate: CreateNoteDto, @Response() res) {

        console.log("El id ", id);
        console.log("Nota a actualizar ", noteToUpdate);


        await this.noteService.updateNote(id, noteToUpdate).then((data) => {

            console.log("la data", data);
            return res.status(HttpStatus.OK).json(data);
        }).catch((error) => {

            return res.status(HttpStatus.FORBIDDEN).json(error);
        });

    }

}
