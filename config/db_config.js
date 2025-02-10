const {  mongoose } = require("mongoose")

const connectDB = async ()=>{
   try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log("success", conn.connection.host)
   } catch (error) {
    console.log("Data base conection failed")
   }
}

module.exports= connectDB