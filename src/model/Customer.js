const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    custId:String,
    custName:{
        type: String,
        required : true
    },
    businessType:String,
    Status:String,
    Purpose:String,
    RMTeam:String,
    PEP:String,
    AnnualTurnOver:String,
    EstimateTurnOver:String
})

module.exports = mongoose.model('customer', CustomerSchema);