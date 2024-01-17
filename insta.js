var photo = document.querySelector("#photo");
var love = document.querySelector("#love");
var flag =0;
var count = document.querySelector("#count");
photo.addEventListener("dblclick",function(){
    love.style.transform = 'translate(-50%, -50%) scale(1)';
    love.style.opacity = '0.8';
    setTimeout(() => {
        love.style.opacity = '0';
    }, 900);
    setTimeout(() => {
        love.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 1000);
    flag =flag + 1;
    count.innerHTML =`${flag} likes`;
})

