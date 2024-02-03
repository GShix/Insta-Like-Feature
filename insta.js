// var photo = document.querySelector("#photo");
// var love = document.querySelector("#love");
// var flag =0;
// var count = document.querySelector("#count");
// photo.addEventListener("dblclick",function(){
//     love.style.transform = 'translate(-50%, -50%) scale(1)';
//     love.style.opacity = '0.8';
//     setTimeout(() => {
//         love.style.opacity = '0';
//     }, 900);
//     setTimeout(() => {
//         love.style.transform = 'translate(-50%, -50%) scale(0)';
//     }, 1000);
//     flag =flag + 1;
//     count.innerHTML =`${flag} likes`;
// })

var photo = document.querySelector("#photo");
var love = document.querySelector("#love");
var count = document.querySelector("#count");

// Initialize likes count from local storage or default to 0
var flag = localStorage.getItem("likeCount") || 0;
count.innerHTML = `${flag} likes`;

photo.addEventListener("dblclick", function() {
    love.style.transform = 'translate(-50%, -50%) scale(1)';
    love.style.opacity = '0.8';
    setTimeout(() => {
        love.style.opacity = '0';
    }, 900);
    setTimeout(() => {
        love.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 1000);
    flag++; // Increment like count
    count.innerHTML = `${flag} likes`; // Update displayed like count
    localStorage.setItem("likeCount", flag); // Store updated like count in local storage
});
