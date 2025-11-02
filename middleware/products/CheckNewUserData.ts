import multer from "multer";
import Express from 'express'
import usersStorageConfig from "../../config/usersStorageConfig.ts";

export const checkNewUserData = Express().use(
  multer({
    fileFilter: (req, file, cb) => {
    },
    storage: usersStorageConfig,
    limits: {
      fileSize: 10 * 1024 * 1024,
    },
  }).fields([
  ])
);
