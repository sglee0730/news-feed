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
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'News',
    required: true,
  },
  token: {
    type: String,
    default: 'News',
    required: true,
  },
});

schema.index({ id: 1 }, { background: true, unique: true });
schema.index({ token: 1 }, { background: true, unique: true });

export default schema;
