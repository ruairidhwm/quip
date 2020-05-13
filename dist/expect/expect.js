"use strict";
exports.__esModule = true;
var expect = function (actual) {
    return {
        toBe: function (expected) {
            if (actual !== expected) {
                throw new Error(actual + " is not equal to " + expected);
            }
        },
        notToBe: function (expected) {
            if (actual === expected) {
                throw new Error(actual + " is not equal to " + expected);
            }
        },
        toThrow: function () {
            if (actual !== Error) {
                throw new Error(actual + " does not throw.");
            }
        },
        toBeFalsy: function () {
            if (actual) {
                throw new Error(actual + " is not falsy.");
            }
        },
        toBeTruthy: function () {
            if (!actual) {
                throw new Error(actual + " is not truthy.");
            }
        },
        toBeNull: function () {
            if (actual !== null) {
                throw new Error(actual + " is not null.");
            }
        }
    };
};
exports["default"] = expect;
