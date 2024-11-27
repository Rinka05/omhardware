import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotpPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

// forgot password || post
router.post("/fogot-password", forgotpPasswordController)

//test routes
router.get("/test", requireSignIn, isAdmin, testController);


//protected user route

router.get('/user-auth', requireSignIn , (req, res)=>{
  res.status(200).send({ok:true});
})

//protected route admin

router.get('/admin-auth', requireSignIn , (req, res)=>{
  res.status(200).send({ok:true});
})

export default router;