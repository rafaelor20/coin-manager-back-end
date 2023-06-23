"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransactionSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createTransactionSchema = joi_1.default.object({
    user_id: joi_1.default.number().required(),
    description: joi_1.default.string().min(2).required(),
    amount: joi_1.default.number().required(),
    category: joi_1.default.string().min(2),
});
