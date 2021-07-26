document.addEventListener('DOMContentLoaded', () => {
let list =  document.getElementById('create-task-form');

 list.addEventListener('submit', (e) => {
    //console.log(e);
    e.preventDefault();
    listCreator(e.target.newTaskDescription.value);
    list.reset();
  })



  })





function listCreator(task){
  let li = document.createElement('li');
  
  let btn = document.createElement('button');
  btn.addEventListener('click', taskDeleter);
  btn.textContent = 'x';
  
  let edit = document.createElement('button');
  edit.textContent = 'edit'
  edit.addEventListener('click', makeEditable)
  edit.setAttribute("class","edit")
  
  li.textContent = `${task} | ` + ` DUE: ${document.getElementById("date").value} `;
  li.style.color = `${document.getElementById("priority").value}`;
  li.appendChild(edit)
  li.appendChild(btn);
  document.getElementById('tasks').appendChild(li);
 
}

function makeEditable(e){
  e.target.setAttribute("class","clicked")
  e.target.parentNode.setAttribute("contentEditable","true");
  e.target.parentNode.setAttribute("background-color", "rgb(160, 160, 160)");
}


function taskDeleter(e){
  e.target.parentNode.remove();
}

