"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config/index");
async function findByEmail(email, select) {
    const params = {
        where: {
            email,
        },
    };
    if (select) {
        params.select = select;
    }
    return config_1.prisma.user.findUnique(params);
}
async function create(data) {
    return config_1.prisma.user.create({
        data,
    });
}
const userRepository = {
    findByEmail,
    create,
};
exports.default = userRepository;
