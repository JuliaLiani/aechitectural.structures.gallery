const images = ["1.jpg","2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
console.log(images);

const back = document.querySelector('#back');
const next = document.querySelector('#next');

let i = 0;

next.addEventListener('click', function(){
    i ++;
    if (i > images.length - 1) {
        i = 0;
    }
    document.querySelector(".photos").src = images[i];
});

back.addEventListener('click', function(){
    i --;
    if ( i < 0) {
        i = images.length -1;
    }
    document.querySelector(".photos").src = images[i];
});

