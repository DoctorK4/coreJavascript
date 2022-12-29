/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
let year = 2022;

console.log(typeof String(year));

// undefined, null
console.log(typeof String(undefined));
console.log(typeof String(null));

// boolean
let isKind = true;
console.log(typeof String(isKind));

let kind = true;
console.log(typeof ('is' + kind));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed
console.log(Number(undefined));

// null
let money = null;
console.log(Number(money));

// boolean
let cute = true;
console.log(cute * 1); 
console.log(cute / 1); 
// false라면 0이 된다. 
console.log(+cute);

// string 숫자형 문자
let num = '  123  ';
console.log(num * 1);

// numeric string
let width = '320px';

console.log(parseInt(width, 10));
// 기본 진수가 10진수이지만, 항상 명시할 것

/* 데이터 → 불리언 ---------------------------------------------------------- */



// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 