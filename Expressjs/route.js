import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.post("/createProduct", controller.createProduct);

router.get("/products", controller.listProducts);
router.get("/singleProduct/:id", controller.singleProduct);
router.get("/searchProducts", controller.searchProducts);

router.put("/updateProduct/:id", controller.updateProduct);

router.delete("/deleteProduct/:identificador", controller.deleteProduct);

export default router;