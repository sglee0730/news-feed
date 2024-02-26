import { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const schema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  updatedBy: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    default: uuidv4(),
    required: true,
  },
  type: {
    type: String,
    default: 'News',
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

schema.index({ id: 1 }, { background: true, unique: true });
schema.index({ createdAt: 1, id: 1 }, { background: true, unique: false });
schema.index({ title: 1, id: 1 }, { background: true, unique: false });
schema.index({ content: 1, id: 1 }, { background: true, unique: false });

export default schema;
