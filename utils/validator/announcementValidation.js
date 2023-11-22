const { check } = require('express-validator');

const validatorMiddleware = require("../../middlewares/validatorMiddleware");
const userModel = require('../../models/userModel');


exports.ruleCreateAnnouncementValidator=
[
    // check('title')
    // .notEmpty()
    // .withMessage('title Should Not Empty')
    // .isString()
    // .withMessage('title Should be String'),


    check('content')
    .notEmpty()
    .withMessage('content Should Not Empty')
    .isString()
    .withMessage('content Should be String'),
    check('userId')
    .notEmpty()
    .withMessage('User Id Should not empty')
    .isMongoId()
    .withMessage('Invalid User ID')
    .custom(async(val)=>{
        
        let user = await userModel.findOne({_id: val})
        if(!user) throw new Error ('No such a user exist in database')
        return true;

    })
    ,validatorMiddleware
]

exports.ruleGetAnnouncementValidator=
[
    check('id')
    .isMongoId()
    .withMessage('Invalid Announcement Id'),
    validatorMiddleware
]

exports.ruleUpdateAnnouncementValidator = [
    // check('title')
    // .notEmpty()
    // .withMessage('title Should Not Empty')
    // .isString()
    // .withMessage('title Should be String'),


    check('content')
    .notEmpty()
    .withMessage('content Should Not Empty')
    .isString()
    .withMessage('content Should be String')
    ,validatorMiddleware
  ];
  

exports.ruleDeleteAnnouncementValidator=
[
    check('id')
    .isMongoId()
    .withMessage('Invalid Announcement Id'),
    validatorMiddleware
]