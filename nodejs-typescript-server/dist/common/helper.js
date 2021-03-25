"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyOrRows = exports.getOffset = void 0;
function getOffset(currentPage = 1, pageSize) {
    return (currentPage - 1) * pageSize;
}
exports.getOffset = getOffset;
function emptyOrRows(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}
exports.emptyOrRows = emptyOrRows;
