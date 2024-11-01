


var randomNumber1 = Math.floor(Math.random()*6)+1; //randomly produce number from 1-6;
var randomNumber2 = Math.floor(Math.random()*6)+1; //randomly produce number from 1-6;

var x = "./images/dice"+randomNumber1+".png";
var y = "./images/dice"+randomNumber2+".png";

var img1 = document.querySelectorAll("img")[0];   
img1.setAttribute("src",x);

var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src",y);

// change the title base on the dice number; 
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1");  // find the position of the conten you need to change which is the title"refresh me".
        var newTitle = document.querySelector("h1");
        newTitle.innerHTML = "🍄Player 1 Win !";
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1");  // find the position of the conten you need to change which is the title"refresh me".
        var newTitle = document.querySelector("h1");
        newTitle.innerHTML = "Player 2 Win🍄 !";
    }
    else if (randomNumber1 = randomNumber2){
        document.querySelector("h1");  // find the position of the conten you need to change which is the title"refresh me".
        var newTitle = document.querySelector("h1");
        newTitle.innerHTML = "🍄Draw🍄";
    }
    
