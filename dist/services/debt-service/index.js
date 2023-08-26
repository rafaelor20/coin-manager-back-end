"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../errors/index");
const debt_repository_1 = __importDefault(require("../../repositories/debt-repository/index"));
async function checkUserId(userId, debtId) {
    const debt = await debt_repository_1.default.getDebtById(debtId);
    if (debt.user_id !== userId) {
        throw (0, errors_1.unauthorizedError)();
    }
}
async function getDebts(userId) {
    return debt_repository_1.default.getDebts(userId);
}
async function storeDebt(userId, { user_id, creditor, amount, payDate }) {
    return debt_repository_1.default.storeDebt({ user_id, creditor, amount, payDate });
}
async function getDebtById(userId, debtId) {
    await checkUserId(userId, debtId);
    return debt_repository_1.default.getDebtById(debtId);
}
async function removeDebt(userId, debtId) {
    await checkUserId(userId, debtId);
    return debt_repository_1.default.removeDebtById(debtId);
}
const debtService = {
    getDebts,
    storeDebt,
    removeDebt,
    getDebtById,
};
exports.default = debtService;
