
/* global getNode, insertLast, clearContents, getNodes */


// name export (이름내보내기)
import {getNode, getNodes, insertLast, clearContents, refError} from "./lib/index.js";
// import {refError} from "./lib/error/index.js";

// default export (기본 내보내기)
// import clearContents from "./lib/dom/clear.js"




// 1. input value 값 가져오기
//      -input에게 input 이벤트 걸기
//      -input.value 사용하기

//calculator
function phase1(){
    const first = getNode('#firstNumber')
const second = document.querySelector('#secondNumber');
const result = getNode('.result')
const clear = getNode('#clear')



function handleInput(){
    const firstValue = Number(first.value)
    const secondValue = Number(second.value)

    const total = firstValue + secondValue;
    result.textContent = '';
    
    clearContents(result)
    insertLast(result,total)
}

function handleClear(e){
    e.preventDefault();
    clearContents(first)
    clearContents(second)
    result.textContent = '-'
}

first.addEventListener('input',handleInput)
second.addEventListener('input',handleInput)
clear.addEventListener('click',handleClear)



}


// 이벤트 위임 방식

const calculator = getNode('.calculator');
const result = getNode('.result');
const clear =getNode('#clear')
const numberInputs = Array.from(getNodes('input:not(#clear)'))

function handleInput(){
    const total = numberInputs.reduce((acc,cur)=>
        acc + Number(cur.value)
    ,0)
    clearContents(result);
    insertLast(result,total)
}

function handleClear(e){
    e.preventDefault();

    numberInputs.forEach(clearContents)
    
        result.textContent= '-'
    
}
calculator.addEventListener('input',handleInput)

clear.addEventListener('click',handleClear)


