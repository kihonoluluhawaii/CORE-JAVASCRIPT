/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// const first = getNode('.first');
// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler

// function handler() {
//   console.log('클릭 이벤트');
// }
// first.onclick = handler;
// 3. 메서드 : element.addEventListener(event, handler[, phase])

// function bindEvent(node, type, handler) {
//   if (typeof node === 'string') node = getNode(node);

//   node.addEventListener(type, handler);

//   return () => node.removeEventListener(type, handler);
// }

// const remove = bindEvent('.first', 'click', handler);

// first.addEventListener('click',handler);

// getNode('.deleteEvent').addEventListener('click', remove);

// first.addEventListener('click', handler);
/* 이벤트 추가/제거 --------------------------------------------------------- */

// getNode('.deleteEvent').addEventListener('click', () => {
//   first.removeEventListener('click', handler);
// });

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('#ball');

// function handleBall({ offsetX: x, offsetY: y }) {
//   //   const { offsetX: x, offsetY: y } = e;  // 구조분해 할당 e 는 객체이기때문, 이벤트리스터는 객체를 반환하기 때문

//   //   const x = e.offsetX;
//   //   const y = e.offsetY;
//   console.log(ball.offsetWidth / 2, ball.offsetHeight / 2);

//   ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${y - ball.offsetHeight / 2}px)`;
// }

function debounce(callback, limit = 1000) {
  let timeout;
  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.call(this, e);
    }, limit);
  };
}

// function handle(e) {
//   console.log(this, e);
// }
// call, apply, bind
// arguments는 유사배열 aplly를 사용해도됨

// callback, closure, IIFE, call,apply 를 다시 한번 공부하자.
function handle(e) {
  console.log(this, e);
}

// callback, closure, IIFE, call, apply

function throttle(callback, limit = 100) {
  let waiting = false;

  return function (e) {
    if (!waiting) {
      callback.call(this, e);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

ground.addEventListener('mousemove', throttle(handle, 1000));
// function handleEmotion({ offsetX: x, offsetY: y }) {
//   console.log(x, y);
//   ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${y - ball.offsetHeight / 2}px)`;

//   let template = `
//   <div class="emotion" style="top:${y}px;left:${x}px" >dd</div>
//   `;
//   insertLast(ground, template);
// }
// ground.addEventListener('click', handleBall);
// ground.addEventListener('mousemove', handleEmotion);

// 이벤트를 내가 원하는 시점에 1번만 실행 | 원하는 시간에 맞춰 실행

debounce(() => {
  console.log('실행');
}, 1000);
