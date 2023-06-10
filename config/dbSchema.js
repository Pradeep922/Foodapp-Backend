const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    firstName:{type:'string', required:true},
    lastName:{type:'string', required:true},
    email:{
        type: 'string',
        required: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    password:{type:'string', required:true},
    role:{type:'string', default:'user'},
    token: {type: 'string', required:true},
    createdAt:{type:Date, default:Date.now()}
})

const foodSchema = new mongoose.Schema({
    name: {type:'string', required:true},
    price : {type:Number, required:true},
    description:{type:'string', required:true},
    imageUrl:{type:'string',default:null}
})

const orderSchema = new mongoose.Schema({
    orderItems: {type:'array', default:[]},
    userId:{type:'string', required:true},
    deliveryAddress: {type:'string', required:true},
    orderAmount: {type:Number, required:true},
    contact: {type:'string', required:true},
    status:{type:'string', default:'Ordered'},
    orderedAt:{type:'date', default: Date.now()}
})


let usersModel = mongoose.model('users', userSchema);
let foodModel = mongoose.model('foods', foodSchema);
let orderModel = mongoose.model('orders', orderSchema);


module.exports={mongoose, usersModel, foodModel, orderModel};