import express from "express";
import routes from "../routes";
import {
	users,
	userDetail,
	editProfile,
	changePassword,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, (req, res) => editProfile);
userRouter.get(routes.changePassword, (req, res) => changePassword);

export default userRouter;
