import Ajv from 'ajv';

const ajv = new Ajv({ allErrors: true });

export default (schema) => {
  return (req, res, next) => {
    const validate = ajv.compile(schema);
    const valid = validate(req.body);
    if (!valid) {
      res.status(422).send('유효하지 않은 입력값입니다.');
    }

    return next();
  };
};
