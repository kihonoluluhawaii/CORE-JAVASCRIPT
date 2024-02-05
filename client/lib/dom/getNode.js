function getNode(node, context = document) {
  if (typeof node !== 'string') {
    throw new Error('getNode의 함수의 인수는 문자타입 이어야 합니다');
  }
  if (context.nodeType !== document.DOCUMENT_NODE) {
    context = document.querySelector(context);
  }
  return context.querySelector(node);
}

function getNodes(node, context = document) {
  if (typeof node !== 'string') {
    throw new Error('getNodes의 함수의 인수는 문자타입 이어야 합니다');
  }
  if (context.nodeType !== document.DOCUMENT_NODE) {
    context = document.querySelector(context);
  }
  return context.querySelectorAll(node);
}
