"use strict";
exports.__esModule = true;
/**
 *
 * @param functionToBeMocked Function
 * @returns Function
 *
 * @description
 * Allows us to mock a function by returning a new function
 * specified by the user in place of existing functionality.
 *
 * So a very simple mocking function, which also works in tandem
 * with `spyOn` as you can see in our `mockImplementation` method.
 *
 * This allows for deterministic testing.
 */
var fn = function (functionToBeMocked) {
    if (functionToBeMocked === void 0) { functionToBeMocked = function () { }; }
    var mockFn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        mockFn.mock.calls.push(args);
        return functionToBeMocked.apply(void 0, args);
    };
    mockFn.mock = { calls: [] };
    /**
     * Allow us to pass a new implementation to our mock which is
     * complementary to `spyOn`.
     */
    mockFn.mockImplementation = function (newImplementation) {
        return (functionToBeMocked = newImplementation);
    };
    return mockFn;
};
exports["default"] = fn;
