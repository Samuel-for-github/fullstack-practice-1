import express from 'express';
import appRouter from "./app.router.js";
import cors from "cors";
const app = express();


app.use("/",appRouter)


export {app}