import bodyParser from 'body-parser';
import helmet from 'helmet';
import slowDown from 'express-slow-down';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

import mongoose from 'mongoose';

import Redis from 'ioredis';
import session from 'express-session';
import connectRedis from 'connect-redis';

import App from './app';
import loggerMiddleware from './middlewares/logger';
import Home from './controllers/home';
import AuthController from './controllers/auth';
import {
  PORT, MONGO_URL, REDIS_URL, useProxy, PROD, DOMAIN, COOKIE_NAME, SESSION_SECRET, CLIENT_URL,
} from './constants';

const RedisStore = connectRedis(session);
const redis = new Redis(REDIS_URL!);

const app = new App({
  port: PORT,
  controllers: [new Home(), new AuthController()],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    helmet(),
    loggerMiddleware,
    rateLimit({
      windowMs: 1000,
      max: 5,
    }),
    slowDown({
      windowMs: 15 * 60 * 1000,
      delayAfter: 200,
      delayMs: 200,
    }),
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 90, // 10 years
        httpOnly: true,
        sameSite: 'lax', // csrf
        secure: PROD, // cookie only works in https
        domain: PROD ? DOMAIN : undefined,
      },
      saveUninitialized: false,
      secret: SESSION_SECRET!,
      resave: false,
    }),
    cors({
      origin: CLIENT_URL,
      credentials: true,
    }),
  ],
  useProxy,
});

mongoose.connect(MONGO_URL!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.listen();
