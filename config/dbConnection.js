  const mongoose = require("mongoose")


  const connectToDatabase=async ()=>{
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("The Database is Connected")
      } catch (error) {
        console.log(error);
      }
 }

module.exports=connectToDatabase


