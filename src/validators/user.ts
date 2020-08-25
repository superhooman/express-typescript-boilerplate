import Joi from 'joi';

const schema = Joi.object({
  login: Joi.string().min(3).max(255).alphanum()
    .required(),
  password: Joi.string().min(6).required(),
});

export default schema;
