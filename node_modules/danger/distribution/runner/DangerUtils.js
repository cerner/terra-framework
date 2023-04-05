"use strict";
// The documentation for these are provided inline
// inside DangerUtilsDSL.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.compliment = exports.href = exports.sentence = void 0;
function sentence(array) {
    if ((array || []).length === 0) {
        return "";
    }
    if (array.length === 1) {
        return array[0];
    }
    return array.slice(0, array.length - 1).join(", ") + " and " + array.pop();
}
exports.sentence = sentence;
function href(href, text) {
    if (!href && !text) {
        return null;
    }
    if (!href && text) {
        return text;
    }
    return "<a href=\"".concat(href, "\">").concat(text || href, "</a>");
}
exports.href = href;
var compliment = function () {
    var compliments = ["Well done.", "Congrats.", "Woo!", "Yay.", "Jolly good show.", "Good on 'ya.", "Nice work."];
    return compliments[Math.floor(Math.random() * compliments.length)];
};
exports.compliment = compliment;
//# sourceMappingURL=DangerUtils.js.map