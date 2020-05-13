const expect = (actual: Function) => {
  return {
    toBe(expected: String | Object | [any]) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    notToBe(expected: String | Object | [any]) {
      if (actual === expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toThrow() {
      if (actual !== Error) {
        throw new Error(`${actual} does not throw.`);
      }
    },
    toBeFalsy() {
      if (actual) {
        throw new Error(`${actual} is not falsy.`);
      }
    },
    toBeTruthy() {
      if (!actual) {
        throw new Error(`${actual} is not truthy.`);
      }
    },
    toBeNull() {
      if (actual !== null) {
        throw new Error(`${actual} is not null.`);
      }
    },
  };
};

export default expect;
