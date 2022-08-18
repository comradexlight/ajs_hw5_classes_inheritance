import Undead from '../undead';

test('Positive test of the Undead class with parameter: name: Имя', () => {
  const undead = new Undead('Имя');
  expect(undead).toEqual({
    name: 'Имя', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});
