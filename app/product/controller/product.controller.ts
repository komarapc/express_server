import Controller from "../../../config/controller";
import { ResponseData } from "../../../utils/response-data";
import { ProductDto } from "../interface/product.interface";
import ProductService from "../service/product.service";
import { Request, Response, NextFunction } from "express";
const productService = new ProductService();
class ProductController implements Controller {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    const products = await productService.getAll();
    console.log(products);
    res.status(products.statusCode).send(products);
  }
  async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const product: ResponseData = await productService.getById(id);

    res.status(product.statusCode).send(product);
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const productDto: ProductDto = req.body;
    const result: ResponseData = await productService.create(productDto);
    res.status(result.statusCode).send(result);
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    const product: ProductDto = req.body;
    const { id } = req.params;
    const updateProduct: ResponseData = await productService.update({
      id,
      product_name: product.product_name,
    });
    res.status(updateProduct.statusCode).send(updateProduct);
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;
    const deleteProduct: ResponseData = await productService.delete(id);
    res.status(deleteProduct.statusCode).send(deleteProduct);
  }
}
export default ProductController;
