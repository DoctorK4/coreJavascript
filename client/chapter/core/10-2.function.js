/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);


// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(){
  
  // arguments : 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 타입으로 불리는 변수
  // arguments 객체를 사용해 함수의 매개변수없이 아이템의 총합을 구할 수 있다. 
  // 유사배열은 배열이 아니다. 고로 배열의 능력을 사용하려면 진짜 배열로 만들어야 한다. 
  // 배열의 능력 : forEach, reduce

  let total = 0;
  // for(let i = 0; i < arguments.length; i++){
  //   total += arguments[i];
  // }

  // let arr = Array.from(arguments) // static method
  let arr = Array.prototype.slice.call(arguments)
  
  arr.forEach(function(item, index){
    console.log(index);
  });

  // return arr.reduce(function(acc, item)){
  //   return acc + item
  // }
  
  console.log(arr);

  return total
//   return moneyA + moneyB + moneyC + moneyD;
// };



calculateTotal(100, 500, 300, 150)

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello (){};


// 콜백 함수 (표현)식
let callbackFunctionExpression = function (url, resolve, reject){

  if(typeof url == 'string'){
    resolve()
  } else{
    reject()
  }
};

callbackFunctionExpression(
  'https://www.naver.com',
  function(){},
  function(){}
)


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식 
// Immediately Invoked Function Expression
// 오늘날엔 잘 안씀 
let IIFE;

(function(){

  console.log('hi')
})() // 생성과 동시에 실행

// 전역 보호 용도로 주로 실행한다. 
