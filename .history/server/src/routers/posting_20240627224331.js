import express from 'express'
import posting  from '../service/posting'
const router = express.Router()
router.post('/' , posting)
export default router