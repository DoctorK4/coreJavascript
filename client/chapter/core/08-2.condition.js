/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = 20;

if (age >= 14 && age <= 90){
  console.log("");
}



let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b ;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value; // true


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false}; // 마지막 값 반환 

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy ; false || '' || [2,3].length || {thisIsTruthy:true}; // 


// 로그인 구현하기 
let userName = prompt("Admin을 입력해주세요",'');
let pw = prompt("Password?",'') ;

if (userName.toUpperCase == 'Admin'.toUpperCase) {
  if (pw == 'TheMaster') {
    alert("환영합니다!");
  } else if (pw == null) {
    alert("취소되었습니다.");
  } else {
    alert("인증에 실패하였습니다.");
  }
} else if (userName == null || userName ==''){
  alert("취소되었습니다. ");
  } else {
    alert("인증되지 않은 사용자입니다. ");
  }
