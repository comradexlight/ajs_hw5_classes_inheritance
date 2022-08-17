import Swordsman from '../swordsman';

test('positive testing Swordsman class with name Имя', () => {
  const swordsman = new Swordsman('Имя');
  expect(swordsman).toEqual({
    name: 'Имя', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});
