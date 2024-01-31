// 객체는 자바스크립트의 거의 모든 면에 녹아있는 개념이다 .
/**
 *  new Object = {}
    
*/

/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let dialog = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  ['max-width']: 800,
  height: '40vh',
  ['min-height']: 280,
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// authorization
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
  uuid: crypto.randomUUID(),
  name: 'tiger',
  email: 'babo@naver.com',
  inSingIn: false,
  permission: 'paid', // paid | free
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
//  getter
console.log(authUser.uuid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.inSingIn);

//  setter
console.log((authUser.permission = 'free'));

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

//  getter
console.log(authUser['name']);
console.log(authUser['UUID']);
console.log(authUser['email']);
console.log(authUser['permission']);

//  setter
console.log((authUser['inSignIn'] = true));

// 해당 객체에 키값의 여부를 확인하는 방법

console.log('name' in authUser);

Object.prototype.ninkName = 'tiger';
for (let key in authUser) {
  if (Object.prototype.hasOwnProperty.call(authUser, key)) {
    console.log(key);
  }
}

console.clear();

//  객체의 key만을 모아놓은 배열

const keyList = Object.keys(authUser);
console.log(keyList);

function keys(obj) {
  let result = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push(key);
    }
  }
  return result;
}
keys(authUser); // ['uuid','name','email']

//  객제의 value 만을 모아놓은 배열
const valueList = Object.values(authUser);
console.log(valueList);

//객체의 key와 value의 쌍을 배열로
const keyValue = Object.entries(authUser);
console.log(keyValue);

// 프로퍼티 제거(remove) or 삭제(delete)

removeProperty(authUser, 'uuid'); // authUser.uuid = null;

function isObject(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'object'
  );
}

// 프로퍼티 제거(remove 비워두기) or 삭제(delete 없애버리기)

function removeProperty(obj, key) {
  if (!isObject(obj)) return;

  obj[key] = null;
}

// 상황에 따라서 return문을 명시하거나 하지 않을 수 있다.

deleteProperty(authUser, 'uuid'); // authUser.uuid = undefined;

function deleteProperty(obj, key) {
  if (!isObject(obj)) return;
  delete obj[key];
}

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name, age, phone) {
  return {
    name,
    age,
    [calculateProperty]: phone,
  };
}

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거 or 삭제
//  authUser.uuid =null;  // delete authUser

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

/* short hand property */
const student = {
  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/************************************/

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

/**
 *  다 부셔버린다음에 다시 할당 하겠따.
 순서는 절대 바꿀 수 없다. 고정된 순서를 가지고있다.
 변수 이름은 바꿀 수 있다.
*/
const [a1, a2, a3, a4] = [10, 100, 1000, 10000];

for (let [key, value] of Object.entries(authUser)) {
  console.log(key, value);
}

// [a1, ...rest] =
// [a1,, ...rest] = _로 표기해도 된다.œ

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
console.clear();

//**순서가 상관없다.
/**
 * 변수 이름을 바꿀 수 있다. 단 객체 키의 맞춰서 ':'
 * 기본값을 지정 할 수 있다. 마치 매개변수의 기본값처럼
 *  */

const salaries = {
  박지성: 800,
  김보미: 150,
  이경민: 250,
  전희선: 50,
};

const {
  박지성: 김,
  김보미: 전,
  이경민: 박,
  전희선: 이,
  도가현: 도 = 20,
} = salaries;

console.log(도);

//////////////////////////////////////////

// *1) 함수의 인수가 (arguments) 엄청 많아 질 경우 경체를 받아 처리할 수 있다.

createUserList({
  name: 'tiger',
  age: 35,
  address: '서울시 중랑구 면목동',
  phone: '010-2222-2222',
});

//2) 함수 안에서 객체를 구조분해 할 수 있따.    //defalut parameter

function createUserList(options) {
  const { name: n, age, address, phone, nickName = 'tiger' } = options;

  //  3) 동일한 변수가 사용될 경우 alias 를 지정할 수 있따.
  const name = '선범';
  //  4) shorthand property
  return {
    name: n,
    age,
    address,
    phone,
    nickName,
  };
}

// 5) 어차피 들어오는게 객체라면 바로 구조 분해 할당 할 수 있지 않을까
function createUserList2({ name: n, age, address, phone, nickName = 'tiger' }) {
  const name = '선범';

  return {
    name: n,
    age,
    address,
    phone,
    nickName,
  };
}
