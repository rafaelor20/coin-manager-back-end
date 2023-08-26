"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../errors/index");
const credit_repository_1 = __importDefault(require("../../repositories/credit-repository/index"));
async function checkUserId(userId, creditId) {
    const credit = await credit_repository_1.default.getCreditById(creditId);
    if (credit.user_id !== userId) {
        throw (0, errors_1.unauthorizedError)();
    }
}
async function getCredits(userId) {
    return credit_repository_1.default.getCredits(userId);
}
async function storeCredit(userId, { user_id, debtor, amount, payDate }) {
    return credit_repository_1.default.storeCredit({ user_id, debtor, amount, payDate });
}
async function getCreditById(userId, creditId) {
    await checkUserId(userId, creditId);
    return credit_repository_1.default.getCreditById(creditId);
}
async function removeCredit(userId, creditId) {
    await checkUserId(userId, creditId);
    return credit_repository_1.default.removeCreditById(creditId);
}
const creditService = {
    getCredits,
    storeCredit,
    getCreditById,
    removeCredit,
};
exports.default = creditService;
