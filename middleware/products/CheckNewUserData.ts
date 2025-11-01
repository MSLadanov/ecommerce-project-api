import multer from "multer";
import Express from 'express'

export const checkNewUserData = Express().use(multer({fileFilter: (req, file, cb) => {}}))