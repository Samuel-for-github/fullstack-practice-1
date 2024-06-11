import express from 'express';
import appRouter from "./app.router.js";

const app = express();

app.use("/",appRouter)


export {app}