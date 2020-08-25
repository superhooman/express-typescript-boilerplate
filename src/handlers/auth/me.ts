import { Request, Response } from 'express';
import response from '../../utils/response';
import User from '../../models/user';

const me = async (req: Request, res: Response): Promise<Response> => {
  if (!req.session || !req.session.user) {
    return response(res, {}, 'NO_SESSION');
  }
  const user = await User.findById(req.session.user.id, {
    password: false,
  });
  if (!user) {
    return response(res, {}, 'NO_SESSION');
  }
  return response(res, user.toJSON());
};

export default me;
