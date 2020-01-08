const express = require("express");

const router = express.Router();

const {
    signup,
    signin,
    signout,
    requireSignin,
    forgotPassword,
    resetPassword,
    preSignup,
} = require("../controllers/auth");


// validator
const {runValidator} = require("../validators");
const {
    userSigupValidator,
    userSigninValidator,
    forgotPasswordValidator,
    resetPasswordValidator,
} = require("../validators/auth");

router.post('/pre-signup', userSigupValidator, runValidator, preSignup);
router.post("/signup", runValidator, signup);
router.post("/signin", userSigninValidator, runValidator, signin);
router.get("/signout", signout);
router.put('/forgot-password', forgotPasswordValidator, runValidator, forgotPassword);
router.put('/reset-password', resetPasswordValidator, runValidator, resetPassword);

router.get("/secret",requireSignin, (req, res) => {
    res.json({
        user: req.user
    })
})

module.exports = router