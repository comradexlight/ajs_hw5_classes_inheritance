import Character from './character';

class Undead extends Character {
  constructor(name, type = 'Undead', health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
  }
}
