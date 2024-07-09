import express from 'express'
import * as controller from '../controller/contract'
const multer = require('multer');

const upload = multer();
const router = express.Router()

router.post('/all',upload.none(), controller.getBookRoom)
router.post('/add',upload.none(), controller.addBookRoom)

export default router 