# Quip

_A small version of Jest_

Read the blog [here](https://ruairidh.dev/building-a-jest-clone/).

## Methods

### Expect

`.toBe()`

`.toThrow()`

`.toBeTruthy()`

`.toBeFalsy()`

`.toBeNull()`

### Mocking

```javascript
const random = fn((p1: string, p2: string) => p1);

const winner = random('Winner', 'Loser');

expect(winner).toBe('Winner');
```

### Spies

`.spyOn()`
