const { Router } = require("express");
const router = Router();
const registerController = require("../controllers/regis.controller");

// Route untuk registrasi pengguna
router.get("/register");
router.post("/register", registerController.register);

module.exports = router;
