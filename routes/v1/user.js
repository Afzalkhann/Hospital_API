const express=require('express')
const userController=require('../../controllers/v1/userController')
const router=express.Router()


router.use('/signUp',userController.signUp)
router.use('/signIn',userController.createSession)

module.exports=router