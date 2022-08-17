import Magician from '../magician';

test('Positive test of the Magician class with parameter: name: Имя', () => {
  const magician = new Magician('Имя');
  expect(magician).toEqual({
    name: 'Имя', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});
