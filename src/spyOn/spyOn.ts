import fn from '../fn';

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
const spyOn = (obj: Object, prop: string) => {
  const originalValue = obj[prop];
  obj[prop] = fn();
  obj[prop].mockRestore = () => (obj[prop] = originalValue);
};

export default spyOn;
