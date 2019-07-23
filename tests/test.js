import {
  capitalize,
  allCaps,
  capitalizeWords,
  oddCaps,
  evenCaps,
  removeExtraSpaces,
  kabobCase,
  snakeCase,
  camelCase,
} from '../src/index';

test('Sanity check', () => {
  expect(2 + 2).toBe(4);
});

test('Test capitalize', () => {
  expect(capitalize('hello world')).toBe('Hello world');
  expect(capitalize('')).toBe('');
  expect(capitalize('1hello world')).toBe('1hello world');
  expect(capitalize('áéíóú')).toBe('Áéíóú');
  expect(capitalize('49302')).toBe('49302');
});

test('Test allCaps', () => {
  expect(allCaps('hello world')).toBe('HELLO WORLD');
  expect(allCaps('')).toBe('');
  expect(allCaps('1hello world')).toBe('1HELLO WORLD');
  expect(allCaps('áéíóú')).toBe('ÁÉÍÓÚ');
  expect(allCaps('49302')).toBe('49302');
});

test('Test capitalizeWords', () => {
  expect(capitalizeWords('hello world')).toBe('Hello World');
  expect(capitalizeWords('')).toBe('');
  expect(capitalizeWords('1hello world')).toBe('1hello World');
  expect(capitalizeWords('áé í óú')).toBe('Áé Í Óú');
  expect(capitalizeWords('49302')).toBe('49302');
});

test('Test oddCaps', () => {
  expect(oddCaps('hello world')).toBe('hElLo wOrLd');
  expect(oddCaps('')).toBe('');
  expect(oddCaps('1hello world')).toBe('1HeLlO WoRlD');
  expect(oddCaps('áé í óú')).toBe('áÉ Í Óú');
  expect(oddCaps('49302')).toBe('49302');
});

test('Test evenCaps', () => {
  expect(evenCaps('hello world')).toBe('HeLlO WoRlD');
  expect(evenCaps('')).toBe('');
  expect(evenCaps('1hello world')).toBe('1hElLo wOrLd');
  expect(evenCaps('áé í óú')).toBe('Áé í óÚ');
  expect(evenCaps('49302')).toBe('49302');
});

test('Test removeExtraSpaces', () => {
  expect(removeExtraSpaces('     hello      world   ')).toBe('hello world');
  expect(removeExtraSpaces('')).toBe('');
  expect(removeExtraSpaces('  1hello              world  ')).toBe('1hello world');
  expect(removeExtraSpaces('áé    í óú  ')).toBe('áé í óú');
  expect(removeExtraSpaces('  493 02    ')).toBe('493 02');
});

test('Test kabobCase', () => {
  expect(kabobCase('     HellO      WoRLd   ')).toBe('hello-world');
  expect(kabobCase('')).toBe('');
  expect(kabobCase('  1HELLO              world  ')).toBe('1hello-world');
  expect(kabobCase('áé    í ÓÚ  ')).toBe('áé-í-óú');
  expect(kabobCase('  493 02    ')).toBe('493-02');
});

test('Test snakeCase', () => {
  expect(snakeCase('     HellO      WoRLd   ')).toBe('hello_world');
  expect(snakeCase('')).toBe('');
  expect(snakeCase('  1HELLO              world  ')).toBe('1hello_world');
  expect(snakeCase('áé    í ÓÚ  ')).toBe('áé_í_óú');
  expect(snakeCase('  493 02    ')).toBe('493_02');
});


test('Test camelCase', () => {
  expect(camelCase('     HellO      WoRLd   ')).toBe('helloWorld');
  expect(camelCase('')).toBe('');
  expect(camelCase('  1HELLO              world  ')).toBe('1helloWorld');
  expect(camelCase('áé    í ÓÚ  ')).toBe('áéÍÓú');
  expect(camelCase('  493 02    ')).toBe('49302');
});
