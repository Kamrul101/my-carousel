// const imgElement = [
//     'images/pic-1.jpg',
//     'images/pic-2.jpg',
//     'images/pic-3.jpg',
//     'images/pic-4.jpg',
//     'images/pic-5.jpg',
//     'images/pic-6.jpg',
//     'images/pic-7.jpg',
//     'images/pic-8.jpg',
//     'images/pic-9.jpg'
// ];


// let imgIndex = 0;
// const imgEle = document.getElementById('img-element');
// setInterval( ()=>{
//     if(imgIndex === imgElement.length){
//         imgIndex = 0;
//     }
// const imgEl = imgElement[imgIndex];
// // console.log(imgEl,imgIndex);
// imgIndex++;
// imgEle.setAttribute('src', imgEl)
// } ,1000 );



const imageElement = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg'
]

const imgEle = document.getElementById('img-element');
let imgIndex = 0;
setInterval(()=>{
    if(imgIndex === imageElement.length){
        imgIndex = 0;
    }

    const imgUrl = imageElement[imgIndex];
    // console.log(imgIndex, imgUrl)
    imgIndex++;
    imgEle.setAttribute('src', imgUrl);
}, 1000)