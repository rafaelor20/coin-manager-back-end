"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config/index");
async function create(data) {
    return config_1.prisma.session.create({
        data,
    });
}
const sessionRepository = {
    create,
};
exports.default = sessionRepository;
