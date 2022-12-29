/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

let receivedNum = prompt('숫자를 입력하세요', 0) ;

if (receivedNum > 0) {
  console.log(1);
} else if (receivedNum < 0) {
    console.log(-1);
  } else if (receivedNum == 0) {
    console.log(0);
  }

  // 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'yes';
if (didWatchMovie == 'yes') {
  console.log("재밌었지?");
} else {
  console.log("아직 안봤어?");
}



// 영화 볼거니?
let goingToWatchMovie = 'no';
if (goingToWatchMovie.includes('yes')) { //includes 활용
  console.log("잘 생각했어!");
} else {
  console.log("꼭 봐!");
}

let movieMessage = didWatchMovie.includes('yes') ? '그거 재밌더라' :
(goingToWatchMovie == 'yes') ? '너무 설렌다' : '난 별루...'

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식