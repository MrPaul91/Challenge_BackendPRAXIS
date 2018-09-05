import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { noteserviceI, note } from './interfaces';
import { Model } from 'mongoose';

import { CreateNoteDto } from './dto/note.dto';

@Injectable()
export class NoteserviceService implements noteserviceI {
    constructor(@InjectModel('note') private readonly noteModel: Model<note>) {}
   
    async createNote(nodeBody: CreateNoteDto): Promise<note> {
        
        const createdNoteObj = new this.noteModel(nodeBody);
        return await createdNoteObj.save();
    }

    async findAll(): Promise<note[]>{
        return await this.noteModel.find().exec();
    }

    async getOneNote(idNote: string): Promise<note> {
        return await this.noteModel.findById(idNote).exec();
    }


    async deleteOneNote(idNote: string): Promise<note> {
        return await this.noteModel.findByIdAndRemove(idNote).exec();
    }


    async updateNote(idNote: string, newNoteBody:CreateNoteDto )/*: Promise<note>*/{

        let note = await this.noteModel.findById(idNote).exec();
    

        if(!note){
            throw new Error(`Note with ID ${idNote} not found in the DB`);
        }
        else{
            return await this.noteModel.findByIdAndUpdate(idNote, newNoteBody).exec();
        }
        
    } 

    async getMyNotes(id: string): Promise<note[]> {
        
        console.log("notes del user: ",id);
        return await this.noteModel.find({idUser:id}).exec();
    }



}
