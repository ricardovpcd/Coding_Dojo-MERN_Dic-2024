import { Router } from "express";
import bookController from "../controllers/bookController.js";

const router = Router();

router.post("/createBook", bookController.createBook);
router.get("/getAllBooks", bookController.getAllBooks);
router.get("/getBookById/:id", bookController.getBookById);
router.put("/updateBook/:id", bookController.updateBook);
router.delete("/deleteBook/:id", bookController.deleteBook);

export default router;