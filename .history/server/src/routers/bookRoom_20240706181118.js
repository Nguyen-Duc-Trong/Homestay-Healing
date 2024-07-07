import express from 'express'
import * as controller from '../controller/bookRoom'
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2 * 1024 * 1024, // 2 MB
        files: 1,
    },
});

const router = express.Router()

router.get('/all',upload.none(), controller.getBookRoom)
router.post('/add',upload.none(), controller.addBookRoom)
router.post('/delete',upload.none(), controller.deleteBookRoom)

export default router 