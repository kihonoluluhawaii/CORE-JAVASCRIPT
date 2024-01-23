/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;

console.log(String(YEAR)); //명시적 형 변환
console.log(YEAR + ' '); // 암시적 형 변환
// console.log(YEAR + '      ').trim( ) ); // 암시적 형 변환

// undefined, null
let days = null;
let weekend;

console.log(days + '');
console.log(undefined + '');

// boolean
let isClicked = false;

console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friends;
console.log(Number(friends));

// null
let money = null;
console.log(Number(money));

// boolean
// let cutie = false;
let cutie = true;
console.log(Number(cutie));

// string
let num = '250';
console.log(Number(num)); //명시적 형 변환
console.log(num * 1); //암시적 형 변환
//          (num / 1)
//           (+num);

// numeric string
const width = '105.3px';

console.log(Number(width));
console.log(parseInt(width));
console.log(parseFloat(width));

// 주의해야할점 숫자앞에 문자가 들어오면 NaN
// 숫자 중간에 문자가 들어온다면 문자뒤로 잘라버린다

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

console.log(Boolean(friends));
console.log(Boolean(money));
console.log(Boolean(' '));
console.log(Boolean(0));
console.log(Boolean('0'));

console.clear();
// 위에 나열한 것 이외의 것들

// const value = prompt('값을 입력해주세요');
const value = +prompt('값을 입력해주세요'); //재사용성이 좋음

// const value = +prompt('값을 입력해주세요');
// const value = prompt('값을 입력해주세요') * 1
// const value = prompt('값을 입력해주세요') / 1

// console.log(Number(value) + 50);
console.log(+value + 50);
