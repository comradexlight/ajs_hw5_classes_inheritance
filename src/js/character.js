export default class Character {
  constructor(name, type, attack, defence) {
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
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Нельзя нанести урон умершему');
    }
  }
}
