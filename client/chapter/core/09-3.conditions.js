/* ---------------- */
/* Switch           */
/* ---------------- */

// const value = 10;

// switch (value) {
//   case 10: // if(value === 10)
//    return '10니당');
//

//   case 20: // if(value === 20)
//    return '20니당');
//

//   default: //else
//    return '난숨');
// }

// const MORNING = '아침',
//   LUNCH = '점심',
//   DINNER = '저녁',
//   NIGHT = '밤',
//   LATE_NIGHT = '심야',
//   DAWN = '새벽';

// let thisTime = DAWN;

// /* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// switch ('thisTime') {
//   case MORNING:
//    return '뉴스기사 글을 읽는다');
//
//   case LUNCH:
//    return '자주가는 식당에 가서 식사를 한다');
//
//   case DINNER:
//    return '동네한바퀴를 조깅한다.');
//
//   case NIGHT:
//    return '친구게 전화를 걸어 수다를 떤다.');
//
//   case LATE_NIGHT:
//   case DAWN:
//    return '한밤중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
//    return '에러 해결해라.');
//
// }

// /* switch문 → if문 변환 --------------------------------------------------- */
// if (thisTime === MORNING) {
//  return '뉴스읽어');
// } else if (thisTime === LUNCH) {
//  return '점심먹어');
// } else if (thisTime === DINNER) {
//  return '조깅');
// } else if (thisTime === NIGHT) {
//  return '수다떨어');
// } else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
//  return '자라);
//  return '에러해결해라');
// }

/* switch vs. if -------------------------------------------------------- */

//prompt를 통해 숫자를 입력 받는다 (0 ~ 6까지)
//swith로

// 0: 일
// 1: 월
// 2: 화
// 3: 수
// 4: 목
// 5: 금
// 6: 토
// const num = +prompt('0~6사이의 숫자를 입력해주세요');

// 함수를 쓰는 이유 : 코드의 재사용성을 높이기 위해서 => 매개변수의 활용
// 관심사의 분리 separation of concerns
// 함수는 하나의 기능만을 수행하는게 제일 좋다.

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

function getDay(number) {
  switch (number) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}

// const day = getDay(getRandom(7)); // argument(인수)

// 요일을 사용하여 월~금 :'평일입니다.' , 일~토:'주말입니다.'

function weekend() {
  const today = getDay(getRandom(7));

  //   if (today.includes('토') || today.includes('일')) {
  //     return '주말입니다.';
  //   } else {
  //     return `오늘은 평일입네다`;
  //   }
  return today.includes('토') || today.includes('일')
    ? '주말입니다'
    : '평일입니다';
}

const result = weekend();

console.log(result);
