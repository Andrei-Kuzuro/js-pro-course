/* Написать функцию, которая принимает любое 
количество чисел(не массив)и возвращает их сумму. */

function sum() {
  let count01 = 0;
  for (let i = 0; i < arguments.length; i++) {
    count01 += arguments[i];
  }
  return count01;
}

console.log(sum(1, 2, 4, 6, 8, 9));

/* Написать функцию, которая принимает первым аргументом массив,
а вторым любое значение, функция должна вернуть индекс
 если такое значение есть в массиве и -1 если его нет.
(indexOf, findIndex не использовать) */

function findIndex(arr, value) {
  return arr.reduce((prev, curr, index) => {
    if (curr === value) {
      return index;
    }

    return prev;
  }, -1);
}

console.log(findIndex([1, 2, 3, 4, 5], 5));

/* Написать функцию, которая будет 
возвращать количество вызовов этой функции в квадрате.
(Использовать замыкание) */

function n() {
  let count = 0;

  return function p() {
    return (count++) ** 2;
  };
}

let funcSquare = n();

console.log(funcSquare());
console.log(funcSquare());
console.log(funcSquare());
console.log(funcSquare());
console.log(funcSquare());
console.log(funcSquare());

/* Напишите функцию, которая разделит массив на части заданного размера
 и вернет массив элементами которого являются эти части.
Пример функции: splitArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]] */

function splitArray(array, size) {
  let newArray = [];
  let index = 0;
  while (index < array.length) {
    newArray.push(array.slice(index, size + index));
    index += size;
  }
  return newArray;
}

console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8], 3));

/* Написать функцию, которая приобразуем любую строку
 в строку написанную кебаб кейсом
  (все буквы с маленькой буквы и на месте пробелов - тире)
Например: 'Hello World' -> 'hello-world'; 'Hello dear hell' -> 'hello-dear-hell' */

function kebab(str) {
  return str
    .split(' ')
    .map((el) => el.toLowerCase())
    .join('-');
}

console.log(kebab('Hello World'));
console.log(kebab('Hello dear hell'));
