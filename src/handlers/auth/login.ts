import { Request, Response } from 'express';
import argon2 from 'argon2';
import response from '../../utils/response';
import User from '../../models/user';
import userSchema from '../../validators/user';

const login = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return response(res, error, 'INVALID_LOGIN_DATA');
  }
  const user = await User.findByLogin(req.body.login);
  if (!user) {
    return response(res, error, 'LOGIN_ERROR');
  }
  const valid = await argon2.verify(user.password, req.body.password);
  if (!valid) {
    return response(res, error, 'LOGIN_ERROR');
  }
  if (req.session) {
    req.session.user = {
      // eslint-disable-next-line no-underscore-dangle
      id: user._id,
      login: user.login,
    };
  }
  return response(res, req.session);
};

export default login;
