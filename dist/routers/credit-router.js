"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creditRouter = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares/index");
const credit_controller_1 = require("../controllers/credit-controller");
const creditRouter = (0, express_1.Router)();
exports.creditRouter = creditRouter;
creditRouter.all('/*', middlewares_1.authenticateToken).get('/', credit_controller_1.getCredits).post('/store', credit_controller_1.storeCredit);
