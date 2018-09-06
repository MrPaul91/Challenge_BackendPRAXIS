import { note } from './noteinterface';
import { CreateNoteDto } from '../dto/note.dto';

export interface noteserviceI {

     createNote(nodeBody: CreateNoteDto): Promise<note>;

     findAll(): Promise<note[]>;

     getOneNote(idNote: string): Promise<note>;

     deleteOneNote(idNote: string): Promise<note>;

     updateNote(idNote: string, newNoteBody: CreateNoteDto);

}