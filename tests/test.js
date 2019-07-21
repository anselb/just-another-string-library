require('../index');

test('Sanity check', () => {
  expect(2 + 2).toBe(4);
});

test('Test capitalize', () => {
  expect('hello world'.capitalize()).toBe('Hello world');
  expect(''.capitalize()).toBe('');
  expect('1hello world'.capitalize()).toBe('1hello world');
  expect('áéíóú'.capitalize()).toBe('Áéíóú');
  expect('49302'.capitalize()).toBe('49302');
});

test('Test allCaps', () => {
  expect('hello world'.allCaps()).toBe('HELLO WORLD');
  expect(''.allCaps()).toBe('');
  expect('1hello world'.allCaps()).toBe('1HELLO WORLD');
  expect('áéíóú'.allCaps()).toBe('ÁÉÍÓÚ');
  expect('49302'.allCaps()).toBe('49302');
});

test('Test capitalizeWords', () => {
  expect('hello world'.capitalizeWords()).toBe('Hello World');
  expect(''.capitalizeWords()).toBe('');
  expect('1hello world'.capitalizeWords()).toBe('1hello World');
  expect('áé í óú'.capitalizeWords()).toBe('Áé Í Óú');
  expect('49302'.capitalizeWords()).toBe('49302');
});
