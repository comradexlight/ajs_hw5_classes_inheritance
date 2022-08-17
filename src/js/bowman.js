import Character from './character';

class Bowman extends Character {
  constructor(name, type = 'Bowman', health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
  }
}
