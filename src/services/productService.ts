import supabase from "../lib/supabase";
import type { CreateProductData, Product } from "../types/product";

const getProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw error;
  }

  return data;
};

const createProduct = async (product: CreateProductData): Promise<Product> => {
  const { data, error } = await supabase
    .from("products")
    .insert(product)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
};

const updateProduct = async (product: Product): Promise<Product> => {
  const { data, error } = await supabase
    .from("products")
    .update(product)
    .eq("id", product.id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
};

const deleteProduct = async (id: string): Promise<void> => {
  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    throw error;
  }
};

export default {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
