function main(){
      var themeswitch = document.getElementById("timelogo")


      themeswitch.addEventListener("click", ()=>{
    var body = document.querySelector("body")
    body.classList.toggle("lightmode")
    themeswitch.classList.toggle("moon")
      })

    //itemsleft.innerHTML = task.length;
}
function addtask(){
    
  var todolist = document.getElementById("todolist")
  var itemsleft = document.getElementById("dynamicnumber");
  var taskinput = document.todoform.enter;
  var task = document.getElementsByClassName("todo")
  var clearcomp = document.getElementById("clearcompleted");
  var completetask = document.getElementsByClassName("completedtask")
  var all = document.getElementById("all")
  var active = document.getElementById("active")
  var completed = document.getElementById("completed")
  var themeswitch = document.getElementById("timelogo")
  

  var tasks = document.createElement("div")
  tasks.classList.add("todo")
  var tickbox = document.createElement("div")
  tickbox.classList.add("tickbox")
  var tickimg = document.createElement("div")
  tickimg.classList.add("tickimg")
  tickbox.append(tickimg)
  var taskname = document.createElement("div")
  taskname.classList.add("taskname")
  var cancel = document.createElement("div")
  cancel.classList.add("cancel")

  tasks.append(tickbox)
  tasks.append(taskname)
  tasks.append(cancel)
  todolist.append(tasks)

  taskname.innerHTML = taskinput.value;
  updateitemsleft()

  all.classList.add("current")

  all.addEventListener("click", ()=>{
    for(let i=0; i<=completetask.length+task.length; i++){
      if(completetask[i]== tasks || task[i] == tasks){
        tasks.style.display = "flex"
      }
    }
    all.classList.add("current")
    completed.classList.remove("current")
    active.classList.remove("current")
  })

  active.addEventListener("click", ()=>{
    for(let i=0; i<=completetask.length+task.length; i++){
    if(completetask[i] == tasks){
      tasks.style.display = "none"
    }
    else if(task[i] == tasks){
    tasks.style = "display: flex"
    }
    all.classList.remove("current")
    completed.classList.remove("current")
    active.classList.add("current")
  }
  })

  
  completed.addEventListener("click", ()=>{
    for(let i=0; i<=task.length+completetask.length; i++){
      if(task[i] == tasks){
        tasks.style.display = "none"
      }
      else if(completetask[i] == tasks){
      tasks.style = "display: flex"
      }
    }
    all.classList.remove("current")
    completed.classList.add("current")
    active.classList.remove("current")
  })

  cancel.addEventListener("click", canceltask)
  
  tickbox.addEventListener("click", ()=>{
      addtocompleted()
  
    })
    clearcomp.addEventListener('click', clearcompleted)




    function canceltask(){
      todolist.removeChild(tasks)
      updateitemsleft()
    }
    
    function addtocompleted(){
      tickbox.classList.toggle("checked")
      taskname.classList.toggle("checked")
      tickimg.classList.toggle("checked")
      cancel.style.display ="none"
      for(let i=0; i<=task.length; i++){
      if(task[i] == tasks)
      tasks.classList.replace("todo","completedtask")
          updateitemsleft()
      }
      }
  
    function clearcompleted(){
      for(let i=0; i<=completetask.length; i++){
          if(completetask[i] == tasks){
          canceltask()
          updateitemsleft()
      }
  }
    }

    function updateitemsleft(){
      itemsleft.innerHTML = task.length
    }

    taskinput.value = ""
}






window.addEventListener("load", main)