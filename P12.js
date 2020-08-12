//PART 1

//Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.
document.addEventListener("DOMContentLoaded",function(){

//Replace the text "Change me" with "Hello World!".
   var heading = document.getElementById("change_heading");
   heading.innerHTML = "Hello";

//When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.
  var section = document.querySelector("section");
   section.addEventListener("mouseover",function(event){
       var selected = document.querySelector(".selected");
       selected.innerText = event.target.className;
   })
   
   //Create a new div element.
   var newDiv = document.createElement("div");

   //Give your new div a class of purple and style it so that it has a background color of purple.
   newDiv.classList.add("purple");

   //Append your new div to the page to the section tag.
   section.appendChild(newDiv);



   //PART 2
   var car1 = document.querySelector(".car1");
   var car2 = document.querySelector(".car2");
   var button = document.querySelector("button");
   car1.style.marginLeft = 0;
   car2.style.marginLeft = 0;


   //create a function to reset the two cars to its normal position on the page
    function reset(car1,car2){
      clearTimeout(car1.timer);
      clearTimeout(car2.timer);
      car1.style.marginLeft = 0;
      car2.style.marginLeft = 0;
      button.disabled = false;

    }

// Add an event to the button which starts and  ends the race
    button.addEventListener("click",function(){
      button.disabled = true;

     car1.timer = setInterval(function(){
       car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*60 + "px";
       if(parseInt(car1.style.marginLeft) > window.innerWidth){
         alert("car 1 wins");
         reset(car1,car2);
       }
     },60)


     car2.timer =setInterval(function(){
       car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()* 60 + "px";
       if(parseInt(car2.style.marginLeft) > window.innerWidth){
         alert("car 2 wins");
         reset(car1 , car2);
       }
     },60)


    })

   


   })