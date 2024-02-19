/* global gsap */

import {
  tiger,
  delayP,
  insertLast,
  changeColor,
  getNode as $,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
  clearContents,
} from './lib/index.js';

// GET 통신

const END_POINT = `http://localhost:3000/users`;
const userCardInner = $('.user-card-inner');

// [phase-1]
// 1. user 데이터를  타이거 함수를 사용해 fetch 해주세요
//  -tiger.get()
// 2. 함수 안에 넣기 (renderUserList)
// 3.html,css 붙여넣기
// 4. 유저 데이터를 화면에 렌더링
//    - 유저 데이터(array) 순환하여 모든 아이템 뽑아내기 (forEach)
//        - 템플릿 변수 만들기 (article)
//      - template literal을 사용하여 데이터 넣어넣기
//

//  create 함수와 render 함수로 함수분리

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    await delayP();

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });
    const response = await tiger.get(END_POINT);
    const userData = response.data;
    userData.forEach((user) => renderUserCard(userCardInner, user));
    changeColor('.user-card');
    gsap.from('.user-card', {
      x: 100,
      opacity: 0,
      stagger: 0.1,
    });
  } catch {
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

// DELETE 통신

function handelDelete(e) {
  const button = e.target.closest('button');
  const article = e.target.closest('article');
  if (!button) return;
  const id = article.dataset.index.slice(5);

  const deleteId = tiger.delete(`${END_POINT}/${id}`).then(() => {
    clearContents(userCardInner);
    renderUserList();
  });
  // delete 통신 이후
  // 기존 유저의 목록을 제거해주고
  // 유저목록을 fetch 이후 다시 렌더링
}

//   tiger.delete() 를 사용해서 해당 아이디번째를 넘겼을때 실제 딜맅통신이 이루어 지게 만두로라 / network탭에서 삭제 눌렀을때 delete통신이 나오도록

userCardInner.addEventListener('click', handelDelete);

const createButton = $('.create');
const cancelButton = $('.cancel');
const doneButton = $('.done');
const nameField = $('nameField');

const handleCreate = () => {
  gsap.to('.pop', { autoAlpha: 1 });
};

const handleCancel = (e) => {
  e.stopPropagation();
  gsap.to('.pop', { autoAlpha: 0 });
};

const handleDone = (e) => {
  e.preventDefault(); //html 태그의 기본 동작 차단

  const name = $('#nameField').value;
  const email = $('#emailField').value;
  const website = $('#siteField').value;

  //POST 통신

  // 1-name,email,website 담고있는 객체를 생성
  const obj = { name, email, website };
  // 2-Post 통신의 body에 객체 전달
  tiger.post(END_POINT, obj).then(() => {
    // 3-유저 목록 지우기
    clearContents(userCardInner);

    // 4-유저 목록 렌더링하기
    renderUserList();

    // 5-팝업 창 닫기
    gsap.to('.pop', { autoAlpha: 0 });
  });
};

cancelButton.addEventListener('click', handleCancel);
createButton.addEventListener('click', handleCreate);
doneButton.addEventListener('click', handleDone);
