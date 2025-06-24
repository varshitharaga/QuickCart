const { default: mongoose } = require("mongoose");
const { unique } = require("next/dist/build/utils");

const userSchema = new mongoose.Schema({
    _id:{ type : String, required:true},
    name: {type : String, required:true },
    email:{type : String, required:true, unique:true},
    imageUrl:{type : String, required:true},
    cartItems: {type : Object, default:{} }
}, {minmize: false})

const User = mongoose.models.user || mongoose.model('user',userSchema)

export default User