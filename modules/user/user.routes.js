const express = require('express');
const userController = require('./user.controller');
const userRoutes = express.Router();


// userRoutes.get('/', (req,res)=>{
//     res.send("user api")
// })

userRoutes.get('', userController.getUser);
userRoutes.get('/:id', userController.getUserById);
userRoutes.post('', userController.postUser);
userRoutes.put('/:id', userController.putUser);
userRoutes.delete('/:id', userController.deleteUser);


module.exports = userRoutes;