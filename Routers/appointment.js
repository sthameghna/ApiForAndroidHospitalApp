const express = require('express');
const router = new express.Router() 

//require('./db/mongoose')
const appointment = require('../Models/appointment') 


//request for register/signup for users

router.post('/addappointment', function(req, res){   
console.log(req.body);
const mydata = new appointment(req.body)
mydata.save().then(function(){
res.send('booked')
}).catch(function(e){
res.send(e)

}) 
}) 
    

    
    //request to update user
    
    router.put('/updateshow/:showid', function(req, res){
        //console.log("dsfadf");
        appointment.findOneAndUpdate({_id :req.params.showid}, req.body).then(function(){
            res.send("Show Updated")
        }).catch(function(){ 
            res.send("error")
        }) 
        })


router.delete('/deleteappointment/:_id', function(req, res){
    console.log(req.params._id);
    appointment.findByIdAndDelete(req.params._id).then(function(){
        res.send("appointment deleted.")
    }).catch(function(){ 
        res.send(e)
    })
    })
    


        //getmyappointmentlist
        
        router.get('/selectmyappointments/:userid', function(req, res){
            appointment.find({userid:req.params.userid}).then(function(user_data){
        
                //this line writes on postman
            res.send(user_data);
            console.log(user_data)
            // res.send("ok")
            //console.log(user_data)
            }).catch(function(e){
                res.send("error")
            });
            })
           





    router.get('/searchshow/:searchKeyword', function(req, res){
        const keyword = req.params.searchKeyword.toLowerCase();
        appointment.find( {$or: [{ location : keyword}, {performer : keyword } ]} ,function(err,user_data){
        res.send(user_data);
        console.log(user_data)
        })
    })
   

    router.get('/selectallshow/', function(req, res){
        appointment.find().then(function(user_data){
    
            //this line writes on postman
        res.send(user_data);
        // console.log(req.body)
        // res.send("all data selected")
        //console.log(user_data)
        }).catch(function(e){
            res.send("error")
        });
        })

module.exports = router 

/*
const express = require('express');
const router = new express.Router() 

//require('./db/mongoose')
const ticketreserved = require('../Models/ticketreserved') 


//request for register/signup for users

router.post('/reserveticket', function(req, res){   
// console.log(req.body);
const mydata = new ticketreserved(req.body)
mydata.save().then(function(){
res.send('Ticket reserved.')
}).catch(function(e){
res.send(e)
}) 
}) 
    

    
    //request to update user
    
    router.put('/updatereservedticket/:id', function(req, res){
        //console.log("dsfadf");
        ticketreserved.findOneAndUpdate({_id :req.params.id}, req.body).then(function(){
            res.send("Ticket updated.")
        }).catch(function(){ 
            res.send("error")
        }) 
        })


router.delete('/deleteticketreserved/:id', function(req, res){
    // console.log(req.params.id);
    ticketreserved.findByIdAndDelete(req.params.id).then(function(){
        res.send("The ticket has been canceled.")
    }).catch(function(){ 
        res.send(e)
    })
    })
    
    
    //request for getting user information


router.get('/selectticketreserved/:id', function(req, res){
    ticketreserved.findById(req.params.id).then(function(user_data){

        //this line writes on postman
    res.send(user_data);
    // console.log(req.body)
    // res.send("data selected")
    //console.log(user_data)
    }).catch(function(e){
        res.send("error")
    });
    })
   

    router.get('/selectallticketreserved/', function(req, res){
        ticketreserved.find().then(function(user_data){
    
            //this line writes on postman
        res.send(user_data);
        // console.log(req.body)
        // res.send("all data selected")
        //console.log(user_data)
        })
        .catch(function(e){
            res.send("error")
        });
        })
       
    


module.exports = router 
*/