import Character from '../character';

test('Positive test of the Character class with parameters: name: Имя, type Swordsman', () => {
  const char = new Character('Имя', 'Swordsman');
  expect(char).toEqual({
    name: 'Имя', type: 'Swordsman', health: 100, level: 1,
  });
});

test.each([
  ['И', 'Bowman', Error('Вы ввели неверное имя')],
  [124, 'Bowman', Error('Вы ввели неверное имя')],
  ['Имя', 'Тип', Error('Вы ввели неверный тип')],
])('Negative test of the Character class with %s name, %s type and %o Error', (name, type, error) => {
  expect(() => {
    new Character(name, type);
  }).toThrow(error);
});

test('Positive test of the levelUp method of the Character class with parameters: name: Name, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman');
  char.health = 90;
  char.attack = 10;
  char.defence = 10;
  char.levelUp();
  expect(char).toEqual({
    name: 'Имя', type: 'Swordsman', health: 100, level: 2, attack: 12, defence: 12,
  });
});

test('Positive test of health parameter change in levelUp method of Character class with parameters: name: Name, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman');
  char.health = 90;
  char.levelUp();
  expect(char.health).toBe(100);
});

test('Positive test of level parameter change in levelUp method of Character class with parameters: name: Name, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman');
  char.levelUp();
  expect(char.level).toBe(2);
});

test('Positive test of attack parameter change in levelUp method of Character class with parameters: name: Name, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman');
  char.attack = 10;
  char.levelUp();
  expect(char.attack).toBe(12);
});

test('Positive test of defense parameter change in levelUp method of Character class with parameters: name: Name, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman');
  char.defence = 10;
  char.levelUp();
  expect(char.defence).toBe(12);
});

test('Negative test of the levelUp method of the Character class with parameters: name: Name, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman');
  char.health = 0;
  expect(() => {
    char.levelUp();
  })
    .toThrow(Error('Нельзя повысить левел умершего'));
});

test('Positive test of the damage with 10 points method of the Character class with parameters: name: Name, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman');
  char.defence = 10;
  char.damage(10);
  expect(char).toEqual({
    name: 'Имя', type: 'Swordsman', health: 91, level: 1, attack: undefined, defence: 10,
  });
});

test('Negative test of the damage with 20 points method of the Character class with parameters: name: Name, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman');
  char.health = -1;
  expect(() => {
    char.damage(20);
  })
    .toThrow(Error('Нельзя нанести урон умершему'));
});
