import express from 'express';
import cors from 'cors';

class App {
    public app: express.Application = express();

    constructor() {
        this.app.use(express.json());
        this.app.use(cors());
    }
}

export default new App().app;
