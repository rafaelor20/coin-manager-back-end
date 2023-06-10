"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclude = void 0;
function exclude(entity, ...keys) {
    const newEntity = JSON.parse(JSON.stringify(entity));
    for (const key of keys) {
        delete newEntity[key];
    }
    return newEntity;
}
exports.exclude = exclude;
