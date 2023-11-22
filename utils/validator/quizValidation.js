const { check,body } = require('express-validator');
const { default: slugify } = require('slugify');
const validatorMiddleware = require("../../middlewares/validatorMiddleware")


exports.ruleCreateQuizValidator=
[
    check('title')
    .notEmpty()
    .withMessage('title Should Not Empty')
    .isString()
    .withMessage('title Should be String'),

    check('topic')
    .notEmpty()
    .withMessage('topic Should Not Empty')
    .isString()
    .withMessage('topic Should be String'),
  

    check('dueTo')
    .notEmpty()
    .withMessage('dueTo Should Not Empty')
    .isString()
    .withMessage('dueTo Should String')
    ,validatorMiddleware
]

exports.ruleGetQuizValidator=
[
    check('id')
    .isMongoId()
    .withMessage('Invalid Quiz Id'),
    validatorMiddleware
]

exports.ruleUpdateQuizValidator = [
  check('title')
  .notEmpty()
  .withMessage('title Should Not Empty')
  .isString()
  .withMessage('title Should be String'),

  check('topic')
  .notEmpty()
  .withMessage('topic Should Not Empty')
  .isString()
  .withMessage('topic Should be String'),


  check('dueTo')
  .notEmpty()
  .withMessage('dueTo Should Not Empty')
  .isString()
  .withMessage('dueTo Should String')
  ,validatorMiddleware
  ];
  

exports.ruleDeleteQuizValidator=
[
    check('id')
    .isMongoId()
    .withMessage('Invalid Quiz Id'),
    validatorMiddleware
]