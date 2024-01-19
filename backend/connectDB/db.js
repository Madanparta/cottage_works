const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGOOSE_URL,{ useUnifiedTopology: true, })
        console.log(`MongoDB Connected : ${con.connection.host}`)
    } catch (error) {
        console.log('ERROR :', error.message)
        process.exit(1)
    }
}

module.exports = connectDB;