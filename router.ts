import express, { Router } from "express";
import productRoutes from "./app/product/routes/product.routes";
class AppRouter {
  private router: Router;
  constructor() {
    this.router = Router();
    this.setupRouter();
  }
  setupRouter() {
    this.router.use("/product", productRoutes);
  }
  getRouter() {
    return this.router;
  }
}

export default new AppRouter().getRouter();
