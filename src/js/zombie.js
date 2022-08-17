import Character from './character';

class Zombie extends Character {
  constructor(name, type = 'Zombie', health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
  }
}
