/* eslint-disable no-new */
import Character from '../character';

test('should throw error on incorrect name', () => {
  expect(() => {
    new Character('A', 'bowman');
  }).toThrow('Длина имени должна быть от 2 до 10 символов!');
  expect(() => {
    new Character('AAAAAAAAAAA', 'bowman');
  }).toThrow('Длина имени должна быть от 2 до 10 символов!');
});

test('should throw error on incorrect type', () => {
  expect(() => {
    new Character('bowman', 'booowman');
  }).toThrow('Некорректный класс персонажа!');
});
