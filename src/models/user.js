import { Schema } from 'mongoose';

const schema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'User',
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

schema.index({ id: 1 }, { background: true, unique: true });
schema.index(
  { createdAt: 1, role: 1, id: 1 },
  { background: true, unique: false },
);

export default schema;
