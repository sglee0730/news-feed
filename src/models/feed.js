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
  readAt: {
    type: Date,
  },
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'Feed',
    required: true,
  },
  news: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
});

schema.index({ id: 1 }, { background: true, unique: true });
schema.index({ createdAt: 1, id: 1 }, { background: true, unique: false });
schema.index({ title: 1, id: 1 }, { background: true, unique: false });
schema.index({ content: 1, id: 1 }, { background: true, unique: false });

export default schema;
