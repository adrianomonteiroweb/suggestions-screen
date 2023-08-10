import express from 'express'
import cors from 'cors'

class ServerBootstrapper {
   
    public app: express.Application = express();
    private port: number = 3000

    constructor()
    {
        this.app.use(express.json());
        this.app.use(cors());
        this.listen();
    }

    public listen() 
    {
       this.app.listen(this.port, () => console.log(`ouvindo na porta ${this.port}`))
    }
}

new ServerBootstrapper();