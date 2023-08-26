"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDebt = exports.storeDebt = exports.getDebtById = exports.getDebts = void 0;
const http_status_1 = __importDefault(require("http-status"));
const debt_service_1 = __importDefault(require("../services/debt-service/index"));
async function getDebts(req, res, next) {
    try {
        const { userId } = req;
        const debts = await debt_service_1.default.getDebts(userId);
        return res.status(http_status_1.default.OK).send(debts);
    }
    catch (error) {
        next(error);
    }
}
exports.getDebts = getDebts;
async function getDebtById(req, res, next) {
    try {
        const { userId } = req;
        const debtId = Number(req.params.debtId);
        const debt = await debt_service_1.default.getDebtById(userId, debtId);
        return res.status(http_status_1.default.OK).send(debt);
    }
    catch (error) {
        next(error);
    }
}
exports.getDebtById = getDebtById;
async function storeDebt(req, res, next) {
    try {
        const { userId } = req;
        const { user_id, creditor, amount, payDate } = req.body;
        const debt = await debt_service_1.default.storeDebt(userId, { user_id, creditor, amount, payDate });
        return res.status(http_status_1.default.CREATED).send(debt);
    }
    catch (error) {
        next(error);
    }
}
exports.storeDebt = storeDebt;
async function removeDebt(req, res, next) {
    try {
        const { userId } = req;
        const debtId = Number(req.params.debtId);
        const debt = await debt_service_1.default.removeDebt(userId, debtId);
        return res.status(http_status_1.default.OK).send(debt);
    }
    catch (error) {
        next(error);
    }
}
exports.removeDebt = removeDebt;
