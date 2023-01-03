/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// 함수 선언
function getRandomValue(){
  return Math.random() > 0.5 ? 1 : 0;
}

// 전역변수 활용 
let x = 1;

function calcPrice(
  // 매개 변수
  // 매개 변수 기본 값
  a, 
  b = x, 
  // 함수 호출
  c = getRandomValue(), 
  d = getRandomValue()){
    
    if (!a || !b){
      throw new Error('calcPrice 함수의 첫 번째와 두 번째 인수는 필수 입력값 입니다. ');
    }
    
    // 함수 값 반환
    return a + b + c + d ;

}

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

let result = calcPrice(100, 5000, 200, 350);
console.log(result);






// 매개 변수 vs. 전달 인자

// 외부(전역 포함), 지역 변수


// 좋은 함수 작성 여건
// 1. 하나의 기능만을 수행해야 한다. (관심사의 분리)
// 2. 읽었을 때 바로 기능을 알 수 있게끔, (이름과 매개변수의 이름을 직관적이게 적어야한다.)
// 3. 재사용성이 좋아야 한다. 


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string; 타입스크립트 문법
// function rem(pxValue, base = 16){
//   if (typeof pxValue == string){
//     pxValue = parseFloat(pxValue);
//   }
//   let rem = pxValue / +base;
//   return rem + 'rem';
// }

function rem(pxValue, base){

  if (typeof pxValue == 'string'){
    pxValue = parseInt(pxValue, 10)
  }

  return `${pxValue / base}rem`
}



/* 
  1. function name
  2. validation
  3. return value
  4. parameter, argument
  5. test (TDD)
*/ 


console.assert(rem(20) == '1.25rem'); // test-driven development 
console.assert(rem('30px') == '1.875rem');
console.assert(rem('56px', 10) == '5.6rem');

// css(node: string, prop: string, value: number|strung) : string;
let css;





// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.