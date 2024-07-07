import express from 'express'
import * as controller from '../controller/bookRoom'

const router = express.Router()

router.get('/all', controller.getBookRoom)
router.post('/add', controller.addBookRoom)
router.post('/delete', controller.deleteBookRoom)

export default router 