import express from 'express'
import cors from 'cors'
require('dotenv').config();


class ServerBootstrapper {
   
    public app: express.Application = express();
    private port: string | undefined =  process.env.PORT
    

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