import Swordsman from '../swordsman';

test('Positive test of the Swordsman class with parameter: name: Имя', () => {
  const swordsman = new Swordsman('Имя');
  expect(swordsman).toEqual({
    name: 'Имя', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});
