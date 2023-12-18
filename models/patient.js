const mongoose = require('mongoose')

const patientSchema = mongoose.Schema(
    {
        patientId:{
            type:String,
            required:true,
        },

       surname:{
            type:Number,
            required:true,
        },

        otherNames:{
            type:String,
            required:true,
        },

        gender:{
            type:String,
            required:true,
        },

        phoneNumber:{
            type:Number,
            required:true,
        },

        residentialAdress:{
            type:String,
            required:true,
        },

        emergencyName:{
            type: String,
            required:true,
        },

        emergencyContact:{
            type:Number,
            required: true,
        },

        relationshipWithPatient:{
            type:String,
            required:true,
        }
    }
)

const patient = mongoose.model('Patient', patientSchema);