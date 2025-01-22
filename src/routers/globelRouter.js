import express from "express";
import {join} from "../controllers/userController"
import {trending} from "../controllers/videoController"

const globelRouter = express.Router();

globelRouter.get("/", trending);
globelRouter.get("/join", join);

export default globelRouter;