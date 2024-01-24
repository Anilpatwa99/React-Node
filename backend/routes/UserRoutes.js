const express = require("express");
const {
    loginController,
    registerController,
    authController,
} = require("../Controllers/usercontroller");
const authMiddleware = require("../middlewares/authmiddlewares");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

module.exports = router;