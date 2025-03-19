import { Router } from "express";
import reviewController from "../controllers/reviewController.js";

const router = Router();

router.post("/createReview", reviewController.createReview);
router.get("/getReviewsByBookId/:id", reviewController.getReviewsByBookId);

export default router;