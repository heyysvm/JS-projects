let todos = []

function renderTodos() {
  let list = document.getElementById("todoList")
  list.innerHTML = ""

  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li")

    li.innerText = todos[i]

    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"


    deleteBtn.onclick = function(index) {
      return function () {
        deleteTodo(index)
      }
    }(i)

    li.appendChild(deleteBtn)
    list.appendChild(li)
  }
}

function addTodo() {
  let input = document.getElementById("todoInput")
  let text = input.value

  if (text === "") {
    return
  }

  todos.push(text)   
  input.value = ""  
  renderTodos()     
}

function deleteTodo(index) {
  todos.splice(index, 1) 
  renderTodos()
}
function printTodo() {
  window.print()
}
