var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumberImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomNumberImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomNumberImage="dice"+randomNumber2+".png";
var randomImageSource="images/"+randomNumberImage;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource);

if(randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML="player 1  wins!!!"
    }
    else if(randomNumber1<randomNumber2)
        {
            document.querySelector("h1").innerHTML="player 2  wins!!!"
        }
        else{
            document.querySelector("h1").innerHTML="draw!!!"
        }