import mongoose, { mongo } from "mongoose";
import AuthRoles from "../utils/authRoles.js";

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Must ente r Name"],
        maxLength : [50, "Name must be 50 than 50 characters"]
    },
    email :{
        type : String,
        required : [true, "Must enter Email"],
    },
    password : {
        type : String,
        required : [true, "Must enter Password"],
        minLength : [8, "Min length 8"],
        select : false  
    },
    role : {
        type : String,
        enum : Object.values(AuthRoles),
        default : AuthRoles.USER
    },
    forgotPasswordToken : String,
    forgotPasswordExpiry : Date,
},
{
    timestamps : true
})


export default mongoose.model("User", userSchema)