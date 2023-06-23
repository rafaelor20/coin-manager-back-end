"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config/index");
async function getCredits(userId) {
    return config_1.prisma.userCredit.findMany({
        where: { user_id: userId },
    });
}
async function storeCredit(data) {
    return config_1.prisma.userCredit.create({ data });
}
const creditRepository = {
    getCredits,
    storeCredit,
};
exports.default = creditRepository;
