import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
    var data = req.body;

    var passwordEncrypted = await bcrypt.hash(data.password, 10);
    var newUser = new User({
        email: data.email,
        password: passwordEncrypted,
        name: data.name
    });

    await newUser.save();

    res.status(201).json({"status": true});
}

const login = async (req, res) => {
    var data = req.body;

    var userFind = await User.findOne({email: data.email});
    if(userFind == null){
        return res.status(201).json( { "exist": false } );
    }

    var validate = await bcrypt.compare(data.password, userFind.password);
    if(!validate){
        return res.status(201).json( { "exist": false } );
    }

    var userData = {
        userId: userFind._id,
        name: userFind.name
    }

    var jwtValue = jwt.sign(userData, "CodingDojoKey", { expiresIn: "8h" })
    res.status(200).json({ "exist": true, jwt: jwtValue });
}

export default {register, login};