const mongoose=require('mongoose')

const patientSchema=new mongoose.Schema({
    phone:{
        type:Number,
        require:true,
       
    },
    name:{
        type:String,
        require:true
    }
},{
    timestamps:true
})

const Patient=mongoose.model('Patient',patientSchema)
module.exports=Patient