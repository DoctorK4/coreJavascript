export function xhrData ({
  url = '',
  method = 'GET', 
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
  'Content=Type':'application/json',
  'Access-Control-Allow-Origin':'*',
  }
}= {}){
  
  // const { url, method, body} = option;
  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method, url);
  
  // headers를 배열로 반환해주고, setRequestHeader 내장 함수 사용 
  // Object.entries(headers).forEach(([key, value])=>{
  //   xhr.setRequestHeader(key, value);
  // })

  

  xhr.addEventListener('readystatechange', ()=>{
    const { status, readyState, response } = xhr; // 객체 구조 분해 할당
    if(status >= 200 && status < 400){
      if(readyState === 4) {
        console.log('통신 성공');
        onSuccess(JSON.parse(response));
      } 
    } else {
        // console.error('통신 실패');
        onFail('통신 실패');
      }
  })

  // 서버에 요청
  xhr.send(JSON.stringify(body));

}


// xhrData({
//   url:'https://jsonplaceholder.typicode.com/users',
//   onSuccess: (result) => {
//     console.log(result);
//   },
//   onFail:(err)=>{
//     console.error(err);
//   }
// })

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail
  })
}


xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method:'POST',
    body,
    url,
    onSuccess,
    onFail
  })
}
xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method:'PUT',
    body,
    url,
    onSuccess,
    onFail
  })
}
xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}



// xhrData.delete(
//   'https://jsonplaceholder.typicode.com/users/1',
//   (result)=>{
//     console.log(result);
//   },
//   (err)=>{
//     console.log(err);
//   }
// )


/* readyState
  0: uninitalized : 초기화
  1: loading : 로딩
  2: loaded : 로딩이 완료된 
  3: interactive : 인터랙티브
  4: complete : 완료 
*/



