"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config/index");
async function getHistoric(userId) {
    return config_1.prisma.transaction.findMany({
        where: { user_id: userId },
    });
}
async function storeTransaction(data) {
    return config_1.prisma.transaction.create({ data });
}
const transactionRepository = {
    getHistoric,
    storeTransaction,
};
exports.default = transactionRepository;
