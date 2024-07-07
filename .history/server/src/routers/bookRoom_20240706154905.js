import express from 'express'
import * as controller from '../controller/bookRoom'

const router = express.Router()

router.get('/all', controller.getBookRoom)

export default router 