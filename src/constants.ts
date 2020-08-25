import dotenv from 'dotenv';

dotenv.config();

export const PROD = process.env.NODE_ENV === 'production';
export const {
  DOMAIN, SESSION_SECRET, COOKIE_NAME, MONGO_URL, REDIS_URL, CLIENT_URL,
} = process.env;
export const PORT = Number(process.env.PORT);
export const useProxy = Boolean(process.env.USEPROXY);
