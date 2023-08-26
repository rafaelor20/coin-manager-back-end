"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config/index");
async function getDebts(userId) {
    return config_1.prisma.userDebt.findMany({
        where: { user_id: userId },
    });
}
async function getDebtById(id) {
    return config_1.prisma.userDebt.findUnique({
        where: { id: id },
    });
}
async function removeDebtById(id) {
    return config_1.prisma.userDebt.delete({
        where: { id: id },
    });
}
async function storeDebt(data) {
    return config_1.prisma.userDebt.create({ data });
}
const debtRepository = {
    getDebts,
    storeDebt,
    getDebtById,
    removeDebtById,
};
exports.default = debtRepository;
