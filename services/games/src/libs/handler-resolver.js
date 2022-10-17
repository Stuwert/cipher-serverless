"use strict";
exports.__esModule = true;
exports.handlerPath = void 0;
var handlerPath = function (context) {
    return "".concat(context.split(process.cwd())[1].substring(1).replace(/\\/g, '/'));
};
exports.handlerPath = handlerPath;
