const { Router } = require("express");
const userRouter = require("./user.router");
const loginRouter = require("./login.router");
const regisController = require("./regis.router");
const router = Router();
router.get("/", (req, res) => {
  res.json("Selamat Datang");
});
router.use(userRouter);
router.use(loginRouter);
router.use(regisController);
module.exports = router;
