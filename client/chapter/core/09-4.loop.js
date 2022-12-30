/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
};

// let key = 'creator';
let key = 'valueOf';
// console.log(key in javaScript);


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// javaScript.hasOwnProperty(key) 객체의 메서드 활용
// hasOwnProperty함수를 js에서 보호하지 않아서 주의 표시해줌


// 객체 자신(own)의 속성(property)인지 확인(has)하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

console.log(Object.prototype.hasOwnProperty.call(javaScript, key)); // prototype에 접근하여 정확한 확인

for(let key in javaScript){
  
  if({}.hasOwnProperty.call(javaScript, key)){
    console.log(key);
  }

}

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?
// 객체에 양보하세요. 

let tens = [10, 100, 1000, 10000];

for(let value in tens){

  // if( ({}).hasOwnProperty.call(tens, value)){
  //   console.log(value);
  // }

  console.log(value);
}

