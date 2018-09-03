import { Document } from 'mongoose';

export interface note extends Document {

  readonly user: string;
  readonly text: string;

  
}