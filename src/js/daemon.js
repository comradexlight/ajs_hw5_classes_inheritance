import Character from './character';

class Daemon extends Character {
  constructor(name, type = 'Daemon', health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
  }
}
