

var backBtn = document.querySelector(".back-button");
var forwardBtn = document.querySelector(".forward-button");
var carousel = document.querySelector(".js-carousel");

console.log(backBtn);
console.log(forwardBtn);



forwardBtn.addEventListener("click", forward, false);

backBtn.addEventListener("click", back, false);


function forward () {
    carousel.className += "js-carousel--turn";
}


function back () {
	console.log("back");
}