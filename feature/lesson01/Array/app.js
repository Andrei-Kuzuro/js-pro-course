/* Создать массив из 10 чисел. Необходимо создать новый массив,
 в котором числа будут возведены в квадрат. Например: [1,2,3] -> [1,4,9]. */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squareArray = array.map((item) => item ** 2);

console.log(squareArray);

/* Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов. */

let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let sumArr = arr.reduce((prev, cur) => prev + cur, 0);

console.log('Сумма всех элементов массива: ', sumArr);

/* Напишите код, который добавит символ двоеточие(':') между нечетными числами. Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5 */

let num = prompt('Введите чмсло:', '5567873335433545');

function colonOdd(num) {
  let dot = [num[0]];

  for (let i = 1; i < num.length; i++) {
    if (num[i - 1] % 2 !== 0 && num[i] % 2 !== 0) {
      dot += ':' + num[i];
    } else {
      dot += num[i];
    }
  }
  return dot;
}

console.log(colonOdd(num));

/* Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой разность соответствующих элементов заданных массивов. */

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 3, 9];

let difference = (arr1.length > arr2.length ? arr1 : arr2).map((el, i) =>
  arr2[i] === undefined ? el : el - arr2[i]
);

console.log(difference);

/* Создайте 2 массива с разной длинной. 
Необходимо написать код,который создаёт массив элементов 
представляющих собой сумму соответствующих элементов заданных массивов. */

let arr01 = [1, 2, 3, 4, 5];
let arr02 = [6, 3, 9];

let sum = (arr01.length > arr02.length ? arr01 : arr02).map((el, i) =>
  arr02[i] === undefined ? el : el + arr02[i]
);

console.log(sum);

/* Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную. 
Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1] */

let arr03 = [1, 3, 4, 7, 9, 0];

let rev = arr03.toString().split('').reverse().join('');

console.log(rev);

/* Фильтр юзеров Создать массив объектов для юзеров. Пример:

[{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]
Написать скрипт, который будет на выходе отдавать два массива. 
Первый с совершеннолетними пользователями, второй с несовершеннолетними. */

let users = [
  { name: 'Ivan', age: 18 },
  { name: 'Petr', age: 12 },
  { name: 'Sidor', age: 25 },
  { name: 'Fedor', age: 32 },
];

function usersFilter(users) {
  let youngs = [];
  let adults = [];

  users.forEach((p) => (p.age <= 18 ? youngs.push(p) : adults.push(p)));

  return { youngs, adults };
}

console.log(usersFilter(users));

/* Необходимо создать массив из 15 элементов. 
В массиве обязательно должны быть одинаковые значения. 
Напишите код, который уберет эти дубликаты из созданного массива. */

let arr04 = [1, 2, 3, 4, 5, 45, 7, 47, 3, 5, 45, 643, 45, 3, 3];

let delDublicate = [...new Set(arr04)];

console.log(delDublicate);

/* Напишите код, который проверит является строка полиндромом (слово, которое с обеих сторон читается одинаково, например РЕПЕР, ШАЛАШ) */

function palindrom(str) {
  pal = str.toLowerCase();
  return pal === pal.split('').reverse().join('');
}

console.log(palindrom('РЕПЕР'));
console.log(palindrom('Ара'));
console.log(palindrom('ШАЛАШ'));

/* Написать функцию, которая принимает первым аргументом массив, 
а вторым любое значение, функция должна вернуть индекс если 
такое значение есть в массиве и -1 если его нет. 
(indexOf, findIndex не использовать!) */

function findIndex(arr, value) {
  return arr.reduce((prev, curr, index) => {
    if (curr === value) {
      return index;
    }

    return prev;
  }, -1);
}

console.log(findIndex([1, 2, 3, 4, 5], 5));

/* Написать функцию search, которая принимает первым аргументом массив имен:
[ ‘Ivan’, ‘Petr’, ‘Sidor’, ...]
и любую произвольную строку. Функция должна отфильтровать массив
 в зависимости от строки (в независимости от регистра).  */

function search(array, value) {
  return array.filter(
    (el) => el.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

console.log(search(['Ivan', 'Andrei', 'Anton', 'Sergei'], 'an'));

/* Написать функцию сравнения двух массивов, которая возвращает true или false
 в зависимости от того, одинаковые у них элементы или нет. */

function checkArrays(array2, array3) {
  return (
    array2.length === array3.length &&
    array2.sort().every(function (value, index) {
      return value === array3.sort()[index];
    })
  );
}

console.log(checkArrays([1, 2, 3, 4], [2, 1, 4, 3]));
