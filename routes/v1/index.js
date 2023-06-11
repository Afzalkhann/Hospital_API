const express=require('express')
const router=express.Router()

router.use('/user',require('./user'))
router.use('/patient',require('./patient'))
router.use('/reports',require('./reports'))

module.exports=router