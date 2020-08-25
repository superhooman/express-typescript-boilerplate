import { Request, Response } from 'express';
import debug from 'debug';

const log = debug('http');

const loggerMiddleware = (req: Request, _: Response, next: any): void => {
  log('Request logged:', req.method, req.path);
  next();
};

export default loggerMiddleware;
