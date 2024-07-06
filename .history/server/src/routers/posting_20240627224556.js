import express from 'express'
import posting  from '../service/posting'
const router = express.Router()
router.post('/' , (req,res)=>{
    res.send("okkkk")
})
export default router