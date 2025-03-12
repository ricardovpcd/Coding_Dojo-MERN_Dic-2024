import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, "El title es requerido"], maxLength: [100, "El title debe tener máximo 100 caracteres"] },
        year: { type: Number, required: true },
        description: String,
        available: Boolean
    }
)

export default mongoose.model("Book", bookSchema);