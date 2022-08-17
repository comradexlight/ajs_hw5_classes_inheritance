import Character from './character';

class Swordsman extends Character {
  constructor(name, type = 'Swordsman', health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
  }
}
