const { check } = require("express-validator");

exports.userSigupValidator = [
    check("name").not().isEmpty()
    .withMessage("Name is requires"),
    check("email").isEmail()
    .withMessage("Must be a valid email"),
    check("password").isLength({ min: 6})
    .withMessage("Password must be at least 6 character long"),
];

exports.userSigninValidator = [
    check("email").isEmail()
    .withMessage("Must be a valid email"),
    check("password").isLength({ min: 6})
    .withMessage("Password must be at least 6 character long"),
];