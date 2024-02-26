export default {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 256,
    },
    content: {
      type: 'string',
      minLength: 1,
      maxLength: 40000,
    },
  },
  required: ['title'],
  additionalProperties: false,
};
