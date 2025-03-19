import mongoose, { Schema } from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        comment: String,
        book: { type: Schema.Types.ObjectId, ref: "Book" }
    }
)

export default mongoose.model("Review", reviewSchema);