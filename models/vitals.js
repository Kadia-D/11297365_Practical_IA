const mongoose = require('mongoose')

const vitalsSchema = mongoose.Schema(
    {
        BloodPressure : Number,
        Temperature : Number,
        Pulse : Number,
        SP02 : Number,
    }
)
const vitals = mongoose.model('Vitals', vitalsSchema);