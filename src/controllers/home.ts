import * as express from 'express';
import index from '../handlers/home/index';
import IControllerBase from '../interfaces/IControllerBase';

class HomeController implements IControllerBase {
  public path = '/';

  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes(): void {
    this.router.get('/', index);
  }
}

export default HomeController;
