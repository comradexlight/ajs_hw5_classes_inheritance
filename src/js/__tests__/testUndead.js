import Undead from '../undead';

test('positive testing Undead class with name Имя', () => {
  const undead = new Undead('Имя');
  expect(undead).toEqual({
    name: 'Имя', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});
