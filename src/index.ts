import chalk from 'chalk';
import expect from './expect';
import fn from './fn';

const test = async (title: string, callback: Function) => {
  try {
    await callback();
    console.log(chalk.green(`\u2713 ${title}`));
  } catch (error) {
    console.error(chalk.red(`✕ ${title}`));
    console.error(error);
  }
};

test('sum adds numbers', () => {
  const sum = (a, b) => a + b;

  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('it can mock a function', () => {
  const random = fn((p1: string, p2: string) => p1);

  const winner = random('Winner', 'Loser');

  expect(winner).toBe('Winner');
});

test('it can throw', () => {
  const random = fn((p1: string, p2: string) => Error);

  const winner = random('Winner', 'Loser');

  expect(winner).toThrow();
});

test('it can check for truthy values', () => {
  const value = () => 'hello';

  expect(value).toBeTruthy();
});

test('it can check for falsy values', () => {
  expect(null).toBeFalsy();
});

test('it can check for null values', () => {
  expect(null).toBeNull();
});
