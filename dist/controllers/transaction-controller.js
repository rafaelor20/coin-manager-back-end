"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeTransaction = exports.getHistoric = void 0;
const http_status_1 = __importDefault(require("http-status"));
const transaction_service_1 = __importDefault(require("../services/transaction-service/index"));
async function getHistoric(req, res, next) {
    const { userId } = req;
    try {
        console.log(userId);
        const historic = await transaction_service_1.default.getHistoric(userId);
        return res.status(http_status_1.default.OK).send(historic);
    }
    catch (error) {
        next(error);
    }
}
exports.getHistoric = getHistoric;
async function storeTransaction(req, res, next) {
    const { userId } = req;
    try {
        const user_id = userId;
        const { description, amount, category } = req.body;
        console.log({ user_id, description, amount, category });
        const transaction = await transaction_service_1.default.storeTransaction(userId, { user_id, description, amount, category });
        return res.status(http_status_1.default.CREATED).send(transaction);
    }
    catch (error) {
        next(error);
    }
}
exports.storeTransaction = storeTransaction;
