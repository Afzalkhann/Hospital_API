const Patient=require('../../models/patient')
const User=require('../../models/user')
const Report=require('../../models/report')

module.exports.create=async function(req,res){
    try{
        console.log(req.body)
        const user=await User.findOne({email:req.body.email})
        const patient=await Patient.findOne({phone:req.body.phone})
        if(!user){
            return res.json(200,{
                message:'User is not registed, you cannot create report'
            })
        }
        else if(!patient){
            return res.json(200,{
                message:'Patient is not registed, please registed patinet before creating report '
            })
        }
        else{
            const report=await Report.create({
                patient:patient._id,
                status:req.body.status,
                createdBy:user._id
            })
            return res.json(200,{
                message:'Patient report created successfully',
                data:report
            })
        }
    }catch(err){
        console.log('error',err)
        return res.json(500,{
            message:'internal error'
        })
    }
}
module.exports.allReport=async function(req,res){
    try{
        const patient=await Patient.findOne({phone:req.body.phone})
        if(!patient){
            return res.json(200,{
                message:'Patient is not registed, please registed patinet before creating report '
            })
        }
        const reports=await Report.find({patient:patient._id})
        if(!reports){
            return res.json(200,{
                message:'your checkup is not completed'
            })
        }
        return res.json(200,{
            message:'here are your all reports',
            data:reports
        })
    }catch(err){

    }
}



module.exports.report=async function(req,res){
    try{
        
        console.log(req.query)
        const reports=await Report.find({status:req.query.status})
        if(!reports){
            return res.json(200,{
                message:'There is not report of this status'
            })
        }
        return res.json(200,{
            message:'Here are all reports',
            data:reports
        })
    }catch(err){

    }
}