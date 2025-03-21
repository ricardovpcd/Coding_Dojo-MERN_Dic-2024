import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import mongoose from "mongoose";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";

const app = express();
var server = http.createServer(app);

app.use(express.json());
app.use(cors());


var io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "PUT", "POST", "DELETE"]
    }
})

io.on("connection", (socket) => {

    socket.on("message", (data) => {
        io.emit("broadcast", data);
    });

    //console.log("Alguien se conecto al servidor WS");
});

mongoose.connect("mongodb+srv://admin:123@cluster0.fkvmu.mongodb.net/codingdojolibrary?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Se conecto correctamente la BD"))
.catch((e) => console.log(e));

app.use(bookRoutes);
app.use(userRoutes);
app.use(reviewRoutes);

server.listen(8080, () => {
    console.log("Se inicio el server de manera correcta");
})