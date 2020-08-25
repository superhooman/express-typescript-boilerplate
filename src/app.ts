import express, { Application } from 'express';
import { useProxy } from './constants';

class App {
    public app: Application

    public port: number

    constructor(appInit: { port: number; middleWares: any; controllers: any; useProxy?: boolean }) {
      this.app = express();
      this.port = appInit.port;
      if (useProxy) {
        this.app.set('trust proxy', 1);
      }
      this.middlewares(appInit.middleWares);
      this.routes(appInit.controllers);
      this.assets();
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
      middleWares.forEach((middleWare) => {
        this.app.use(middleWare);
      });
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
      controllers.forEach((controller) => {
        this.app.use(controller.path, controller.router);
      });
    }

    private assets() {
      this.app.use(express.static('public'));
    }

    public listen(): void {
      this.app.listen(this.port, () => {
        // eslint-disable-next-line no-console
        console.log(`App listening on the http://localhost:${this.port}`);
      });
    }
}

export default App;
