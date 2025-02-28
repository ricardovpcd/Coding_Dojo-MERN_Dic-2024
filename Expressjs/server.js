import express from "express";
import dotenv from "dotenv";

import routes from "./route.js";

const app = new express();
app.use(express.json());

dotenv.config();

app.use(routes);

app.listen(process.env.PORT, ()=> {
    console.log("Servidor levantado!");
});