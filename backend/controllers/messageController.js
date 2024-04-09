import {Message} from '../models/message.js';

export const postMessage=async(req,res,next)=>
{
    //getting name , email etc from req.body
     const {name,email,phone,message}=req.body;
     if(!name,!email,!phone,!message)
     {
        return res.status(400).json({
            success:false,
            message:"Please Fill Full Form"
        });
     }
     try {
        await Message.create({name,email,phone,message});
        //201 means data created
      return  res.status(201).json({
            success:true,
            message:"Message Sent Successfully"
        })
     } catch (error) {
        if(error.name==='ValidationError')
        {
            //error is obj , nd errors is values, apply map on that values
            const validationErrors=Object.values(error.errors).map((err)=>err.message);
            const errorMessage=validationErrors.join(", ");
            return res.status(404).json({
                success:false,
                message:errorMessage
            });
        }
        
        return res.status(500).json({
            success:false,
            message:'Internal Server Error'
        });
     }
};