const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  userId:{
    type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Announcement must be belong to User"]
  }
},{
    timestamps:true
});

announcementSchema.pre(/^find/, function (next) {
  this.populate({ path: "userId" });
  next();
});

module.exports = mongoose.model('Announcement', announcementSchema);