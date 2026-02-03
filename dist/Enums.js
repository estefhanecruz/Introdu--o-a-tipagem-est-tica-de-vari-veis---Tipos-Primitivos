"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["pending"] = 0] = "pending";
    PaymentStatus[PaymentStatus["paid"] = 1] = "paid";
    PaymentStatus[PaymentStatus["canceled"] = 2] = "canceled";
})(PaymentStatus || (PaymentStatus = {}));
let payment = PaymentStatus.pending;
console.log(payment);
//# sourceMappingURL=Enums.js.map