import { Schema } from 'mongoose';

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
    required: true,
  },
  type: {
    type: String,
    default: 'School',
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

schema.index({ name: 1 }, { background: true, unique: true });
schema.index({ id: 1 }, { background: true, unique: true });
schema.index({ createdAt: 1, id: 1 }, { background: true, unique: false });

export default schema;
