document.addEventListener('DOMContentLoaded', () => {

  // variable
  var x = 1;
  x = 23;
  console.log(x)

  // const, var and let
  function findX() {
    let x = 3;
    const y = 1; {
      let x = 2
      console.log('Example 1: ' + (y + x))
    }
    console.log('Example 2: ' + (y + x))
  }
  findX();

  // const
  const array = [1, 2, 3]
  // count = [1, 2, 3, 4, 5]
  // console.log(count) //output:index.js:21 Uncaught TypeError: Assignment to constant variable.

  // if statements
  if ('Hola mundo!') {
    console.log('it is truthy!')
  }

  const a = 1;
  if (a > 2) {
    console.log('it is truthy!')
  } else {
    console.log('it is falsey!')
  }

  const time = 9;

  if (time < 12) {
    console.log('Good morning')
  } else if (time === 12) {
    console.log('Good noon')
  } else if (time > 12 && time < 18) {
    console.log('Good afternoon')
  } else {
    console.log('Good evening')
  }

  // if (0) {
  //   console.log('it is falsey!') //output: Error
  // }


  // arrays
  let books = ['Moby Dick', 'Life of Pi', 'Sapiens', 'The Alchemist', 'The Lord of the Rings']
  //let count = [1, 2, 3, 4];
  let passResult = [true, false, true, false];

  console.log(books.length);
  console.log(books[1]);

  let count = 0;
  for(let i = 0; i < books.length; i++) {
    console.log(books[i]);
    if(books[i] === 'Sapiens') {
      count++;
      console.log(i);
    }
  }

  // objects
  let person = {
    name: 'John',
    age: 30,
    city: 'New York',
    isMarried: false,
    children: ['Mary', 'Peter', 'John Jr.']
  }

  // objects in arrays

  let users = [
    {
      name: 'John',
      age: 30,
      city: 'New York',
      isMarried: false,
      children: ['Mary', 'Peter', 'John Jr.']
    },
    {
      name: 'Jane',
      age: 25,
      city: 'Miami',
      isMarried: true,
      children: ['Alice', 'Bob']
    },
    {
      name: 'Mark',
      age: 28,
      city: 'Los Angeles',
      isMarried: false,
      children: ['Cindy', 'David']
    }
  ]

  console.log(users[0].name);

  for(let i = 0; i < users.length; i++) {
    if(users[i].name === 'Jane') {
      console.log(users[i].children[1]);
    }
  }



})