import Character from './character';

class Magician extends Character {
  constructor(name, type = 'Magician', health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
  }
}
