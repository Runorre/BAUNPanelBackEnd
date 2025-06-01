import http from "http";
import https from "https";
import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes";


import { connectDb } from "./services/MongooseService";
import { initGridFS } from "./services/gridFs";


dotenv.config();


(async () => {
    const app = express();

    app.disable("X-Powered-By");
    app.use(express.json());
    app.use(bodyParser.json({ type: 'application/*+json' }));

    app.use(cors())

    app.use('/api', router);

    const server = http.createServer(app);

    server.listen(process.env.PORT, () => {
        console.log(`Server Start HTTP Port : ${process.env.PORT_HTTP}`);
    })

    if (!process.env.MONGODB_USERNAME || !process.env.MONGODB_PASSWORD || !process.env.MONGODB_URL) {
        throw new Error('Missing required MongoDB environment variables');
    }

    await connectDb(process.env.MONGODB_USERNAME, process.env.MONGODB_PASSWORD, process.env.MONGODB_URL);
    initGridFS();
})()
