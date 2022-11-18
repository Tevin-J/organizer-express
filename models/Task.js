import { Schema, model } from 'mongoose';
const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export default model('Task', schema);
