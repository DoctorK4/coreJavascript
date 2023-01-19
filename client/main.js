import { getNode, loadStorage, saveStorage, deleteStorage } from "./lib/index.js";


const textField = getNode('#textField');
const deleteButton = getNode('input[value="삭제"]');

loadStorage('area').then((res)=>{
  textField.value = res;
})

function inputHandler(){
  saveStorage('area',textField.value);
}

textField.addEventListener('input',inputHandler)

// 삭제 코드 

function deleteHandler() {
  deleteStorage('area');
  
}

deleteButton.addEventListener('click', deleteHandler)