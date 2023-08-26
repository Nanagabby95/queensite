

//   var typingElement = document.getElementById('typing-animation');
//   typingElement.classList.add('typing');

 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) => {
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// ALGORITHM
// function linearSearch(arr, target) {
//  for(let i=0; i<arr.length; i++){
//   if (arr[i]===target){
//     return i
//   }
//  }return -1
//   } 
//   console.log(linearSearch([-5,2,10,4,6],10));
//   console.log(linearSearch([-5,2,10,4,6],6));
//   console.log(linearSearch([-5,2,10,4,6],20));



