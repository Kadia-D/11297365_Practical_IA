const mongoose = require('mongoose')

const visitationSchema = mongoose.Schema(
    {
        PatientID: Number,
        Date: Number,
        Time: Number,
        TypeOfEncounter: String,
    }
)
const visitation = mongoose.model('Visitation', visitationSchema);