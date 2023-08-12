import express, { Router } from "express";
import ProductController from "../controller/product.controller";
const controller = new ProductController();
const productRoutes = express.Router();

productRoutes.get("/", controller.getAll);
productRoutes.post("/", controller.create);
productRoutes.get("/:id", controller.getById);
productRoutes.patch("/:id", controller.update);
productRoutes.delete("/:id", controller.delete);

export default productRoutes;
