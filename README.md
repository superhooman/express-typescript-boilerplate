# express-typescript-boilerplate
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
```
npm -i //or yarn
```
2. Build sources
```
npm run build //or yarn build
```
3. Copy `.env.example` to `.env`
4. Edit `.env` file and put required variables
5. Start
```
npm start
```
