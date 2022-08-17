export default class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
    if (typeof name === 'string' && name.trim().length >= 2 && name.trim().length <= 10) {
      this.name = name;
    } else {
      throw new Error('Вы ввели неверное имя');
    }
    if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      this.type = type;
    } else {
      throw new Error('Вы ввели неверный тип');
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
