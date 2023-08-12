import { PrismaClient } from "@prisma/client";
import {
  Product,
  ProductDto,
  UpdateProductDto,
} from "../interface/product.interface";
import { nanoid } from "nanoid";

export default class ProductModel {
  private prisma = new PrismaClient();

  async getAll() {
    return this.prisma.product.findMany({
      where: { deleted_at: null },
    });
  }
  async create(product: ProductDto) {
    return this.prisma.product.create({
      data: {
        id: nanoid(),
        product_name: product.product_name,
      },
    });
  }

  async getById(id: string) {
    return await this.prisma.product.findUnique({ where: { id } });
  }

  async update(product: UpdateProductDto) {
    return await this.prisma.product.update({
      where: { id: product.id },
      data: {
        product_name: product.product_name,
      },
    });
  }

  async delete(id: string) {
    return this.prisma.product.update({
      where: { id },
      data: { deleted_at: new Date() },
    });
  }
}
