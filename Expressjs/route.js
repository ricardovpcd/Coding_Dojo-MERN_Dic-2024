import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.post("/createProduct", controller.createProduct);

router.get("/products", controller.listProducts);
router.get("/singleProduct", controller.singleProduct);
router.get("/searchProducts", controller.searchProducts);

router.delete("/deleteProduct/:identificador", controller.deleteProduct);

router.put("/updateProduct/:id", controller.updateProduct);

export default router;