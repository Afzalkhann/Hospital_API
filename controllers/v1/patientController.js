const Patient=require('../../models/patient')

module.exports.register=async function(req,res){
    try{
        console.log('reached to controller')
        let patient=await Patient.findOne({phone:req.body.phone})
        console.log(patient)
        if(patient){
            return res.json(200,{
                message:'Patient already register',
                data:{
                    name:patient.name,
                    phone:patient.phone
                }
            })
        }
        else{
            let patient =await Patient.create({
                phone:req.body.phone,
                name:req.body.name
            })
            console.log('patient created')
            return res.json(200,{
                message:'Patient registered successfully'
            })
            
        }
        
    }catch(err){
        console.log('error',err)
        return res.json(500,{
            message:'internal error'
        })
    }
}

