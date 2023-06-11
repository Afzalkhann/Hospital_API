const express=require('express')
const patientController=require('../../controllers/v1/patientController')
const reportController=require('../../controllers/v1/reportController')

const router=express.Router()

router.use('/',reportController.report)

module.exports=router