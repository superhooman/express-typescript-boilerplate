import { Request, Response } from 'express';

const index = (_: Request, res: Response): void => {
  const message = {
    success: true,
    message: 'Yay! It works',
  };
  res.json(message);
};

export default index;
