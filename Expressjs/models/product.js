import * as mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        // unique: true
        name: { type: String, required: true, minLength: 5, maxLength: 100 },
        quantity: { type: Number, required: true, min: 2, max: 20 },
        isActive: Boolean,
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        address: {
            description: String,
            zipCode: Number,
            country: String
        }
    }
);

export default mongoose.model("Product", productSchema);