import express from 'express'
import * as postController from '../controller/posting'
const router = express.Router()
router.post('/posting' , postController.getPosts)
export default router