import Magician from '../magician';

test('positive testing Magician class with name Имя', () => {
  const magician = new Magician('Имя');
  expect(magician).toEqual({
    name: 'Имя', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});
