import Zombie from '../zombie';

test('Positive test of the Zombie class with parameter: name: Имя', () => {
  const zombie = new Zombie('Имя');
  expect(zombie).toEqual({
    name: 'Имя', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});
