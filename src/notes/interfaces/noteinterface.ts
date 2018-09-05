import { Document } from 'mongoose';

export interface note extends Document {

  readonly idUser: string;
  readonly text: string;

  
}