console.log("connected!");
var difficulty=6;
var easy=document.querySelector("#difficulty1");
var hard=document.querySelector("#difficulty2");
var colors =genraterandomcolor(6);
//[picks a color]
var pickedcolor=pickcolor();
var squares=document.querySelectorAll(".square");
//looping around the squares 
for(i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=(colors[i]);
    document.getElementById("h1span").textContent=pickedcolor;
    squares[i].addEventListener("click",function(){
    var clickedcolor=this.style.backgroundColor;
    console.log(clickedcolor);
    console.log(pickedcolor);
    //compairing to picked color
    if(clickedcolor === pickedcolor){
     //if picked color is correct
     document.getElementById("message").textContent=("Well Done!")
     changecolor(clickedcolor);
     resetbutton.textContent="PLAY AGAIN?"
    }
    else{//if picked color is wrong
      this.style.backgroundColor="rgb(50, 50, 50)";
        document.getElementById("message").textContent=("Try Again")
    }
    });
}
var resetbutton=document.querySelector("#reset");
resetbutton.addEventListener("click",function(){
   resetfunction();
})
var buttons=document.querySelectorAll(".difficulty");
for(x=0;x<buttons.length;x++){
    buttons[x].addEventListener("click",function(){
        buttons[0].classList.remove("selected");
        buttons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent==="EASY"){      difficulty=3;   
        }
        else{ difficulty=6;
        }
        resetfunction();
    });
}
function genraterandomcolor(num){
    var arr=[];
    for(i=0;i<num;i++){
      arr.push(randomcolors());
    }
    return arr;
}
function randomcolors(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var x= "rgb("+r+", " +g+", "+b+")";
    return x;
}
function changecolor(clickedcolor){
    for(var j=0;j<squares.length;j++){
        squares[j].style.backgroundColor=clickedcolor;
    }
    document.getElementsByTagName("h1")[0].style.backgroundColor=clickedcolor;
}
function pickcolor(){
    //picking a random number
    var random =Math.floor(Math.random()*colors.length);   
    return colors[random];
}
function resetfunction(){
    //generate new colors
   colors=genraterandomcolor(difficulty);
    //pick a new random color
    pickedcolor=pickcolor();
    //change colors of display color
    document.getElementById("h1span").textContent=pickedcolor;
    //change color of squares
    for(i=0;i<squares.length;i++){
       if(colors[i]){ squares[i].style.display="block";    
           squares[i].style.backgroundColor=colors[i];}
       else{squares[i].style.display="none";}
    }
    document.querySelector("h1").style.backgroundColor="rgb(3, 166, 255)"; 
   document.querySelector("#message").textContent="";
   document.querySelector("#reset").textContent=("NEW COLORS!");
}

//ALT. difficulty button code
/*easy.addEventListener("click",function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    colors=[];
    difficulty=3;
    colors=genraterandomcolor(difficulty);
    pickedcolor=pickcolor();
    document.getElementById("h1span").textContent=pickedcolor;
    for(i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{squares[i].style.display="none"}
    }
    document.querySelector("h1").style.backgroundColor="rgb(3, 166, 255)";
    document.querySelector("#message").textContent="";
   document.querySelector("#reset").textContent=("NEW COLORS!");

});
hard.addEventListener("click",function(){
    hard.classList.add("selected");
    easy.classList.remove("selected")
    colors=[];
    difficulty=6;
    colors=genraterandomcolor(difficulty);
    pickedcolor=pickcolor();
    document.getElementById("h1span").textContent=pickedcolor;
    for(i=0;i<squares.length;i++){
       squares[i].style.backgroundColor=colors[i];
        
        squares[i].style.display="block"
    }
    document.querySelector("h1").style.backgroundColor="rgb(3, 166, 255)";
    
    document.querySelector("#message").textContent="";
   document.querySelector("#reset").textContent=("NEW COLORS!");
   

});*/