import Review from "../models/review.js";

const createReview = async (req, res) => {
    try {
        var data = req.body;

        var newReview = new Review({
            comment: data.comment,
            book: data.bookId
        });

        await newReview.save();

        res.status(201).json();
    } catch (error) {
        res.status(400).json( { message: error.message } );
    }
}

const getReviewsByBookId = async (req, res) => {
    var id = req.params.id;
    var reviewList = await Review.find({ book: id });

    res.status(200).json(reviewList);
}

export default { createReview, getReviewsByBookId };