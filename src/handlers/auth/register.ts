import { Request, Response } from 'express';
import argon2 from 'argon2';
import response from '../../utils/response';
import User from '../../models/user';
import userSchema from '../../validators/user';

const register = async (req: Request, res: Response): Promise<Response> => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return response(res, error, 'INVALID_REGISTER_DATA');
  }
  const hashedPassword = await argon2.hash(req.body.password);
  const user = new User({
    login: req.body.login,
    password: hashedPassword,
  });
  let saved;
  try {
    saved = await user.save();
  } catch (err) {
    if (err.code === 11000) {
      return response(res, {}, 'USER_EXISTS');
    }
  }
  return res.json({
    saved,
  });
};

export default register;
