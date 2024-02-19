import {
  setStorage,
  getStorage,
  deleteStorage,
  getNode,
  clearContents,
} from './lib/index.js';

// 1. Textfield의 값을 로컬 스토리지에 저장

const textField = getNode('#textField');
const clear = getNode('[data-name="clear"]');

const handleTextField = (e) => {
  const value = e.currentTarget.value;
  setStorage('text', value);
};

const handleClear = () => deleteStorage('text').then(clearContents(textField));

textField.addEventListener('input', handleTextField);
clear.addEventListener('click', handleClear);

// function init() {
//   console.log('init');
// }

// window.addEventListener('DOMContentLoaded', init);

// IIFE
(async () => {
  const data = await getStorage('text');
  textField.value = data;
})();

// 2.
