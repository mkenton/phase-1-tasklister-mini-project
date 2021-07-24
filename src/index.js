document.addEventListener('DOMContentLoaded', () => {
 let list =  document.getElementById('create-task-form')
 list.addEventListener('submit', (e) => {
    e.preventDefault()
    listCreator(e.target.newTaskDescription.value)
    list.reset()
  })
})

function listCreator(task){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  let slct = document.getElementById("priority")
  // li.setAttribute("id", )
  // slct.addEventListener('change',priorityColor())
  console.log(slct);
  btn.addEventListener('click', taskDeleter)
  btn.textContent = '[delete]'
  li.textContent = `${task} `
  li.style.color = "red"
  // priorityColor()
  li.appendChild(btn)
  document.getElementById('tasks').appendChild(li)
 
}


function taskDeleter(e){
  e.target.parentNode.remove()
}

// function priorityColor(el){
// let li = document.getElementById("asdf");
// console.log(li);
// }
// //li.style.color = textColor
// // }

// // }
// // // 
