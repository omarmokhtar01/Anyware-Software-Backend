const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required"],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [6, "too short password"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    course:{
      type : String ,
    }
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

module.exports = mongoose.model("User", userSchema);