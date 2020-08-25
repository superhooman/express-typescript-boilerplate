# express-typescript-boilerplate
[![Build Status](https://travis-ci.org/superhooman/express-typescript-boilerplate.svg?branch=master)](https://travis-ci.org/superhooman/express-typescript-boilerplate)
[![Dependencies](https://david-dm.org/superhooman/express-typescript-boilerplate/status.svg)](https://david-dm.org/superhooman/express-typescript-boilerplate)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/superhooman/express-typescript-boilerplate.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/superhooman/express-typescript-boilerplate/context:javascript)

A little bit opinionated Express + TypeScript + MongoDB boilerplate.
## What is used:
- `express`
- `mongoose` (`typegoose`) - MongoDB Driver
- `helmet` - basic security
- `joi` - schema validator
- `express-session` - session middleware*
- `argon2` - password encryption
- `debug` - logger
- `express-slow-down`
- `express-rate-limit`

* Sessions are stored in Redis (`ioredis`, `connect-redis`).

## Installation

1. Install dependencies
```bash
npm -i #or yarn
```
2. Build sources
```bash
npm run build #or yarn build
```
3. Copy `.env.example` to `.env`
4. Edit `.env` file and put required variables
5. Start
```
npm start
```
