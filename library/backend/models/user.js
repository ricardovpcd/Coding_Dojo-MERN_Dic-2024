import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: String,
        password: String,
        name: String,
    }
)

export default mongoose.model("User", userSchema);