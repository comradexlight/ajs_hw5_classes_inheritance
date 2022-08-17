import Daemon from '../daemon';

test('positive testing Daemon class with name Имя', () => {
  const daemon = new Daemon('Имя');
  expect(daemon).toEqual({
    name: 'Имя', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  });
});
