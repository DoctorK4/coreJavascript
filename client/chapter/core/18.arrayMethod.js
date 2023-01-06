/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */



// Array.isArray
const arr = [10, 100, 1000, 10000]
console.log(Array.isArray(arr)); // 

function isArray(data){
  return Object.prototype.toString.call(data).slice(8, -1).toLowercase()==='array'
}

function isNull(data){
  return Object.prototype.toString.call(data).slice(8, -1).toLowercase()==='null'
}

/* 요소 순환 -------------------------------------------------------------- */

// forEach
// $.each((index, item) => {}) jQuery Library

arr.forEach(function(item, index){
  this[index] = item
}, user)
//forEach가 할 수 있는 일은 for도 할 수 있다. 



/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
let revArr = arr.reverse();

// splice
arr.splice(1, 0, 23, 5) // [추가] 시작인덱스, 제거하는요소, 추가할 내용
arr.splice(1, 3, 23, 5) // [추가] 시작인덱스, 제거하는요소(몇 개), 추가할 내용

// sort
arr.sort((a, b)=>{
  return b - a // compare function 
})


/* 새로운 배열 반환 --------------------------------------------------------- */

// concat 합치기 
// slice 도려내기 
// map 
let mapArray = arr.map((item)=>{
  return item * 2
}) // 배열을 받아서, 일처리를 하고, 새로운 배열을 만들어준다. 


let todo = ['eat', 'styling', 'coding']
todo.map((todoList)=>{
  return `<li>${todoList}</li>`
})

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// lastIndexOf
// includes



/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]
// find
const find = users.find((item, index)=>{
  return item.id === 3
})

// findIndex
users.findIndex((item)=>{
  return item.id === 3
})



/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
let filtArr = arr.filter((number)=>{
  return number > 100 // 100보다 큰 값을 찾아서 새로운 배열로 만들어주기 
})


/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];

// reduce
let totalage = friends.reduce((acc, cur)=>{
  return acc + cur.age
},0)

let template2 = todo.reduce((acc,cur,index)=>{
  return /* html */acc + `<li>${index + 1} : ${cur}</li>`
})
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = '성찬 보경 일범 세민 형진 주현'

// split : 문자 -> 배열
let nameArray = str.split('')


// join
let namejoin = nameArray.join('/');
