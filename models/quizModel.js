const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  userId:{
    type: mongoose.Types.ObjectId,
    ref:'User'
  },
  dueTo:{
    type: String,
    required:true
  }
},{
    timestamps:true
});


quizSchema.pre(/^find/, function (next) {
  this.populate({ path: "userId" });
  next();
});
module.exports = mongoose.model('Quiz', quizSchema);