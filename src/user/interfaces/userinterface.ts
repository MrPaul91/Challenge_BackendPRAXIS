import { Document } from 'mongoose';

export interface userI extends Document {

  readonly username: string;
  readonly name: string;

  
}