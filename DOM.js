//PART1 SOLUTION
//Select the section with an id of container without using querySelector.
var container = document.getElementById("container");

//Select the section with an id of container using querySelector.
var contain = document.querySelector("#container");
     
//Select all of the list items with a class of "second".
var allSecond = document.querySelectorAll(".second");
       
//Select a list item with a class of third, but only the list item inside of the ol tag.
var third = document.getElementsByClassName("third")[1];

//Give the section with an id of container the text "Hello!".
contain.innerHTML = "Hello!";
 
//Add the class main to the div with a class of footer.
var footer = document.querySelector(".footer");
footer.classList.add("main");

//// 7 - Remove the class main on the div with a class of footer.
var footer = document.querySelector(".footer");
footer.classList.remove("main");

//Create a new li element.
var newLi = document.createElement("li");

//Give the li the text "four".              
newLi.innerHTML = "four";

//Append the li to the ul element.
var ulElement = document.getElementsByTagName("ul");
ulElement.appendChild(newLi);

//Loop over all of the lis inside the ol tag and give them a background color of "green".                
var olElement =  document.querySelectorAll("ol li");
for(var i =0; i < olElement; i++){
olElement[i].style.backgroundColor = "green";}
                        
//Remove the div with a class of footer.            
var footer = document.getElementsByClassName("footer");
footer.remove();
                      