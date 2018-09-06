import * as mongoose from 'mongoose';

export const noteSchema = new mongoose.Schema(
  {
    idUser: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
  }, {
    timestamps: true,
  },
);

// Created at y Updated at