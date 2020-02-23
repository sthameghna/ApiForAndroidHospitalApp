const express = require('express');
const router = new express.Router() 
const Auth = require('../Middleware/auth')
const multer = require('multer');

//require('./db/mongoose')
const users = require('../Models/users') 




//request for register/signup for users

router.post('/registeruser', function(req, res){   
console.log(req.body);
const mydata = new users(req.body)
mydata.save().then(function(){
res.send('Registration sucessful!')
}).catch(function(e){
res.send(e)
})
})


//request for getting user information


    
    //request to update user
    
    router.put('/updateuser/:userid', function(req, res){
        //console.log("dsfadf");
        users.findOneAndUpdate({_id :req.params.userid}, req.body).then(function(){
            res.send("updated")
        }).catch(function(){ 
            res.send("error")
        }) 
        })


router.delete('/deleteuser/:userid', function(req, res){
    console.log(req.params.userid);
    users.findByIdAndDelete(req.params.userid).then(function(){
        res.send("User has been deleted.")
    }).catch(function(){ 
        res.send(e)
    })
    })
   
router.get('/selectuser/:userid', function(req, res){
    users.findById(req.params.userid).then(function(user_data){
        //this line writes on postman
    res.send(user_data);
    console.log(req.body)
    res.send("data selected")
    //console.log(user_data)
    }).catch(function(e){
        res.send("error")
    });
    })

    router.get('/selectalluser/', function(req, res){
        users.find().then(function(user_data){
            //this line writes on postman
        res.send(user_data);
        // console.log(req.body)
        // res.send("data selected")
        //console.log(user_data)
        }).catch(function(e){
            res.send("error")
        });
        })

    router.post("/login",async function (req,res)
        {
            
            var enteredUname=req.body.username;
            var enteredpass=req.body.password;
            // console.log(enteredUname, enteredpass);
            const user=await users.checkCredentialsDb(enteredUname,enteredpass);
            if(user){
                const token=await user.generateAuthToken();
                res.json({
                    token:token,
                    _id:user._id,
                    status:"ok",
                    username: user.username,
                    password:user.password,
                    email:user.email,
                    contact:user.contact,
                    bloodgroup:user.bloodgroup
                }); 
            }
            else{
                res.json({
                    message:"Invalid credentials! Are you registered yet?",
                    status : "error"
                });
            }
        })

        


module.exports = router 