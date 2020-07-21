/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
let para=document.querySelectorAll("p");
console.log(para.length);
for(let p of para){
    console.log("paragraph="+p);
    console.log("paragraph text="+p.textContent);
    console.log("paragraph html="+p.innerHTML);
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text 
"Thanks for visiting Bikes for Refugees!"
alertBtn*/
let alertBtn=document.querySelector("#alertBtn");
alertBtn.addEventListener("click",function(){
    alert("Thanks for visiting Bikes for Refugees!");
})
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page 
when the 'Change colour' button is clicked.
bgrChangeBtn*/
let bgrChangeBtn=document.querySelector("#bgrChangeBtn");
let body=document.querySelector("body");
let color=["red","green","blue","yellow"]
bgrChangeBtn.addEventListener("click",function(){
  body.style.background=color[Math.floor(Math.random()*color.length)];
})

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph
 should be added below the buttons that says "Read more below."
AddTextBtn*/
let AddTextBtn=document.querySelector("#AddTextBtn");
let newPara=document.createElement("p");
newPara.textContent="Read more below";
AddTextBtn.addEventListener("click",function(){
    AddTextBtn.appendChild(newPara);   
})



/*
Task 5
======

When the 'Larger links!' button is clicked,
 the text of all links on the page should increase.
largerLinksBtn*/
let largerLinksBtn=document.querySelector("#largerLinksBtn");
let links=document.querySelectorAll("a");
largerLinksBtn.addEventListener("click",function(){
    for(link of links){
        link.style.fontSize="xx-Large";
    }
})
