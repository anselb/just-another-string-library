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

test('Test oddCaps', () => {
  expect('hello world'.oddCaps()).toBe('hElLo wOrLd');
  expect(''.oddCaps()).toBe('');
  expect('1hello world'.oddCaps()).toBe('1HeLlO WoRlD');
  expect('áé í óú'.oddCaps()).toBe('áÉ Í Óú');
  expect('49302'.oddCaps()).toBe('49302');
});

test('Test evenCaps', () => {
  expect('hello world'.evenCaps()).toBe('HeLlO WoRlD');
  expect(''.evenCaps()).toBe('');
  expect('1hello world'.evenCaps()).toBe('1hElLo wOrLd');
  expect('áé í óú'.evenCaps()).toBe('Áé í óÚ');
  expect('49302'.evenCaps()).toBe('49302');
});

test('Test removeExtraSpaces', () => {
  expect('     hello      world   '.removeExtraSpaces()).toBe('hello world');
  expect(''.removeExtraSpaces()).toBe('');
  expect('  1hello              world  '.removeExtraSpaces()).toBe('1hello world');
  expect('áé    í óú  '.removeExtraSpaces()).toBe('áé í óú');
  expect('  493 02    '.removeExtraSpaces()).toBe('493 02');
});

test('Test kabobCase', () => {
  expect('     HellO      WoRLd   '.kabobCase()).toBe('hello-world');
  expect(''.kabobCase()).toBe('');
  expect('  1HELLO              world  '.kabobCase()).toBe('1hello-world');
  expect('áé    í ÓÚ  '.kabobCase()).toBe('áé-í-óú');
  expect('  493 02    '.kabobCase()).toBe('493-02');
});
