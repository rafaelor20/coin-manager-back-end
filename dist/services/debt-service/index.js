"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debt_repository_1 = __importDefault(require("../../repositories/debt-repository/index"));
async function getDebts(userId) {
    return debt_repository_1.default.getDebts(userId);
}
async function storeDebt(userId, { user_id, creditor, amount, payDate }) {
    return debt_repository_1.default.storeDebt({ user_id, creditor, amount, payDate });
}
const debtService = {
    getDebts,
    storeDebt,
};
exports.default = debtService;
