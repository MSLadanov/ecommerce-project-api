import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const productsStorageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "static/products/");
  },
  filename: (req, file, cb) => {
    const extension = file.originalname.split(".")[1];
    cb(null, `${uuidv4()}.${extension}`);
  },
});

export default productsStorageConfig;
