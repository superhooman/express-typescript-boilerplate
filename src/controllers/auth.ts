import * as express from 'express';
import IControllerBase from '../interfaces/IControllerBase';
import register from '../handlers/auth/register';
import login from '../handlers/auth/login';
import me from '../handlers/auth/me';

class AuthController implements IControllerBase {
  public path = '/auth';

  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes(): void {
    this.router.post('/register', register);
    this.router.post('/login', login);
    this.router.get('/me', me);
  }
}

export default AuthController;
