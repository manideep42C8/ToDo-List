let toDoList=JSON.parse(localStorage.getItem('toDoLis')) || [];
renderToDoList();
function addToDo(){
  let toDo=document.querySelector('.js-todo-input');
  let name=toDo.value;
  let time=document.querySelector('.js-time');
  let date=time.value;

  if(name==='' || date===''){
    alert('enter the valid details');
    return;
  }

  toDoList.push({
    name,
    date
  });
  toDo.value='';
  console.log(toDoList);
  localStorage.setItem('toDoLis',JSON.stringify(toDoList));

  renderToDoList();
}

function renderToDoList(){
  let display='';
  for(let i=0;i<toDoList.length;i++){
    let temp=toDoList[i];
    let {name, date}=temp;
    display +=`
      <div class="due-todo">${name}</div>
      <div class="due-date">${date}</div>
      <button onclick="
        toDoList.splice(${i},1)
        localStorage.setItem('toDoLis',JSON.stringify(toDoList));
        renderToDoList();
      " class="delete-button">Delete</button>`;

  }
  document.querySelector('.js-todo-render').innerHTML=display;
  
}
