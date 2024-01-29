/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

//   console.log(resultX);
//   console.log(resultY);
//   console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (a, b, c) {
  //함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 이라 부른다.
  console.log(arguments); //순환시켜서 반복시켜서 값을 다 더하기
  let total = 0;

  // for 문

  //   for (let i = 0; i < arguments.length; i++) {
  //     total += arguments[i];
  //   }

  // for ...of

  //   for (let value of arguments) {
  //     total += value;
  //   }

  // 빌려쓰기

  //   Array.prototype.forEach.call(arguments, function (item) {
  //     console.log(item);
  //     total += item;
  //   });

  // arguments의 부모를 배열로 바꿔치기 한다면?

  //   arguments.__proto__ = Array.prototype;
  //   //   console.log(arguments);
  //   arguments.forEach(function (item) {
  //     total += item;
  //   });

  //arguments  객체(유사배열) => 진짜배열 (array)

  //   const arr = Array.prototype.slice.call(arguments);
  //   const arr = Array.from(arguments);
  //   console.log(arr);

  const arr = [...arguments]; // <-전개구문
  //   console.log(arr);

  //   arr.forEach(function (item) {
  //     total += item;
  //   });
  //   arr.forEach((item) => (total += item));   // <- 화살표 함수로

  // 배열의 메서드 * array method *

  // forEach => 값을 반환하지 않음. 반복의 로직만 처리
  // reduce => 값을 반환함. 모든걸 다

  // map    => 배열을 반환함
  const map = arr.map((a) => a * 2);
  console.log(map);
  // filter  => 배열을 반환함
  const filter = arr.filter((a) => a > 50);
  console.log(filter);
  //   total = arr.reduce(function (acc, cur) {
  //     return acc + cur;
  //   });
  //각종 예시
  //   const data = [
  //     {
  //       name:'tiger',
  //       age:30,
  //     },
  //     {
  //       name:'kindtiger',
  //       age:20,
  //     },
  //     {
  //       name:'seonbeom',
  //       age:41,
  //     }
  //   ]

  //   const tag = data.map((d)=>{
  //     return `<li> 이름 : ${d.name}</li>`
  //   })

  //   tag.forEach((i)=>{
  //     document.body.insertAdjacentHTML('beforeend',i)
  //   })

  return arr.reduce((acc, cur) => acc + cur);
};

const result = calculateTotal(10, 20, 30, 40, 50, 60, 70, 80);
// console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let cb = function (state, success, fail) {
  if (state) {
    return success();
  } else {
    return fail();
  }
};

cb(
  true,
  () => '성공',
  () => '실패'
);

// cb(
//     false,
//     function(){
//         return '성공';
//     };
//     function(){
//         return '실패'
//     }
//   );
function movePage(url, success, fail) {
  // if(url.includes('www')){
  //   success(url)
  // }else{
  //   fail()
  // }

  url.includes('www') ? success(url) : fail();
}

// movePage(
//   'https://www.naver.com',
//   url => console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`),
//   ()=> console.error('잘못된 url 정보를 입력하셨습니다.')
// )

movePage(
  'https://www.naver.com',
  function (url) {
    console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`);

    setTimeout(() => {
      // window.location.href = url
    }, 3000);
  },
  function () {
    console.error('잘못된 url 정보를 입력하셨습니다.');
  }
);

console.clear();
// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
// 함수가 선언 됨과 동시에 실행되는 것을 말합니다.

const master = (function () {
  let uuid = 'asdas!dasfasd';
  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})();

console.log(master);
//      캡슐화 (incapsulation) ,인수로 값을 넣어 인자로 받아서 rename이 가능하다

// const css = (function(){

//   function getStyle(node,prop){

//     if(typeof node === 'string'){
//       node = document.querySelector(node)
//     }
//     if(typeof prop !== 'string'){
//       throw new Error('getStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
//     }
//     return getComputedStyle(node)[prop]
//   }

//   function setStyle(node,prop,value){

//     if(typeof node === 'string') node = document.querySelector(node);

//     if(typeof prop !== 'string'){
//       throw new Error('setStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
//     }

//     if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수 입력값 입니다.');

//     node.style[prop] = value
//   }

//   function css(node,prop,value){

//     return (!value) ? getStyle(node,prop) : setStyle(node,prop,value)

//   }

//   return css;

// })()
