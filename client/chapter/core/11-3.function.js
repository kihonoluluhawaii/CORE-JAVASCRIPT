/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

// let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

//   console.log(resultX);
//   console.log(resultY);
//   console.log(resultZ);

//arguments 잘안씀

// 함수 선언 → 화살표 함수 (표현)식

//  rest parameter 쓸 거 다쓰고 나머지
let total = 0;
let calcAllMoney = (...args) => {
  //for
  //   for (let i = 0; i < args.length; i++) {
  //     total += args[i];
  //   }

  //for ..of
  //   for (let value of args) total += value;

  //forEach         //반복만 돌아줄뿐 어떠한 값도 반환하지 못합니다.
  //   args.forEach((item) => (total += item));
  //   return total;

  //reduce            //값을 반환하는 구조
  //args.reduce((acc,cur)=> acc + cur,0)

  return args.reduce((acc, cur) => acc + cur, 0);
};
console.log(calcAllMoney(10, 30, 40, 50));
// let calcAllMoney = (...args)=> args.reduce((acc,cur)=> acc+ cur,0);

const createUser = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

createUser('이경민', 41);
// 화살표 함수와 this

// // (일반함수 / 생성자함수)
// const Button = () => {};
// // 화살표 함수는 생성자함수를 만들 수 없다.
// // 객체지향 프로그래밍 vs 함수지향 프로그래밍

// //화살표함수 = 일반함수에 사용(함수중심설계)
// //클래스 구문 = 생성자 함수에 사용( 객체중심 설계)
// function button() {}

// const a = button(); // undefined
// const b = new Button(); // <- 객체가 된다. 생성자함수

// class Button2 {
//   //    <- 생성자 함수가 되었다이
// }
// const c = new Button2();

// 일반 함수
//this : 나를 호출한 대상을 this로 찾음

// 화살표 함수
// this : 가지고 있지 않음. 내 상위 영역에서 찾음

//객체의 메서드를 정의할때 concise method 사용
//메서드 안에서 함수를 정의할때 arrowFunction 효율적임
const user = {
  total: 0,
  name: '박가희',
  age: 9,
  address: '서울시',
  grades: [80, 40, 15],
  totalGrades() {
    this.grades.forEach(function (item) {
      this.total += item;
    });
    return this.total;
    //   function sayHi() => {
    //   console.log(this);
    // }
    // sayHi()
  },
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
function pow(numeric, powerCount) {
  let result = 1;
  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }
  return result;
}
// console.log(pow(4, 3));

// let powExpression = (numeric, powCount) => {
//   return Array(powCount)
//     .fill(null)
//     .reduce((acc) => {
//       return acc * numeric;
//     }, 1);
// };

let powExpression = (numeric, powCount) =>
  Array(powCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);

// repeat(text: string, repeatCount: number): string;

// function repeat(text, repeatCount) {
//   let result = '';
//   for (let i = 0; i <= repeatCount; i++) {
//     result += text;
//   }
//   return result;
// }
// console.log(repeat('hello', 3));

//repeat ('hello',3) // 'hellohellohello'

let repeatExpresstion = (text, repeatCount) => {
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => {
      return acc + text;
    }, '');
};

console.log('hello', 3);
