import { Router } from "express";
import productController from "./../controllers/productController.js";

const router = Router();

router.post("/createProduct", productController.createProduct);

router.get("/products", productController.listProducts);
router.get("/singleProduct/:id", productController.singleProduct);
router.get("/searchProducts", productController.searchProducts);

router.put("/updateProduct/:id", productController.updateProduct);

router.delete("/deleteProduct/:identificador", productController.deleteProduct);

export default router;