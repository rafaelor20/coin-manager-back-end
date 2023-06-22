"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionRouter = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares/index");
const transaction_controller_1 = require("../controllers/transaction-controller");
const transactionRouter = (0, express_1.Router)();
exports.transactionRouter = transactionRouter;
transactionRouter.all('/*', middlewares_1.authenticateToken).get('/historic', transaction_controller_1.getHistoric).post('/store', transaction_controller_1.storeTransaction);
