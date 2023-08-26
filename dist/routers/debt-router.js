"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debtRouter = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares/index");
const debt_controller_1 = require("../controllers/debt-controller");
const debtRouter = (0, express_1.Router)();
exports.debtRouter = debtRouter;
debtRouter
    .all('/*', middlewares_1.authenticateToken)
    .get('/', debt_controller_1.getDebts)
    .get('/:debtId', debt_controller_1.getDebtById)
    .post('/store', debt_controller_1.storeDebt)
    .delete('/delete/:debtId', debt_controller_1.removeDebt);
