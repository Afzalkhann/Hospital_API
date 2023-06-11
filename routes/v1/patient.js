const express=require('express')
const patientController=require('../../controllers/v1/patientController')
const reportController=require('../../controllers/v1/reportController')

const router=express.Router()

router.use('/create',patientController.register)
router.use('/create_report',reportController.create)
router.use('/all_reports',reportController.allReport)

module.exports=router