export interface Product {
  id: string;
  nombre: string;
  marca: string;
  categoria: string;
  modelo: string;
  descripcion: string;
  precio: number;
  stock: number;
}

export interface ProductFormData {
  nombre: string;
  marca: string;
  categoria: string;
  modelo: string;
  descripcion: string;
  precio: string;
  stock: string;
}

export type CreateProductData = Omit<Product, "id">;
