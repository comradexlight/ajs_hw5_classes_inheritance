import Character from '../character';

test.each([
  ['И', 'Bowman', 100, 1, 10, 10, Error('Вы ввели неверное имя')],
  [124, 'Bowman', 100, 1, 10, 10, Error('Вы ввели неверное имя')],
  ['Имя', 'Тип', 100, 1, 10, 10, Error('Вы ввели неверный тип')],
])('testeing Character class with %s name, %s type, %i health, %i level, %i attack, %i defence and %o Error', (name, type, health, level, attack, defence, error) => {
  expect(() => { 
    const char = new Character(name, type, health, level, attack, defence);
  }).toThrow(error);
});


//  ['Имя', 'Bowman', 100, 1, 10, 10, { name: 'Имя', type: 'Bowman', health: 100, level: 1, attack: 10, defence: 10 }],
//const char = new Character(name, type, health, level, attack, defence);