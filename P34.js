//For this assignment you will be combining your knowledge of DOM access and events to build a todo app!
//As a user, you should be able to:
//Add a new todo (by submitting a form)
//Mark a todo as completed (cross out the text of the todo)
//Remove a todo


document.addEventListener("DOMContentLoaded",function(event){
 var form = document.querySelector("#new_form");
 var list = document.querySelector("#newList");


 form.addEventListener("submit",function(event){
     event.preventDefault();

   var button = document.createElement("button");
   button.innerHTML = "X";

   var line = document.createElement("li");
   line.innerHTML = document.getElementById("task").value;


   list.appendChild(line);
   line.appendChild(button);


   form.reset();
})


list.addEventListener("click",function(event){
if(event.target.tagName.toLowerCase() === "li"){
    event.target.style.textDecoration = "line-through";
} else if (event.target.tagName.toLowerCase() === "button"){
    event.target.parentNode.remove();
}
})

})




//Using localStorage, try to store your todos so that if you refresh the page you do not lose what you have added to the list! As a super bonus, try to also save todos that you have marked as complete!


document.addEventListener("DOMContentLoaded",function(event){

    var form = document.querySelector("#new_form");
    var list = document.querySelector("#newList");

    var savedTodos = JSON.parse(localStorage.getItem("myList")) || []
    for(var i=0; i < savedTodos.length; i++){
        var line = document.createElement("li");
        line.innerText = savedTodos[i].task
        line.isCompleted = savedTodos[i].isCompleted ? true : false;
        if(line.isCompleted) {
            line.style.textDecoration = "line-through";
        }
        list.appendChild(line);
    }

    form.addEventListener("submit", function(event){
        event.preventDefault();
        var line = document.createElement("li");
        var taskValue = document.getElementById("task").value;
        line.innerText = taskValue;
        line.isCompleted = false;
        form.reset();
        list.appendChild(line);

        // save to localStorage
        savedTodos.push({task: line.innerText, isCompleted: false});
        localStorage.setItem("myList", JSON.stringify(savedTodos));
    })

    list.addEventListener("click", function(event){
        var clickedListItem = event.target;

        if(!clickedListItem.isCompleted) {
            clickedListItem.style.textDecoration = "line-through";
            clickedListItem.isCompleted = true;
        } else {
            clickedListItem.style.textDecoration = "none";
            clickedListItem.isCompleted = false;
        }

        // breaks for duplicates - another option is to have dynamic IDs
        for(var i=0; i < savedTodos.length; i++){
            if(savedTodos[i].task === clickedListItem.innerText){
                savedTodos[i].isCompleted = clickedListItem.isCompleted;
                localStorage.setItem("myList", JSON.stringify(savedTodos));
            }
        }
     });
})






