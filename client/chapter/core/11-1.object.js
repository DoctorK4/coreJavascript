/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
// let cssCode = /* css */`
//   .dialog {
//     position: fixed;
//     z-index: 10000;
//     top: 50%;
//     left: 50%;
//     width: 60vw;
//     max-width: 800px;
//     height: 40vh;
//     min-height: 280px;
//     transform: translate(-50%, -50%);
//   }
// `;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
// let cssMap = { 
//     position: "fixed",
//     z-index: '10000',
//     top: "50%",
//     left: "50%",
//     width: "60vw",
//     max-width: 800,
//     height: "40vh",
//     min-height: 280,
//     transform: "translate(-50%, -50%)",
// };


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
  uid:'user-id-asdf4245jk',
  name: 'drk',
  email: 'adsfkjlk@gmail.com',
  isSignIn: true,
  permission:'paid' // free | paid
};


// console.log( authUser.uid );
// console.log( authUser.name );
// console.log( authUser.email );
// console.log( authUser.isSignIn);
// console.log( authUser.permission );

// console.log(authUser["uid"]);
// console.log(authUser["name"]);
// console.log(authUser["email"]);
// console.log(authUser["isSignIn"]);
// console.log(authUser["permission"]);


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.


// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

function createUser(computedProp = 'phone'){ // default 값 설정 

  return {
    name:'unknown',
    email:'unknown@company.io',
    [computedProp]:'010-7168-3832'
  }
}

const user = createUser();

// 프로퍼티 포함 여부 확인

for(let key in authUser){
  if(Object.prototype.hasOwnProperty.call(authUser, key)){ // Object.prototype.hasOwnPropery를 call 함수로 빌려온다. 
  console.log(key);
  }
}


// 프로퍼티 나열

console.log(authUser);
let keyArray = Object.keys(authUser); // Object.keys() 메소드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다.
let valueArray = Object.values(authUser); // 

// console.log(keyArray);
// console.log(valueArray);


// 객체의 key값을 보여주는 함수 (화살표함수)
const getProp = object => Object.keys(object);  
// console.log(getProp(authUser));

// 객체를 배열로 바꿔주는 함수 
function getPropertiesList(obj){
  let result =[];
  for(let key in obj){
    result.push(key);
  }

  return result;
}

let result = getPropertiesList(authUser);


// 프로퍼티 제거 or 삭제 (제거 = 값 비움) (삭제 = 값 지움. 걍 없앰)
delete authUser['uid'] // 삭제

function removeProperty(obj, key){
  obj[key] = null; 
}

function deleteProperty(obj, key){
  delete obj[key];
}

//1.함수 이름 정하기
//2. 인수와 인자 정하기
//3. 확인하기
//4. 리턴값 




// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


const student = {
  name,
  email,
  authorization,
  isLogin
}

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// 객체의 키를 배열로 바꾸고 그 배열의 갯수가 0 ? true : false
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

let salaries = {
  John:300,
  Ann: 200,
  Pete: 430
}

let total = 0;

// for (let keyValue of Object.entries(salaries) ){
//   let key = keyValue[0];
//   let value = keyValue[1];

//   total += value;
//   console.log(value);
// }



/* -------------------------------------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments                                     */
/* -------------------------------------------------------------------------- */

let color = ['#ff0000','#2b00ff','#00ff2f'];

// const COLOR_RED = color[0]
// const COLOR_BLUE = color[1]
// const COLOR_GREEN = color[2]


const [,,COLOR_GREEN]  = color

console.log(COLOR_GREEN);

// 발췌 

// console.log(green);




/* -------------------------------------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments                                     */
/* -------------------------------------------------------------------------- */


/* 
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430 
}
*/

const { John, Ann, Pete } = salaries;

const element = {
  width: 500,
  height: 600
}

function getElementWidth(option,node){

  const {width,height} = element;
  
  width
}

 

 console.log(Ann);

