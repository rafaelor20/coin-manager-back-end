"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const schemas_1 = require("../schemas/index");
const middlewares_1 = require("../middlewares/index");
const controllers_1 = require("../controllers/index");
const usersRouter = (0, express_1.Router)();
exports.usersRouter = usersRouter;
usersRouter.post('/', (0, middlewares_1.validateBody)(schemas_1.createUserSchema), controllers_1.usersPost);