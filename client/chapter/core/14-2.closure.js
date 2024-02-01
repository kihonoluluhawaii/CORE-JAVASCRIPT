function earth() {
  let water = true;

  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
  };

  return function (value) {
    water = value;
    // return apple
  };
}

const UFO = earth();

UFO(0);

/**
 *
 */

// const first = document.querySelector('.first');

// function handleClick() {
//   let isClicked = false;

//   return () => {
//     if (!isClicked) {
//       document.body.style.background = 'orange'; // setter
//     } else {
//       document.body.style.background = 'white';
//     }
//     isClicked = !isClicked;
//   };
// }

// first.addEventListener('click', handleClick());

//함수가 알아서 실행됨
//IIFE

// const first = document.querySelector('.first');

// const handleClick = (() => {
//   let isClicked = false;

//   return function () {
//     if (!isClicked) {
//       document.body.style.background = 'orange';
//     } else {
//       document.body.style.background = 'white';
//     }

//     isClicked = !isClicked;
//   };
// })();

// first.addEventListener('click', handleClick);

/**
 *
 */

function useState(initValue) {
  let value = initValue;
  function read() {
    return value; //getter
  }
  function write(newValue) {
    value = newValue;
  } //setter
  return [read, write];
}

const [state, setState] = useState(111);
