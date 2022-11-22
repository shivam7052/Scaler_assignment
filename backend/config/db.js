const mongoose =require('mongoose')

const connectDB =async () =>{ 
   try {
      const con= await mongoose.connect("mongodb+srv://shivam:shivam@cluster0.qvd9cug.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true,useUnifiedTopology: true})
      console.log(`MongoDB Connected: ${con.connection.host}`.cyan.underline)
   } 
   catch (error) {
      console.log(error)
      process.exit(1)
   }
}

module.exports =connectDB