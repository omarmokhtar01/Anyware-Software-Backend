const quizModel = require("../models/quizModel");
const handler = require("./handlerFactory");


// @desc Create Quiz
// @route Post /api/v1/quiz
// @access Private
exports.postQuiz = handler.createHandler(quizModel);

// @desc Get Specific Quiz
// @route Get /api/v1/quiz/:id
// @access Public
exports.specificQuiz = handler.getSpecificOne(quizModel);

// @desc Get all Quiz
// @route Get /api/v1/quiz
// @access Public
exports.getQuiz = handler.getAll(quizModel, "Quiz");

// @desc Update specific Quiz
// @route Put /api/v1/quiz/:id
// @access Private
exports.updateQuiz = handler.updateHandler(quizModel);

// @desc Delete specific Quiz
// @route delete /api/v1/quiz/:id
// @access Private
exports.deleteQuiz = handler.deleteHandler(quizModel);