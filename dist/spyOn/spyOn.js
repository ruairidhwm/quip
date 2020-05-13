"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fn_1 = __importDefault(require("../fn"));
/**
 *
 *
 * @description
 * Accepts an object and a property. We then assign these to an 'originalValue'
 * before we provide a mocked implementation via our `fn()` method.
 *
 * We also expose a `mockRestore` method which resets our object to its original value
 * via the variable we stored it in.
 */
var spyOn = function (obj, prop) {
    var originalValue = obj[prop];
    obj[prop] = fn_1["default"]();
    obj[prop].mockRestore = function () { return (obj[prop] = originalValue); };
};
exports["default"] = spyOn;
