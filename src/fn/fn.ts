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
const fn = (functionToBeMocked: Function = () => {}) => {
  const mockFn = (...args: any) => {
    mockFn.mock.calls.push(args);

    return functionToBeMocked(...args);
  };

  mockFn.mock = { calls: [] };

  /**
   * Allow us to pass a new implementation to our mock which is
   * complementary to `spyOn`.
   */
  mockFn.mockImplementation = (newImplementation: Function) =>
    (functionToBeMocked = newImplementation);

  return mockFn;
};

export default fn;
