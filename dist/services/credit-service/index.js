"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const credit_repository_1 = __importDefault(require("../../repositories/credit-repository/index"));
async function getCredits(userId) {
    return credit_repository_1.default.getCredits(userId);
}
async function storeCredit(userId, { user_id, debtor, amount, payDate }) {
    return credit_repository_1.default.storeCredit({ user_id, debtor, amount, payDate });
}
const creditService = {
    getCredits,
    storeCredit,
};
exports.default = creditService;
