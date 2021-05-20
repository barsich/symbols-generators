/* eslint-disable no-plusplus */
import Bowman from './bowman';
import Swordsman from './swordsman';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже добавлен!');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    return Array.from(this.members);
  }

  * [Symbol.iterator]() {
    const teamArray = this.toArray();
    for (let i = 0; i < teamArray.length; i++) {
      yield teamArray[i];
    }
  }
}

const team = new Team();
const bowman = new Bowman('Alex');
const swordsman = new Swordsman('Bob');
team.addAll(bowman, swordsman);
for (const member of team.members) {
  console.log(member);
}
