/*
function shadowAnimate(target, x, y, scale, duration) {
  anime({
    targets: target,
    translateX: x,
    translateY: y,
    scale: scale,
    duration: duration,
    easing: 'easeOutQuad'
  });
}

function clickAnimate(target, x, duration, elasticity) {
  anime({
    targets: target,
    translateX: x,
    duration: duration,
    elasticity: elasticity
  })
}

const piggyShadow = () => shadowAnimate(piggyPng, '100%', 0 , 1, 300);
const piggyReturn = () => shadowAnimate(piggyPng, 0, 0, 1.00, 300);
piggyPng.addEventListener('mouseenter', piggyShadow);
piggyDiv.addEventListener('mouseleave', piggyReturn);
*/
let aboutDiv = document.getElementById('about-me');
let piggyPng = document.getElementById('piggy-png');
let piggyDiv = document.getElementById('piggy');
let eyeDiv = document.getElementById('eye');
let eyePng = document.getElementById('eye-png');
let jasiDiv = document.getElementById('jasi-alien');
let jasiPng = document.getElementById('jasi-alien-png');
let lipsDiv = document.getElementById('lips');
let lipsPng = document.getElementById('lips-png');
let underwaterDiv = document.getElementById('underwater');
let underwaterPng = document.getElementById('underwater-png');
let neonBorealisDiv = document.getElementById('neon-borealis');
let neonBorealisPng = document.getElementById('neon-borealis-png');
let ganeshaDiv = document.getElementById('ganesha');
let ganeshaPng = document.getElementById('ganesha-png');
let alexDiv = document.getElementById('about-alex');

function cardZ(target, z) {
  target.style.zIndex = z;
}

function cardTrick(target, duration) {
  if (target.style.zIndex === '-10'){
    const cardZVar = () => cardZ(target, 10);
    setTimeout(cardZVar, duration);
    let tl = anime.timeline({
      targets: target,
      duration: duration,
      easing: 'easeOutQuint'
    });
    tl
    .add({
      translateX: '100%',
      translateY: '-10%',
      rotate: 10
    });
    //at this point the target z-index will be set to -10 by the cardZVar function
    tl
    .add({
      translateX: 0,
      translateY: 0,
      rotate: 0
    })
  }else {
    const cardZVar = () => cardZ(target, -10);
    setTimeout(cardZVar, duration);
    let tl = anime.timeline({
      targets: target,
      duration: duration,
      easing: 'easeOutQuad'
    });
    tl
    .add({
      translateX: '100%',
      translateY: '-10%',
      rotate: 10
    });
    //at this point the target z-index will be set to 10 by the cardZVar function
    tl
    .add({
      translateX: 0,
      translateY: 0,
      rotate: 0
    })
  }
}

const piggyTrick = () => cardTrick(piggyPng, 400);
piggyPng.addEventListener('click', piggyTrick);
piggyDiv.addEventListener('click', piggyTrick);
const eyeTrick = () => cardTrick(eyePng, 400);
eyePng.addEventListener('click', eyeTrick);
eyeDiv.addEventListener('click', eyeTrick);
const jasiTrick = () => cardTrick(jasiPng, 400);
jasiPng.addEventListener('click', jasiTrick);
jasiDiv.addEventListener('click', jasiTrick);
const lipsTrick = () => cardTrick(lipsPng, 400);
lipsPng.addEventListener('click', lipsTrick);
lipsDiv.addEventListener('click', lipsTrick);
const underwaterTrick = () => cardTrick(underwaterPng, 400);
underwaterPng.addEventListener('click', underwaterTrick);
underwaterDiv.addEventListener('click', underwaterTrick);
const ganeshaTrick = () => cardTrick(ganeshaPng, 400);
ganeshaPng.addEventListener('click', ganeshaTrick);
ganeshaDiv.addEventListener('click', ganeshaTrick);
const neonBorealisTrick = () => cardTrick(neonBorealisPng, 400);
neonBorealisPng.addEventListener('click', neonBorealisTrick);
neonBorealisDiv.addEventListener('click', neonBorealisTrick);


let prevArrow = document.getElementById('previous');
let shuffle = document.getElementById('shuffle');
let nextArrow = document.getElementById('next');
let pictureList = [aboutDiv, piggyDiv, eyeDiv, jasiDiv, lipsDiv, underwaterDiv, neonBorealisDiv, ganeshaDiv, alexDiv];
let first = pictureList[0];
let last = pictureList[pictureList.length - 1];

function cardSwapForward(target, duration) {
  let tl = anime.timeline({
    targets: target,
    duration: duration,
    easing: 'easeOutQuint'
  });
  tl
  .add({
    translateX: '100%',
    translateY: '-10%',
    rotate: 10
  });
  //this is when the z-index of the current card should be negated
  tl
  .add({
    translateX: 0,
    translateY: 0,
    rotate: 0
  })
  if (target === last){
    const changeZAll = () => zReturn();
    setTimeout(changeZAll, duration);
  }else {
    const changeZ = () => cardZ(target, 9);
    setTimeout(changeZ, duration);
  }
}

function cardSwapBackward(target, duration) {
  let tl = anime.timeline({
    targets: target,
    duration: duration,
    easing: 'easeOutQuint'
  });
  tl
  .add({
    translateX: '100%',
    translateY: '-10%',
    rotate: 10
  });
  //this is when the z-index of the current card should be negated
  tl
  .add({
    translateX: 0,
    translateY: 0,
    rotate: 0
  })
  if (target !== first){
    const changeZ = () => cardZ(target, 11);
    setTimeout(changeZ, duration);
  }else {
    const changeZAll = () => zReturn();
    setTimeout(changeZAll, duration);

  }
}

function zReturn(){
  for (let i=0; i<pictureList.length; i++){
    pictureList[i].style.zIndex = '10';
  }
}

let current = 0
let prevCurrent = pictureList.length-1;
function cardSwapFull(button){
let length = pictureList.length;

  //next arrow click
  if (button === nextArrow){
    cardSwapForward(pictureList[current], 400);
    if (current === length-1){
      current = 0;
    }else {
      current++;
    }
  }

  //prev arrow click
  if (button === prevArrow){
    if (current === 0){
      current = pictureList.length;
    }
    cardSwapBackward(pictureList[current-1], 400);
    current--;
  }

  if (button === shuffle){

  }
}

function arrowAnimation(button, x){
  let tl = anime.timeline({
    targets: button,
    duration: 135,
    easing: 'easeOutQuad'
  });
  tl
  .add({
    translateX: x
  })
  tl
  .add({
    translateX: 0
  })
}

const next = () => cardSwapFull(nextArrow);
nextArrow.addEventListener('click', next);
const nextAnimate = () => arrowAnimation(nextArrow, 7);
nextArrow.addEventListener('click', nextAnimate);
const prev = () => cardSwapFull(prevArrow);
prevArrow.addEventListener('click', prev);
const prevAnimate = () => arrowAnimation(prevArrow, -7);
prevArrow.addEventListener('click', prevAnimate);
