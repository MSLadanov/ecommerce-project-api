import { DataTypes } from "sequelize";
import db from "../config/db.ts";

const Product = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  discountPercentage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: { type: DataTypes.STRING, allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sku: { type: DataTypes.STRING, allowNull: false },
  weight: { type: DataTypes.STRING, allowNull: false },
  width: { type: DataTypes.STRING, allowNull: false },
  height: { type: DataTypes.STRING, allowNull: false },
  depth: { type: DataTypes.STRING, allowNull: false },
  warrantyInformation: { type: DataTypes.STRING, allowNull: false },
  shippingInformation: { type: DataTypes.STRING, allowNull: false },
  availabilityStatus: { type: DataTypes.STRING, allowNull: false },
  returnPolicy: { type: DataTypes.STRING, allowNull: false },
  thumbnail: { type: DataTypes.STRING, allowNull: false },
  image_1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image_2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image_3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image_4: {
    type: DataTypes.STRING,
    allowNull: true,
  },
};

const ProductModel = db.define("product", Product);

export default ProductModel;
