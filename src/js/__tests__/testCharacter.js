import Character from '../character';

test('positive testing Character class with name Имя and type Swordsman', () => {
  const char = new Character('Имя', 'Swordsman');
  expect(char).toEqual({
    name: 'Имя', type: 'Swordsman', health: 100, level: 1, attack: 0, defence: 0,
  });
});

test.each([
  ['И', 'Bowman', Error('Вы ввели неверное имя')],
  [124, 'Bowman', Error('Вы ввели неверное имя')],
  ['Имя', 'Тип', Error('Вы ввели неверный тип')],
])('negative testeing Character class with %s name, %s type and %o Error', (name, type, error) => {
  expect(() => {
    new Character(name, type);
  }).toThrow(error);
});
