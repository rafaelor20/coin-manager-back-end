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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = require("./errors");
const prisma_utils_1 = require("../../utils/prisma-utils");
const user_repository_1 = __importDefault(require("../../repositories/user-repository/index"));
const session_repository_1 = __importDefault(require("../../repositories/session-repository/index"));
async function signIn(params) {
    const { email, password } = params;
    const user = await getUserOrFail(email);
    await validatePasswordOrFail(password, user.password);
    const token = await createSession(user.id);
    return {
        user: (0, prisma_utils_1.exclude)(user, 'password'),
        token,
    };
}
async function getUserOrFail(email) {
    const user = await user_repository_1.default.findByEmail(email, { id: true, email: true, password: true });
    if (!user)
        throw (0, errors_1.invalidCredentialsError)();
    return user;
}
async function createSession(user_id) {
    const token = jsonwebtoken_1.default.sign({ user_id }, process.env.JWT_SECRET);
    await session_repository_1.default.create({
        token,
        user_id,
    });
    return token;
}
async function validatePasswordOrFail(password, userPassword) {
    const isPasswordValid = await bcrypt_1.default.compare(password, userPassword);
    if (!isPasswordValid)
        throw (0, errors_1.invalidCredentialsError)();
}
const authenticationService = {
    signIn,
};
exports.default = authenticationService;
__exportStar(require("./errors"), exports);
