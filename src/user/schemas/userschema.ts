import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
  }, {
    timestamps: true
  }
);