"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
const redis_1 = require("redis");
const redis = (0, redis_1.createClient)();
exports.redis = redis;
redis.on('error', (err) => console.log('Redis Client Error', err));
const connectRedis = async () => await redis.connect();
connectRedis();
