import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Team from '../app';

test('creating team', () => {
  expect(new Team()).toBeInstanceOf(Team);
});

test('add one team member', () => {
  const team = new Team();
  const bowman = new Bowman('Alex', 'bowman');
  team.add(bowman);
  expect(team.members.size).toBe(1);
  expect(team.members.has(bowman)).toBeTruthy();
});

test('throw error when add duplicate', () => {
  const team = new Team();
  const bowman = new Bowman('Alex', 'bowman');
  team.add(bowman);
  expect(() => team.add(bowman)).toThrow('Персонаж уже добавлен!');
  expect(team.members.size).toBe(1);
});

test('add few team member', () => {
  const team = new Team();
  const bowman = new Bowman('Alex', 'bowman');
  const swordsman = new Swordsman('Rob', 'swordsman');
  const magician = new Magician('Richard', 'magician');
  team.addAll(bowman, swordsman, magician, bowman, swordsman, magician);
  expect(team.members.size).toBe(3);
  expect(() => team.addAll(bowman, swordsman, magician, bowman, swordsman, magician)).not.toThrow('Персонаж уже добавлен!');
});

test('toArray', () => {
  const team = new Team();
  const bowman = new Bowman('Alex', 'bowman');
  const swordsman = new Swordsman('Rob', 'swordsman');
  const magician = new Magician('Richard', 'magician');
  team.addAll(bowman, swordsman, magician);
  expect(team.toArray()).toEqual([bowman, swordsman, magician]);
});
