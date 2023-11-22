const express = require("express");
const {
  ruleSignUpValidator,
  ruleLoginValidator,
} = require("../utils/validator/authValidation");

const {
  signup,
  login,
} = require("../controller/authController");

const router = express.Router();

router.route("/signup").post(ruleSignUpValidator, signup);

router.route("/login").post(ruleLoginValidator, login);


module.exports = router;