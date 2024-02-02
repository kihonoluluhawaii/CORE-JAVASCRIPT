/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';
console.log(message);
// length 프로퍼티
let stringTotalLength = message.length;

// 특정 인덱스의 글자 추출
let extractCharacter = message[3];

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;
// message[3] = 'a';

// 부분 문자열 추출
let slice = message.slice(4, -1); // 0번째문자를 제외한 나머지 문자를 반환
// is more
// console.log(slice);
let subString = message.substring(2, 5);
console.log(subString);

// 문자열 포함 여부 확인
let indexOf = message.indexOf('hi'); // -1  이면 'hi'가 없고 양수가 뜨면 포함하고있음
console.log(indexOf);
function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edge') > -1:
      browserName = 'MS Edge';
      break;
    case agent.indexOf('chrome') > -1:
      browserName = 'chrome';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Apple Safari';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'FireFox';
      break;
    case agent.indexOf('trident') > -1:
      browserName = 'IE';
      break;
  }

  return browserName;
}
console.log('--------');
let lastIndexOf;
let includes = message.includes('Less');
console.log(includes);
let startsWith = message.startsWith('Less');
console.log(startsWith);
let endsWith = message.endsWith('more');
console.log(endsWith);

let str = '         a      b  c     d   ';
// 공백 잘라내기
let trimLeft = str.trimLeft();
let trimRight;
let trim = str.trim();
let reg = str.replace(/\s*/g, ''); // 정규표현식  replace('얘로찾아서','얘로대체해라')

function normalText(string) {
  return string.replace(/\s*/g, '');
}

// 텍스트 반복
let repeat = message.repeat(3);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
let toUpperCase = message.toUpperCase();

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
