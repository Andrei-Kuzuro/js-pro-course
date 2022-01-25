// const searchArr = ['Ivan', 'Petr', 'Sidor'];

// function search(arr, searchText) {
//   let resultArr = arr.reduce((prev, curr) => {
//     if (curr.toLowerCase().includes(searchText.toLowerCase())) {
//       return prev.concat(curr);
//     }

//     return prev;
//   }, []);

//   return resultArr;
// }

// console.log(search(['Ivan', 'Petr', 'Sidor'], 'si'));

// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// let Counter = counter();

// function splitArray(arr, size) {
//   let countParts = math.ceil(arr.lenght / size);
//   let result = [];

//   for (let i = 0; i < countParts; i++) {
//     result.push(arr.splice(0, size));
//   }
//   return result;
// }

let usersPromise = fetch('https://jsonplaceholder.typicode.com/users');

usersPromise
  .then((response) => {
    console.log({ response });
    return response.json();
  })
  .then((value) => {
    console.log({ value });
    value.forEach((item) => {
      let div = document.createElement('div');

      div.innerHTML = item.username;

      document.body.append(div);
    });
  })
  .catch((error) => console.log(error));

// let photoPromise = fetch('https://jsonplaceholder.typicode.com/photos');
//
// photoPromise
//   .then((response) => {
//     console.log({ response });
//     return response.json();
//   })
//   .then((value) => {
//     console.log({ value });
//     value.forEach((item) => {
//       let image = document.createElement('img');
//       image.src = item.thumbnailU]rl;
//       document.body.append(image);
//     });
//   });
