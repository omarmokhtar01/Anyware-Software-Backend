const express = require("express");
const {
  ruleCreateQuizValidator,
  ruleGetQuizValidator,
  ruleUpdateQuizValidator,
  ruleDeleteQuizValidator,
} = require("../utils/validator/quizValidation");

const { authProtect, allowedTo } = require("../controller/authController");

const {
  postQuiz,
  getQuiz,
  specificQuiz,
  updateQuiz,
  deleteQuiz,

} = require("../controller/quizController");

const router = express.Router();

router
  .route("/get-all")
  .get(getQuiz)

  router
  .route("/create-quiz")
  .post(
    authProtect,
    allowedTo("admin"),

    ruleCreateQuizValidator,
    postQuiz
  );

router
  .route("/getOne-quiz/:id")
  .get(
    ruleGetQuizValidator, 
    specificQuiz)

    router
    .route("/update-quiz/:id")
  .put(
    authProtect,
    allowedTo("admin"),
    ruleUpdateQuizValidator,
    updateQuiz
  )


  router
  .route("/delete-quiz/:id")
  .delete(
    authProtect,
    allowedTo("admin"),
    ruleDeleteQuizValidator,
    deleteQuiz
  );

module.exports = router;