export default class Character {
  constructor(name, type) {
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
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }
}
