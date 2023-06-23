"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_repository_1 = __importDefault(require("../../repositories/transaction-repository/index"));
async function getHistoric(userId) {
    return transaction_repository_1.default.getHistoric(userId);
}
async function storeTransaction(userId, { user_id, description, amount, category }) {
    return transaction_repository_1.default.storeTransaction({ user_id, description, amount, category });
}
const transactionService = {
    getHistoric,
    storeTransaction,
};
exports.default = transactionService;
