/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// 동물 -> 호랑이 -> 어떤 호랭이
// getter 와 setter

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  get eat() {
    return this.stomach;
  },
  set eat(food) {
    this.prey = food;
    this.stomach.push(food);
  },
};

const tiger = {
  pattern: '호랑이무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근합니다.`;
  },
  __proto__: animal,
};

const 백두산호랑이 = {
  color: 'white',
  name: '백랑이',
  __proto__: tiger,
};

const 용마산호랑이 = {
  color: 'greenyellow',
  name: '선돌이',
  __proto__: tiger,
};

// tiger.__proto__ = animal;

// 생성자 함수

function Animal() {
  this.legs = 4;
  this.tali = true;
  this.stomach = [];

  this.getEat = function () {
    return this.stomach;
  };

  this.setEat = function (food) {
    this.prey = food;
    this.stomach.push(food);
  };
}

const a = new Animal();

function Tiger(name) {
  Animal.call(this);
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 천천히 접근한다.`;
  };
}

Tiger.bark = function () {
  return '어흥';
};

// Tiger.prototype = a;

const 한라산호랑이 = new Tiger('한돌이');

// call, apply, bind  <- 함수의 메서드

//call은 정확하게는 this를 전달해줌.Animal
// this 를 대신 전달해줌.
function sum(a, b) {
  console.log(this);
  console.log(a + b);
}
//대신 실행해줌    함수를 바로실행
// sum.call('a');       // sum.call('a',10,20)    매개변수를 뒤에 낱개로 전달함.

// sum.apply('a', [10, 20]);   // 매개변수를 배열로 전달함.

//  this 를 함수에 묶고 새로운 함수로 반환을 시켜줌
//  const aa = sum.bind('a') 처럼 일단 함수를 묶어만 놓는다. ('a',10,20)
sum.bind('a');

const user = {
  name: 'tiger',
};

//user.hasOwnProperty('name')
// Object.prototype.hasOwnProperty.call(user,'name')
