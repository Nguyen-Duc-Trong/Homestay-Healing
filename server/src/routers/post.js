import express from 'express'
import * as postController from '../controller/post'
const router = express.Router()
router.get('/all' , postController.getPosts)
router.get('/limit' , postController.getFilterPrice)
export default router