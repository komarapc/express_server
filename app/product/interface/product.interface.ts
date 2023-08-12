export interface Product {
  id?: string;
  product_name?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export interface ProductDto {
  product_name: string;
}

export interface ErrorProductDto {
  name: keyof ProductDto;
  message: string;
}
export interface UpdateProductDto {
  id: string;
  product_name: string;
}
