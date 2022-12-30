/* ---------------------------------------------------------------------- */
/* For Loop                                                               */
/* ---------------------------------------------------------------------- */

// for(let j = 0; j < 10; j++){
//   console.log(j);
// }

// let j = 0;

// for(; j < 10;){
//   j++
// }

// console.log(j);


// 2 ~ 10까지의 짝수 출력하기

for (let i = 2; i <= 10; i++){
  if (i % 2 == 1) continue;
  console.log(i); 
}



const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');
// .split(' ') 괄호 안을 모두 제거하고 배열로 만들어줌 

// let i = 0;
// let l = frontEndDev.length;

// while(i < l) {
//   console.log(frontEndDev[i]);
//   i += 1;
// }

for(let i = 0; i <frontEndDev.length; i += 1){
  let result = frontEndDev[i];
  if (result.includes('SVG') || result.includes('jQuery')) continue;
  console.log(frontEndDev[i]);

  // if (result.includes('jQuery')) break;
  // jQuery가 등장하면 반복문 종료
}


// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.


//   - 무한 루프 (브레이크)
//   - for 문 (역순환)