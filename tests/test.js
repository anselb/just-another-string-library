require('../index');

test('Sanity check', () => {
  expect(2 + 2).toBe(4);
});

test('Test capitalize', () => {
  expect('hello world'.capitalize()).toBe('Hello world');
  expect(''.capitalize()).toBe('');
  expect('1hello world'.capitalize()).toBe('1hello world');
});
