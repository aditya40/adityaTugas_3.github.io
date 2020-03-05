const mebitokibi = require('../src/03.js');

test('Megabyte to Kilobyte', () => {
  expect(mebitokibi(2)).toBe(2048);
});
