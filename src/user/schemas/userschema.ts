import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
      unique: true
    },
    name: {
      required: true,
      type: String
    },
  }, {
    timestamps: true
  }
);