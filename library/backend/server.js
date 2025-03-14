import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:123@cluster0.fkvmu.mongodb.net/codingdojolibrary?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Se conecto correctamente la BD"))
.catch((e) => console.log(e));

app.use(bookRoutes);
app.use(userRoutes);

app.listen(8080, () => {
    console.log("Se inicio el server de manera correcta");
})