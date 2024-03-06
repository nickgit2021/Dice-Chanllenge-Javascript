let reandomNumber1 = Math.floor(Math.random() * 6) + 1;
let reandomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage1 = "dice" + reandomNumber1 + ".png";
let randomDiceImage2 = "dice" + reandomNumber2 + ".png";
let randomImageSource1 = "images/" + randomDiceImage1;
let randomImageSource2 = "images/" + randomDiceImage2;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (reandomNumber1 === reandomNumber2){
    document.querySelector("h1").textContent = "Draw!";
}else if (reandomNumber1 > reandomNumber2){
    document.querySelector("h1").textContent = " 🚩Player 1 Wins!";
}else{
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}