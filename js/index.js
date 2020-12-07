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

let piggyPng = document.getElementById('piggy-png');
let piggyDiv = document.getElementById('piggy');

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




let aboutDiv = document.getElementById('about-me');

let prevArrow = document.getElementById('previous');
let shuffle = document.getElementById('shuffle');
let nextArrow = document.getElementById('next');
let pictureList = [aboutDiv, piggyDiv];
let last = piggyDiv;

function cardSwapTrick(target, duration, zIndex) {
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

function zReturn(){
  for (let i=0; i<pictureList.length; i++){
    pictureList[i].style.zIndex = '10';
  }
}

let current = 0;
function cardSwapFull(button){
  let length = pictureList.length;

  //next arrow click
  if (button === nextArrow){
    if (current !== length-1){
      cardSwapTrick(pictureList[current], 400);
    }else {
      cardSwapTrick(pictureList[current], 400);
    }
    if (current === length-1){
      current = 0;
    }else {
      current++;
    }
  }
}

const next = () => cardSwapFull(nextArrow);
nextArrow.addEventListener('click', next);
