import Bowman from '../bowman';

test('Positive test of the Bowman class with parameter: name: Имя', () => {
  const bowman = new Bowman('Имя');
  expect(bowman).toEqual(
    {
      name: 'Имя', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
    },
  );
});
