export default class Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Длина имени должна быть от 2 до 10 символов!');
    }

    if (['bowman', 'swordsman', 'magician', 'daemon', 'undead', 'zombie'].includes(type)) {
      this.type = type;
    } else {
      throw new Error('Некорректный класс персонажа!');
    }

    this.health = 100;
    this.level = 1;
  }
}
