import User from "../models/user.schema.js";
import asyncHandler from "../service/asyncHandler.js";
import CustomError from "../service/customErrors.js";


//Sign up user
export const signUp = asyncHandler(async (req,res)=>{
    //Get data from user
    const {name, email, password} = req.body;

    //Validation
    if(!name || !email || password){
        throw new CustomError("Required field", 400)
    }

    const existingUser = await User.findOne({email : email})
    if(existingUser){
        throw new CustomError("User already Exist", 400)
    }

    const user = await User.create({
        name,
        email,
        password
    });

    const token = user.getJWTtoken();

    //safety
    user.password = undefined;

    res.status(200).json({
        sucess : true,
        token,
        user
    })


});






