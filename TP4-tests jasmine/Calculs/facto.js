"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function facto(a) {
    if (a == 0 || a == 1)
        return 1;
    else
        return a * facto(a - 1);
}
exports.facto = facto;
//# sourceMappingURL=facto.js.map