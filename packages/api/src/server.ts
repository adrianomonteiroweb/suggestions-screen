import app from './app';
import dotenv from 'dotenv';
dotenv.config();

class ServerBootstrapper {
    private port: string | undefined = process.env.PORT;

    constructor() {
        this.listen();
    }

    public listen() {
        app.listen(this.port, () => console.log(`Ouvindo na porta ${this.port}`));
    }
}

new ServerBootstrapper();
