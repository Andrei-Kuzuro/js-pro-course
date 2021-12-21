/* Сделайте промис, внутри которого будет setTimeout в 3 секунды,
после которой промис должен зарезолвится (то есть выполнится успешно). */

let promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(console.log('done')), 3000)
})

/*Сделайте промис, внутри которого будет setTimeout в 3 секунды,
после которой промис должен зареджектится (то есть выполнится с ошибкой). */

let promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('Error')), 3000)
})

/* Сделайте 3 промиса, в каждом из которых расположена функция setTimeout
 со случайной задержкой от 1 до 5 секунд.
Пусть каждый промис своим результатом возвращает эту задержку.
С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран. */

let promiseThree = Promise.all([
    new Promise(res => setTimeout(() => res(1000), 1000 )),
    new Promise(res => setTimeout(() => res(3000), 3000 )),
    new Promise(res => setTimeout(() => res(5000), 5000 )),
]).then(console.log())

// let sum = promiseThree.reduce((prev, cur) => prev + cur, 0)

// console.log(sum)

/* Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users,
 Отфильтровать массив пользователей, чтобы остались только пользователи с четными id. */

let promiseUsers = fetch('https://jsonplaceholder.typicode.com/users')

promiseUsers
    .then((response) => {
        console.log({ response });
        return response.json();
    })
    .then((value) => {
        console.log({value})
        value.forEach(item => {
           if(item.id % 2 === 0) {
               let div = document.createElement('div')
               div.innerHTML = item.name;
               document.body.append(div);
           }
        })
    })

/* Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users,
вывести список карточек пользователей, отобразить имя, телефон и остальную информацию каждого пользователя.
 Вывести в html внутри div с id = 1 */

let promiseUsers1 = fetch('https://jsonplaceholder.typicode.com/users')

promiseUsers1
    .then((response) => {
        console.log({ response });
        return response.json();
    })
    .then((value) => {
        console.log({value})
        value.forEach(item => {
            if(item.id === 1) {
                let div = document.createElement('div')
                let name = document.createElement('p')
                let address = document.createElement('p')
                let company = document.createElement('p')
                let email = document.createElement('p')
                let phone = document.createElement('p')
                let username = document.createElement('p')
                let website = document.createElement('p')

                name.innerText = item.name
                address.innerText = item.address.city
                company.innerText = item.company.name
                email.innerHTML = item.email
                phone.innerText = item.phone
                username.innerText = item.username
                website.innerText = item.website

                div.append(name)
                div.append(address)
                div.append(company)
                div.append(phone)
                div.append(email)
                div.append(username)
                div.append(website)

                document.body.append(div);
            }
        })
    })