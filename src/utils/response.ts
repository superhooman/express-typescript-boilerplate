import { Response } from 'express';
import debug from 'debug';
import errors from '../errors';

const log = debug('client');

const response = (
  res: Response,
  data?: Object,
  errCode?: string,
  errMessage?: string,
): Response => {
  if (errCode) {
    log('Client Error', errCode);
    return res.json({
      success: false,
      ...data,
      errCode,
      message: errMessage || errors[errCode],
    });
  }
  return res.json({
    success: true,
    ...data,
  });
};

export default response;
