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

// var photo = document.querySelector("#photo");
// var love = document.querySelector("#love");
// var count = document.querySelector("#count");

// // Initialize likes count from local storage or default to 0
// var flag = localStorage.getItem("likeCount") || 0;
// count.innerHTML = `${flag} likes`;

// photo.addEventListener("dblclick", function() {
//     love.style.transform = 'translate(-50%, -50%) scale(1)';
//     love.style.opacity = '0.8';
//     setTimeout(() => {
//         love.style.opacity = '0';
//     }, 900);
//     setTimeout(() => {
//         love.style.transform = 'translate(-50%, -50%) scale(0)';
//     }, 1000);
//     flag++; // Increment like count
//     count.innerHTML = `${flag} likes`; // Update displayed like count
//     localStorage.setItem("likeCount", flag); // Store updated like count in local storage
// });

// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get a cookie value
function getCookie(name) {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}

// Function to update like count and set/update cookie
function updateLikeCount() {
    let likes = parseInt(getCookie('likes')) || 0;
    likes++;
    setCookie('likes', likes, 365); // Set cookie with new like count
    document.getElementById('count').textContent = `${likes} likes`; // Update like count on the page
}

// Add event listener for double-click on photo to update like count
document.getElementById('photo').addEventListener('dblclick', updateLikeCount);

// Initialize like count on page load
document.addEventListener('DOMContentLoaded', function() {
    let likes = parseInt(getCookie('likes')) || 0;
    document.getElementById('count').textContent = `${likes} likes`;
});

