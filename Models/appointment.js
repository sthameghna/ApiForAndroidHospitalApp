var mongoose = require('mongoose')

const appointment = mongoose.model('appointment', {
    
    
    doctor:
    {
        type:String
    },
    speciality:{
        type:String
    },
    date:{
        type:String
    },
    userid: {
        type:Object
    }
})


module.exports = appointment