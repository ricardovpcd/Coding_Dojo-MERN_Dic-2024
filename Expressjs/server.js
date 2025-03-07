import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import productRoutes from "./routes/productRoute.js";
import mongoose from "mongoose";

const app = new express();
app.use(express.json());
app.use(cors());

dotenv.config();

mongoose.connect("mongodb+srv://admin:123@cluster0.fkvmu.mongodb.net/condigdojostore?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Se conecto correctamente a la bd"))
.catch((e) => console.log("Error", e));

app.use(productRoutes);

app.listen(process.env.PORT, ()=> {
    console.log("Servidor levantado!");
});