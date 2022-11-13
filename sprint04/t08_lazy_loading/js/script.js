const images = document.querySelectorAll('img');
const message = document.querySelector('.message');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 
}

function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {
        if (myImgSingle.intersectionRatio > 0) {
            loadImage(myImgSingle.target);
        }
    });
}
let count = 1;
function setCounter(){
    count++;
    message.innerHTML = `${count} images loaded from ${images.length}`;
    if(count >= images.length){
        message.classList.add('counter-full-load');
        message.innerHTML = `20 images loaded from 20`;
    } 
}

function loadImage(image) {
    image.src = image.getAttribute('data-src');
    setCounter()
}

const observer = new IntersectionObserver(handleImg, options); // viewport

images.forEach((img, i) => {
    message.innerHTML = `${i + 1}`;
    observer.observe(img);
});


/*
let arr = [
    'assets/images/img1.jpg',
    'assets/images/img2.jpeg',
    'assets/images/img3.jpeg',
    'assets/images/img4.jpeg',
    'assets/images/img5.jpg',
    'assets/images/img6.jpg',
    'assets/images/img7.jpeg',
    'assets/images/img8.jpg',
    'assets/images/img9.jpg',
    'assets/images/img10.jpg',
    'assets/images/img1.jpg',
    'assets/images/img2.jpeg',
    'assets/images/img3.jpeg',
    'assets/images/img4.jpeg',
    'assets/images/img5.jpg',
    'assets/images/img6.jpg',
    'assets/images/img7.jpeg',
    'assets/images/img8.jpg',
    'assets/images/img9.jpg',
    'assets/images/img10.jpg'
]

const options = {
    root: null,
    rootMargin: '0px 0px -200px 0px',
    threshold: 0.5
}
function render(arr){
   result = '';
    for(let i = 0; i < arr.length;i++){
        result += `<img src="assets/images/download.gif" alt="" data-src="${arr[i]}">` 
    }
return result
}

document.querySelector('.box-img').innerHTML = render(arr)
console.log(document.querySelector('.box-img'))

const images = document.querySelectorAll('[data-src]'),
      countArea = document.querySelector('.counter');

let count = 0;

function preloadImage(image){
    const src = image.getAttribute('data-src')
        if(!src){
            return;
        }
        image.src = src;
       setCounter()  
}

function setCounter(){
    count++;
    countArea.innerHTML = `${count} images loaded from ${images.length}`;
    if(count === images.length){
        countArea.classList.add('counter-full-load');
    } 
    setTimeout(()=>{
        if(count === images.length){
           countArea.classList.remove('counter-full-load');
           countArea.classList.add('hide'); 
        }
       
    }, 3000);
    
}

function handleImg(myImg, observer){
    myImg.forEach(myImgSingle => {         
        if(myImgSingle.intersectionRatio > 0){
            preloadImage(myImgSingle.target)
        }
    })
}

const observer = new IntersectionObserver((entries, imgObserver)=>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            observer.unobserve(entry.target);
        }
    })
}, options)

images.forEach(img => observer.observe(img));
*/
