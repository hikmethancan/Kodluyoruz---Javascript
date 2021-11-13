let listDOM = document.getElementById(`list`)
let taskHolderDOM = document.getElementById(`task`)
let addDOM = document.getElementById(`liveToastBtn`)


// check control to list and delete list control
var list = document.querySelector('ul')
list.addEventListener('click', function (check) {
  // check todo list
    if (check.target.tagName === 'LI') {
        check.target.classList.toggle('checked')
    }
    // delete elements
    if (check.target.className === "close") {
      check.target.parentElement.remove()
      let value = check.target.parentElement.firstElementChild.innerHTML;
      dltStorage(value);

    }
})
// KayÄ±t sil
function dltStorage(prm) {
  let toDo = getStorage()
  toDo.forEach((element, id) => {
      console.log(element, id);
      if (element === prm) {
          toDo.splice(id, 1);
      }
  })
  localStorage.setItem("toDo", JSON.stringify(toDo))
}

function getStorage() {
    let todo = JSON.parse(localStorage.getItem("toDo"))
    return todo
  }

// main function to create new element
function newElement() {
    if (taskHolderDOM.value) {
      addLElements()
      loadStorage(taskHolderDOM.value)
      taskHolderDOM.value = ""
    }
    else{
      $(".error").toast("show");
    }
    
}

// add input values
function addLElements() {
  
  let createListDOM = document.createElement(`li`)
  createListDOM.innerHTML = taskHolderDOM.value

  listDOM.append(createListDOM) 
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  createListDOM.appendChild(span);
  $(".success").toast("show")

}


// input elements storage
function loadStorage(prm) {
  let str = JSON.parse(localStorage.getItem("toDo"))
  let toDoInfo = []
  if (str == null) {
    toDoInfo = []
  }
  else{
    toDoInfo = getStorage()
  }
  toDoInfo.push(prm)
  localStorage.setItem("toDo", JSON.stringify(toDoInfo))
}

// if we have values in localStorage  show us when we reload the page
function loadedPage() {
  let toDo = getStorage();

  if (toDo != null) {
      let html
      for (let i = 0; i < toDo.length; i++) {
          html = `<li>
          <span class="value">${toDo[i]}</span>
          <span class="close">\u00D7</span>
          </li>`
          listDOM.innerHTML += html
      }
  }
}
loadedPage()