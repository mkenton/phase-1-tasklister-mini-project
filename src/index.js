document.addEventListener('DOMContentLoaded', () => {
let list =  document.getElementById('create-task-form')

 list.addEventListener('submit', (e) => {
    e.preventDefault()
    listCreator(e.target.newTaskDescription.value)
    list.reset()
  })


let drpdown = document.getElementById("priority")
  console.log(drpdown);
  drpdown.addEventListener('change', (e) => {
    e.preventDefault()
    console.log(e)
  })

})



function listCreator(task){
  let li = document.createElement('li')
  let btn = document.createElement('button')

  btn.addEventListener('click', taskDeleter)
  btn.textContent = 'x'
  li.textContent = `${task} `
  li.style.color = `${document.getElementById("priority").value}`
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
