import express from 'express'
const multer = require('multer');
const upload = multer();
import * as postController from '../controller/post'
const router = express.Router()
router.get('/all' , postController.getPosts)
router.get('/limit' , postController.getFilterPrice)
router.post('/posting' , upload(), postController.posting)
export default router