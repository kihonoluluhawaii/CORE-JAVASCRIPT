

import { getNode } from '../dom/getNode.js'
import { isNumber } from './typeOf.js'
import { isObject } from './typeOf.js'

const first = getNode('.first')
const second = getNode('.second')

function delay(callback,timeout = 1000){
    setTimeout(callback,timeout)
}

// delay(()=>{
//     first.style.top= '-100px'
//     second.style.top = '100px'
//     delay(()=>{
//         first.style.transform = 'rotate(1080deg)'
//         second.style.transform = 'rotate(-1080deg)'
//         delay(()=>{
//             first.style.top = '0'
//             second.style.top = '0'
//         })
//     })
// })


// first.style.top = "-100px"

// first.style.top = '0'



// mixin 

// 기존 객체  +  전달 받은 객체 

const defaultOptions = {
  shouldReject:false,
  timeout:1000,
  successMessage:'성공입니다.',
  errorMessage:'알 수 없는 오류가 발생했습니다.'
}

function delayP(options){

  let config = {...defaultOptions}
  
  if(isNumber(options)){
    config.timeout = options;
  }
  
  if(isObject(options)){
    config = {...defaultOptions,...options}
  }
  
  let {shouldReject,successMessage,errorMessage,timeout} = config;
  
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(!shouldReject){
        resolve(successMessage);
      }
      else{
        reject(errorMessage);
      }
    }, timeout);
  })
}

delayP(2000)
.then((res)=>{
    console.log(res)
})