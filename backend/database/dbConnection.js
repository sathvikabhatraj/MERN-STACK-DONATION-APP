import mongoose from 'mongoose';

export const dbConnection=()=>
{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"Donation_Project"
    }).then(()=>
{
    console.log("Connected to Database");
}).catch((error)=>
{
    console.log('Some Error Occured While connecting to Database',error);
})
}