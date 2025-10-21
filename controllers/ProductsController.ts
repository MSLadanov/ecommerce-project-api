import type { Request, Response, NextFunction } from "express";
import type { IProduct } from "../types/ProductRequest.ts";
import ProductModel from "../models/Product.ts";
import { ApiError } from "../utils/ApiError.ts";

class ProductsController {
  static imagesFields = [
    "thumbnail",
    "image_1",
    "image_2",
    "image_3",
    "image_4",
  ];
  async getAllProducts(req: Request, res: Response, next: NextFunction) {
    const Products = await ProductModel.findAll();
    res.send(Products);
  }
  async getProductCategories(req: Request, res: Response, next: NextFunction) {
    res.send("<h1>Product categories</h1>");
  }
  async getProductsByCategory(req: Request, res: Response, next: NextFunction) {
    res.send("<h1>Products by category</h1>");
  }
  async addProduct(req: Request, res: Response) {
    const {
      title,
      description,
      category,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      sku,
      weight,
      width,
      height,
      depth,
      warrantyInformation,
      shippingInformation,
      availabilityStatus,
      returnPolicy,
    } = req.body as IProduct;
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const productImages = Object.fromEntries(
      ProductsController.imagesFields.map((field: string) => [
        field,
        files[`${field}`]![0]?.path,
      ])
    );
    const { thumbnail, image_1, image_2, image_3, image_4 } = productImages;
    const newProduct = await ProductModel.create({
      title,
      description,
      category,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      sku,
      weight,
      width,
      height,
      depth,
      warrantyInformation,
      shippingInformation,
      availabilityStatus,
      returnPolicy,
      thumbnail,
      image_1,
      image_2,
      image_3,
      image_4,
    });
    res.send({ data: "Ok" });
  }
}

export default new ProductsController();
