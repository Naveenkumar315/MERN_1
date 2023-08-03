// In your routes/router.js file
const express = require('express');
const router = express.Router();
const UserModel = require('../models/Users'); // Make sure to import UserModel from the correct location
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");


// user creation
router.post('/createUser', (req,res)=>{
    UserModel.create(req.body).then((user)=>{
        res.status(200).json({
            success: true,
            message: 'user created successfully',
            data: user
        })
    }).catch((err)=>{
        console.log('user creation err: ', err);
        res.status(500).json({
            success: false,
            message: 'user created failed',
            error: err
        })
    });
});

// get all user data
router.get('/', (req,res)=>{
    UserModel.find({}).then((result)=>{
        res.status(200).json({
            data: result
        })
    }).catch((err)=>{
        res.status(500).json({
            error: err
        })
    })
})

// get specific user
router.get('/getUser/:id', (req,res)=>{
    // req.params.id - use of params to access Id from url
    let id = req.params.id
    UserModel.findById(id).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(500).json({
            error: err
        })
    })
})

// update user
router.put('/updateUser/:id', (req,res)=>{
    // req.params.id - use of params to access Id from url
    let id = req.params.id
    const obj = {
         FirstName : req.body.FirstName,
         LastName : req.body.LastName,
         Age : req.body.Age
    }
    UserModel.findByIdAndUpdate(id, obj, { new: true}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(500).json({
            error: err
        })
    })
})

// delete user
router.delete('/deleteUser/:id', (req,res)=>{
    // req.params.id - use of params to access Id from url
    let id = req.params.id
    UserModel.findByIdAndDelete(id).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(500).json({
            error: err
        })
    })
})

module.exports = router;
