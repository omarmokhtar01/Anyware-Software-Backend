const mongoose = require('mongoose');

const dbConnection = ()=>{
    mongoose.connect(process.env.DB_URI)
.then((conn)=>{
console.log(`DB is Connection ${conn.connection.host}`);})
}
mongoose.set('strictQuery', true);

module.exports = dbConnection