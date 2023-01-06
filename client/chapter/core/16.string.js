/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';




// length 프로퍼티
let stringTotalLength = message.length;
console.log(stringTotalLength);


// 특정 인덱스의 글자 추출
let extractCharacter = message[2];
console.log(extractCharacter);


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
let slice = message.slice(8, -1);
console.log('slice : '+slice);



let subString = message.substring(-1, 5);
console.log(subString);


// let subStr;


// 문자열 포함 여부 확인, 없거나 못찾으면 -1을 반환한다.  
let indexOf = message.indexOf('p');
console.log(indexOf);

// 뒤에서부터 찾는다. 
let lastIndexOf = message.lastIndexOf('s');
console.log();


let includes = message.includes('less');
console.log('includes :'+includes);

let startsWith = message.startsWith();
console.log('startsWith :'+startsWith);

let endsWith = message.endsWith('.');
console.log('endsWith :'+endsWith);


// 공백 잘라내기
let trimLeft;

let trimRight;

let trim = message.trim(/\s*/g);
console.log('trim :'+trim);


// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : '+repeat);


// 대소문자 변환
let toLowerCase;
let toUpperCase;


// 텍스트 이름 변환 유틸리티 함수
let toCamelCase = toCamelCase('less-is-more'); // 정규식 활용 
let toPascalCase = toPascalCase('less-is-more');

// indexOf 활용
function checkBrowser(browserName) {
  let browser;
  let ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("chrome") > -1) browser = "chrome";
  else if (ua.indexOf("edge") > -1) browser = "edge";
  else if (ua.indexOf("whale") > -1) browser = "whale";
  else if (ua.indexOf("safari") > -1) browser = "safari";
  else if (ua.indexOf("firefox") > -1) browser = "firefox";

  return browser === browserName;
}