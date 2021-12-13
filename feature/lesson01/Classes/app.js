/* Создать класс счетчика, который будет иметь поле count - значение счетчика.
 Объект класса будет иметь следующие методы: метод для инкремента(+1) счетчика,
  метод для декремента(-1) счетчика, метод который будет возвращать (return)
   значение счетчика. */

class Count {
  constructor(count) {
    this.count = count;
  }

  increment() {
    return this.count++;
  }

  decrement() {
    return this.count--;
  }
  meaningCount() {
    return this.count;
  }
}

let count = new Count(11);

console.log(count.increment());
console.log(count.decrement());
console.log(count.meaningCount());

/* Реализуйте класс Worker (Работник), который будет создавать объект и иметь
 следующие свойства: name (имя), secondName (фамилия), rate (ставка за день
 работы), days (количество отработанных дней) сountOfDetails(количество
 выполненных деталей). Также класс должен иметь метод getSalary(), который будет
 выводить зарплату работника. Зарплата - это произведение (умножение) ставки
 rate на количество отработанных дней days. У каждого объекта класса Worker
 должны быть доступны методы getName, getSecondName, getRate, getDays, каждый из
 которых будет возвращать соответствующее поле в объекте. И также методы
 setRate, setDays, которые будут устанавливать новые значения для соответственно
 свойств rate и days. Добавить метод, который будет увеличивать количество
 деталей на 1. Добавить метод, который будет делать ресет этого количества в 0 */

/* Реализуйте класс MyString, объект которого будет иметь следующие методы:
 метод reverse(), который параметром принимает строку, а возвращает ее в
 перевернутом виде, метод ucFirst(), который параметром принимает строку,
 а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
 который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

class MyString {
  reverse(str) {
    return str.split('').reverse().join('');
  }
  ucFirst(str) {
    return str
      .split('')
      .map((item, index) => {
        if (index === 0) {
          return item.toUpperCase();
        }
        return item;
      })
      .join('');
  }

  ucWords(str) {
    return str
      .split(' ')
      .map((item) => item.replace(item[0], item[0].toUpperCase()))
      .join(' ');
  }
}

let str = new MyString();
console.log(str.reverse('Hello'));
console.log(str.ucFirst('hello'));
console.log(str.ucWords('hello world')); // домашнее  задание

/* Реализуйте класс User, который будет иметь следующие свойства:
 имя, фамилия, email; следующие методы: getFullName, getEmail.
 */

class User {
  constructor(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this._email = email; // скрытое свойство "_"
  }

  getFullName() {
    return this.name + ' ' + this.surname;
  }

  getEmail() {
    return this._email;
  }
}

let user = new User('Andrei', 'Kuzuro', '1342@gmail.com');

console.log(user.getFullName());
console.log(user.getEmail());

/* Реализуйте класс Student, который будет наследовать класс User.
 Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
 surname (фамилия, наследуется от User), year (год поступления в вуз).
 Класс должен иметь метод getFullName() (наследуется от User),
 с помощью которого можно вывести одновременно имя и фамилию студента.
 Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
 Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
 Текущий год получить программно, используя объект Date  */
