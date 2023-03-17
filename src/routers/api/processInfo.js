import { Router } from "express";
import { getInfo } from "../../Controllers/info.controller.js";
import { pathLog } from "../../Services/logger.js";

const info = new Router();

info.get('/info', pathLog, getInfo)

export default info;