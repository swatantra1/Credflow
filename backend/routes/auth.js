const express = require("express");

const router = express.Router();

const { signup, signin, signout, requireSignin} = require("../controllers/auth");


// validator
const {runValidator} = require("../validators");
const { userSigupValidator, userSigninValidator} = require("../validators/auth");

router.post("/signup", userSigupValidator, runValidator, signup);
router.post("/signin", userSigninValidator, runValidator, signin);
router.get("/signout", signout);

router.get("/secret",requireSignin, (req, res) => {
    res.json({
        user: req.user
    })
})

module.exports = router