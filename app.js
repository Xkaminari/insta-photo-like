let heart = document.querySelector('.fa-regular');
let redHeart = document.querySelector('.fa-solid');
let postImg = document.querySelector('.img_container');
let likeConter = document.querySelector('.like_counter');
let sommeLike;

if (localStorage.getItem('likes') === null) {
    sommeLike = 0;
} else {
    sommeLike = parseInt(localStorage.getItem('likes'))
    likeConter.innerText = sommeLike;
}

function myLike() {
    sommeLike ++;
    likeConter.innerText = sommeLike;
    redHeart.style.display = "block";
    heart.style.opacity = "0";
    redHeart.classList.add("heart_animation");
    localStorage.setItem('likes', sommeLike);
}

heart.addEventListener('click', () => {
    myLike();
})

postImg.addEventListener('dblclick', () => {
    myLike();
})