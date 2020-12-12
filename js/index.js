const div = {
  sierra : document.getElementById('sierra'),
  elephant : document.getElementById('elephant'),
  naples : document.getElementById('naples'),
  bricks : document.getElementById('bricks'),
  turtle : document.getElementById('turtle'),
  cream : document.getElementById('cream'),
  bottle : document.getElementById('bottle'),
  piggy : document.getElementById('piggy'),
  guitar : document.getElementById('guitar'),
  jasmine :  document.getElementById('jasmine'),
  blanket : document.getElementById('blanket'),
  ceiling : document.getElementById('ceiling'),
  sabetha : document.getElementById('sabetha'),
  icicles : document.getElementById('icicles'),
  alex : document.getElementById('alex')
}

const png = {
  elephant : document.getElementById('elephant-png'),
  naples : document.getElementById('naples-png'),
  bricks : document.getElementById('bricks-png'),
  turtle : document.getElementById('turtle-png'),
  cream : document.getElementById('cream-png'),
  bottle : document.getElementById('bottle-png'),
  piggy : document.getElementById('piggy-png'),
  guitar : document.getElementById('guitar-png'),
  jasmine :  document.getElementById('jasmine-png'),
  blanket : document.getElementById('blanket-png'),
  ceiling : document.getElementById('ceiling-png'),
  sabetha : document.getElementById('sabetha-png'),
  icicles : document.getElementById('icicles-png')
}


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
      easing: 'easeOutQuad'
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


const elephantTrick = () => cardTrick(png.elephant, 400);
div.elephant.addEventListener('click', elephantTrick);
const naplesTrick = () => cardTrick(png.naples, 400);
div.naples.addEventListener('click', naplesTrick);
const bricksTrick = () => cardTrick(png.bricks, 400);
div.bricks.addEventListener('click', bricksTrick);
const turtleTrick = () => cardTrick(png.turtle, 400);
div.turtle.addEventListener('click', turtleTrick);
const creamTrick = () => cardTrick(png.cream, 400);
div.cream.addEventListener('click', creamTrick);
const bottleTrick = () => cardTrick(png.bottle, 400);
div.bottle.addEventListener('click', bottleTrick);
const piggyTrick = () => cardTrick(png.piggy, 400);
div.piggy.addEventListener('click', piggyTrick);
const guitarTrick = () => cardTrick(png.guitar, 400);
div.guitar.addEventListener('click', guitarTrick);
const jasmineTrick = () => cardTrick(png.jasmine, 400);
div.jasmine.addEventListener('click', jasmineTrick);
const blanketTrick = () => cardTrick(png.blanket, 400);
div.blanket.addEventListener('click', blanketTrick);
const ceilingTrick = () => cardTrick(png.ceiling, 400);
div.ceiling.addEventListener('click', ceilingTrick);
const sabethaTrick = () => cardTrick(png.sabetha, 400);
div.sabetha.addEventListener('click', sabethaTrick);
const iciclesTrick = () => cardTrick(png.icicles, 400);
div.icicles.addEventListener('click', iciclesTrick);


let prevArrow = document.getElementById('previous');
let shuffle = document.getElementById('shuffle');
let nextArrow = document.getElementById('next');
let pictureList = [div.sierra, div.elephant, div.naples, div.bricks, div.turtle, div.cream, div.bottle, div.piggy, div.guitar, div.jasmine, div.blanket, div.ceiling, div.sabetha, div.icicles, div.alex];
let length = pictureList.length;
let first = pictureList[0];
let last = pictureList[length - 1];

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
  for (let i=0; i<length; i++){
    pictureList[i].style.zIndex = '10';
    if(i !== 0){
      pictureList[i].style.display = 'none';
    }
  }
}

let current = 0;
function cardSwapFull(button){
  //next arrow click
  if (button === nextArrow){
    if (current !== length-1){
      pictureList[current+1].style.display = 'flex';
    }else{
      pictureList[0].style.display = 'flex';
    }

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
      pictureList[length-1].style.display = 'flex';
      current = length;
      cardSwapBackward(pictureList[current-1], 400);
      current--;
    }else {
      pictureList[current-1].style.display = 'flex';
      cardSwapBackward(pictureList[current-1], 400);
      current--;
    }
  }

  //shuffle button click
  if (button === shuffle){
    shuffleAnimation()
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
const shuffleAction = () => cardSwapFull(shuffle);
shuffle.addEventListener('click', shuffleAction);

/*
function displayChange(mode, exclude){
  if (mode === 'see'){
    for (let i=0; i<length; i++){
      pictureList[i].style.display = 'flex';
    }
  }else {
    for (let i=0; i<length; i++){
      if (i !== pictureList.indexOf(exclude)){
        pictureList[i].style.display = 'none';
      }
    }
  }
}

function rotate(target, direction, rotateNumber, translateXNumber, translateYNumber){
  if (direction === 'left'){
    let tl = anime.timeline({
      targets: target,
      duration: 200,
      easing: 'spring'
    })
    tl
    .add({
      rotate: rotateNumber,
      translateX: translateXNumber,
      translateY: translateYNumber
    })
    tl
    .add({
      rotate: 0,
      translateX: 0,
      translateY: 0
    })
  }else {
    let tl = anime.timeline({
      targets: target
    })
    tl
    .add({
      rotate: rotateNumber,
      translateX: translateXNumber,
      translateY: translateYNumber
    })
    tl
    .add({
      rotate: 0,
      translateX: 0,
      translateY: 0
    })
  }

}

function rng(min, max) {
  return Math.random() * (max - min) + min;
}


const see = () => displayChange('see');
const hide = () => displayChange('hide');
async function shuffleAnimation(){
  see();
  setTimeout(hide, 5400);
  for (let i=0; i<3; i++){
    for (let i=0; i<pngList.length; i++){
      rotate(pngList[i], 'left', (rng(-200, 200)), rng(-400, 400), rng(-400, 400));
      await new Promise(r => setTimeout(r, 100));
    }
  }
}
*/
