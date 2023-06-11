"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const errors_1 = require("./errors");
const errors_2 = require("../../errors/index");
const user_repository_1 = __importDefault(require("../../repositories/user-repository/index"));
async function createUser({ username, email, password }) {
    await validateUniqueEmailOrFail(email);
    await validateUniqueUername(username);
    const hashedPassword = await bcrypt_1.default.hash(password, 12);
    return user_repository_1.default.create({
        username,
        email,
        password: hashedPassword,
    });
}
exports.createUser = createUser;
async function validateUniqueEmailOrFail(email) {
    const userWithSameEmail = await user_repository_1.default.findByEmail(email);
    if (userWithSameEmail) {
        throw (0, errors_1.duplicatedEmailError)();
    }
}
async function validateUniqueUername(username) {
    const userWithSameUsername = await user_repository_1.default.findByUserName(username);
    if (userWithSameUsername) {
        throw (0, errors_2.invalidDataError)([username]);
    }
}
const userService = {
    createUser,
};
__exportStar(require("./errors"), exports);
exports.default = userService;
