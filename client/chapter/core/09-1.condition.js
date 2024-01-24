/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
function watchingMovie() {
  function watchingMovie() {
    // 영화 봤니?
    let didWatchMovie = confirm('영화 봤니?');

    // 영화 볼거니?

    if (!didWatchMovie) {
      let goingToWatchMovie = confirm('영화 볼거야?');

      if (goingToWatchMovie) {
        let withWho = prompt('누구랑 볼거니?');

        if (withWho === '너') {
          console.log('어머..☺️');
        } else if (withWho === '엄마') {
          console.log('효자구나!');
        } else {
          console.log('내가 아니네..?🤔');
        }
      } else {
        console.log('꼭 봐 재밌어');
      }
    } else {
      console.log('어 나 봤어..');
    }
  }
}

// 영화 볼거니?

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

// const a = condition ? value1 : value2;
let message = didWatchMovie.includes('yes')
  ? '그거 잼뜨라'
  : goingToWatchMovie.includes('yes')
    ? '너무 재밌겠다!'
    : '난 별론데?';
console.log(message);

// 멀티 조건부 연산자 식

function render(node, isActive) {
  const template = /* html */ `
      <div>${isActive ? '안녕!!!!' : '잘가~~!!!'}</div>
    `;
  node.insertAdjacentHTML('beforeend', template);
}
