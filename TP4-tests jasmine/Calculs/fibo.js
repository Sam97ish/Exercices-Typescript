"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fibo(a) {
    if (a == 0 || a == 1)
        return 1;
    else
        return fibo(a - 1) + fibo(a - 2);
}
exports.fibo = fibo;
//# sourceMappingURL=fibo.js.map