import express from "express";
import {join, login} from "../controllers/userController"
import {trending, search} from "../controllers/videoController"

const globelRouter = express.Router();

globelRouter.get("/", trending);
globelRouter.get("/join", join);
globelRouter.get("/login", login);
globelRouter.get("/search", search);

export default globelRouter;