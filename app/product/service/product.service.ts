import { ResponseData } from "../../../utils/response-data";
import {
  ErrorProductDto,
  ProductDto,
  UpdateProductDto,
} from "../interface/product.interface";
import ProductModel from "../model/product.model";
const productModel = new ProductModel();
class ProductService {
  private productModel = new ProductModel();
  async getAll() {
    return {
      statusCode: 200,
      statusMessage: "Ok",
      data: await this.productModel.getAll(),
    };
  }

  async create(product: ProductDto): Promise<ResponseData> {
    const errors: ErrorProductDto[] = [];
    if (!Boolean(Object.keys(product).length)) {
      errors.push({
        name: "product_name",
        message: "should not be empty",
      });
      return { statusCode: 400, statusMessage: "Bad Request", errors };
    }
    if (!product.product_name) {
      errors.push({ name: "product_name", message: "should not be empty" });
      return { statusCode: 400, statusMessage: "Bad Requeest", errors };
    }
    try {
      const createProduct = await productModel.create(product);
      return {
        statusCode: 200,
        statusMessage: "Ok",
        message: "product created",
        data: createProduct,
      };
    } catch (error) {
      return { statusCode: 500, statusMessage: "Internal Server Error" };
    }
  }

  async getById(id: string): Promise<ResponseData> {
    const product = await productModel.getById(id);
    if (!product) return { statusCode: 404, statusMessage: "Not Found" };
    return { statusCode: 200, statusMessage: "Ok", data: product };
  }

  async update(product: UpdateProductDto): Promise<ResponseData> {
    const findProduct = await productModel.getById(product.id);
    if (!findProduct) return { statusCode: 404, statusMessage: "Not Found" };
    try {
      const updateProduct = await productModel.update(product);
      return {
        statusCode: 200,
        statusMessage: "Ok",
        message: "product updated",
        data: updateProduct,
      };
    } catch (error) {
      return { statusCode: 500, statusMessage: "Internal Server Error" };
    }
  }

  async delete(id: string): Promise<ResponseData> {
    if (!this.findProduct(id))
      return { statusCode: 404, statusMessage: "Not Found" };
    try {
      const deleteProduct = await productModel.delete(id);
      return {
        statusCode: 200,
        statusMessage: "Ok",
        message: "product deleted",
      };
    } catch (error) {
      return { statusCode: 500, statusMessage: "Internal Server Error" };
    }
  }

  async findProduct(id: string) {
    return await productModel.getById(id);
  }
}
export default ProductService;
