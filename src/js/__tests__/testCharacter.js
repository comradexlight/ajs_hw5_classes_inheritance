import Character from '../character';

test('Positive test of the Character class with parameters: name: Имя, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman', 10, 10);
  expect(char).toEqual({
    name: 'Имя', type: 'Swordsman', health: 100, level: 1, attack: 10, defence: 10,
  });
});

test.each([
  ['И', 'Bowman', 10, 10, Error('Вы ввели неверное имя')],
  [124, 'Bowman', 10, 10, Error('Вы ввели неверное имя')],
  ['Имя', 'Тип', 10, 10, Error('Вы ввели неверный тип')],
])('Negative test of the Character class with %s name, %s type and %o Error', (name, type, attack, defence, error) => {
  expect(() => {
    new Character(name, type, attack, defence);
  }).toThrow(error);
});

test('Positive test of the levelUp method of the Character class with parameters: name: Name, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman', 10, 10);
  char.health = 90;
  char.levelUp();
  expect(char).toEqual({
    name: 'Имя', type: 'Swordsman', health: 100, level: 2, attack: 12, defence: 12,
  });
});

test('Positive test of health parameter change in levelUp method of Character class with parameters: name: Name, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman', 10, 10);
  char.health = 90;
  char.levelUp();
  expect(char.health).toBe(100);
});

test('Positive test of level parameter change in levelUp method of Character class with parameters: name: Name, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman', 10, 10);
  char.levelUp();
  expect(char.level).toBe(2);
});

test('Positive test of attack parameter change in levelUp method of Character class with parameters: name: Name, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman', 10, 10);
  char.levelUp();
  expect(char.attack).toBe(12);
});

test('Positive test of defense parameter change in levelUp method of Character class with parameters: name: Name, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman', 10, 10);
  char.levelUp();
  expect(char.defence).toBe(12);
});

test('Negative test of the levelUp method of the Character class with parameters: name: Name, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman', 10, 10);
  char.health = 0;
  expect(() => {
    char.levelUp();
  })
    .toThrow(Error('Нельзя повысить левел умершего'));
});

test('Positive test of the damage with 10 points method of the Character class with parameters: name: Name, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman', 10, 10);
  char.damage(10);
  expect(char).toEqual({
    name: 'Имя', type: 'Swordsman', health: 91, level: 1, attack: 10, defence: 10,
  });
});

test('Negative test of the damage with 20 points method of the Character class with parameters: name: Name, type Swordsman, attack 10 and defense 10', () => {
  const char = new Character('Имя', 'Swordsman', 10, 10);
  char.health = -1;
  expect(() => {
    char.damage(20);
  })
    .toThrow(Error('Нельзя нанести урон умершему'));
});
