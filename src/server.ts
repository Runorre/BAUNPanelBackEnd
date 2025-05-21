import http from "http";
import https from "https";
import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import cors from "cors";
import bodyParser from "body-parser";


dotenv.config();


(async () => {
    const app = express();

    app.disable("X-Powered-By");
    app.use(express.json());
    app.use(bodyParser.json({ type: 'application/*+json' }));

    app.use(cors())

    const server = http.createServer(app);


    server.listen(process.env.PORT, () => {
        console.log(`Server Start HTTP Port : ${process.env.PORT}`);
    })

    
})()
