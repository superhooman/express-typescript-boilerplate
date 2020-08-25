declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    DEBUG: string;
    CLIENT_URL: string;
    MONGO_URL: string;
    REDIS_URL: string;
    USEPROXY: string;
    DOMAIN: string;
    COOKIE_NAME: string;
    SESSION_SECRET: string;
  }
}
