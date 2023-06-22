"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeCredit = exports.getCredits = void 0;
const http_status_1 = __importDefault(require("http-status"));
const credit_service_1 = __importDefault(require("../services/credit-service/index"));
async function getCredits(req, res, next) {
    try {
        const { userId } = req;
        const credits = await credit_service_1.default.getCredits(userId);
        return res.status(http_status_1.default.OK).send(credits);
    }
    catch (error) {
        next(error);
    }
}
exports.getCredits = getCredits;
async function storeCredit(req, res, next) {
    try {
        const { userId } = req;
        const { user_id, debtor, amount, payDate } = req.body;
        const credit = await credit_service_1.default.storeCredit(userId, { user_id, debtor, amount, payDate });
        return res.status(http_status_1.default.CREATED).send(credit);
    }
    catch (error) {
        next(error);
    }
}
exports.storeCredit = storeCredit;
