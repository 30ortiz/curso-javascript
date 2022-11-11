document.addEventListener('DOMContentLoaded', () => {

  // variable
  var x = 1;
  x = 23;
  console.log(x)

  // const, var and let
  function findX() {
    const x = 3;
    let y = 1; {
      let x = 2
      console.log('Example 1: ' + (y + x))
    }
    console.log('Example 2: ' + (y + x))
  }
  findX();

  // const
  const count = [1, 2, 3]
  count = [1, 2, 3, 4, 5]
  console.log(count) //output:'count' is read-only
})

