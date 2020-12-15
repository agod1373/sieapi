class Piece {
  constructor(div, png){
    this.div = document.getElementById(div);
    if (typeof(png)==='string'){
      this.png = document.getElementById(png);
    }
  }


  /*
  changeZ(){
    target.style.zIndex = z;
  }

  trick(duration) {
    let target = document.getElementById('elephant');
    if (target.style.zIndex === '-10'){
      const cardZVar = () => this.changeZ(target, 10);
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

  full(){

  }

  */
}

const sierra = new Piece('sierra', 0);
const elephant = new Piece('elephant', 'elephant-png');
const naples = new Piece('naples', 'naples-png');
const bricks = new Piece('bricks', 'bricks-png');
const turtle = new Piece('turtle', 'turtle-png');
const cream = new Piece('cream', 'cream-png');
const bottle = new Piece('bottle', 'bottle-png');
const piggy = new Piece('piggy', 'piggy-png');
const guitar = new Piece('guitar', 'guitar-png');
const jasmine = new Piece('jasmine', 'jasmine-png');
const blanket = new Piece('blanket', 'blanket-png');
const ceiling = new Piece('ceiling', 'ceiling-png');
const sabetha = new Piece('sabetha', 'sabetha-png');
const icicles = new Piece('icicles', 'icicles-png');




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






let prevArrow = document.getElementById('previous');
let shuffle = document.getElementById('shuffle');
let nextArrow = document.getElementById('next');
let divList = [sierra.div, elephant.div, naples.div, bricks.div, turtle.div, cream.div, bottle.div, piggy.div, guitar.div, jasmine.div, blanket.div, ceiling.div, sabetha.div, icicles.div];
let pngList = [sierra.div, elephant.png, naples.png, bricks.png, turtle.png, cream.png, bottle.png, piggy.png, guitar.png, jasmine.png, blanket.png, ceiling.png, sabetha.png, icicles.png];

let length = divList.length;
let first = divList[0];
let last = divList[length - 1];

const elephantTrick = () => cardTrick(elephant.png, 400);
const naplesTrick = () => cardTrick(naples.png, 400);
const bricksTrick = () => cardTrick(bricks.png, 400);
const turtleTrick = () => cardTrick(turtle.png, 400);
const creamTrick = () => cardTrick(cream.png, 400);
const bottleTrick = () => cardTrick(bottle.png, 400);
const piggyTrick = () => cardTrick(piggy.png, 400);
const guitarTrick = () => cardTrick(guitar.png, 400);
const jasmineTrick = () => cardTrick(jasmine.png, 400);
const blanketTrick = () => cardTrick(blanket.png, 400);
const ceilingTrick = () => cardTrick(ceiling.png, 400);
const sabethaTrick = () => cardTrick(sabetha.png, 400);
const iciclesTrick = () => cardTrick(icicles.png, 400);
let trickList = [elephantTrick, naplesTrick, bricksTrick, turtleTrick, creamTrick, bottleTrick, piggyTrick, guitarTrick, jasmineTrick, blanketTrick, ceilingTrick, sabethaTrick, iciclesTrick];
for (let i=1; i<divList.length-2; i++){
  divList[i].addEventListener('click', trickList[i-1]);
}

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
    divList[i].style.zIndex = '10';
    if(i !== 0){
      divList[i].style.display = 'none';
    }
  }
}

let current = 0;
function cardSwapFull(button){
  //next arrow click
  if (button === nextArrow){
    if (current !== length-1){
      divList[current+1].style.display = 'flex';
    }else{
      divList[0].style.display = 'flex';
    }

    cardSwapForward(divList[current], 400);
    if (current === length-1){
      current = 0;
    }else {
      current++;
    }
  }

  //prev arrow click
  if (button === prevArrow){
    if (current === 0){
      divList[length-1].style.display = 'flex';
      current = length;
      cardSwapBackward(divList[current-1], 400);
      current--;
    }else {
      divList[current-1].style.display = 'flex';
      cardSwapBackward(divList[current-1], 400);
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

function dieRoll() {
  let tl = anime.timeline({
    targets: shuffle,
    easing: 'easeOutQuad',
    duration: 3000
  });
  tl
  .add({
    rotate: 2160
  });
  tl
  .add({
    rotate: 0
  });
}

const next = () => cardSwapFull(nextArrow);
nextArrow.addEventListener('click', next);
const nextAnimate = () => arrowAnimation(nextArrow, 7);
nextArrow.addEventListener('click', nextAnimate);

const prev = () => cardSwapFull(prevArrow);
prevArrow.addEventListener('click', prev);
const prevAnimate = () => arrowAnimation(prevArrow, -7);
prevArrow.addEventListener('click', prevAnimate);

const shuffleAction = () => shuffleAnimation();
shuffle.addEventListener('click', shuffleAction);
const dieAnimate = () => dieRoll();
shuffle.addEventListener('click', dieAnimate);


function displayChange(mode, exclude){
  if (mode === 'see'){
    for (let i=0; i<divList.length; i++){
      divList[i].style.display = 'flex';
    }
  }else {
    for (let i=0; i<length; i++){
      if (i !== divList.indexOf(exclude)){
        divList[i].style.display = 'none';
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
  return Math.floor(Math.random() * (max - min) + min);
}

const see = () => displayChange('see');
let random = rng(0, length)
const hide = () => displayChange('hide', divList[random]);
async function shuffleAnimation(){
  let temp = current;
  current = random;
  see();
  setTimeout(hide, 6100);
  for (let i=0; i<3; i++){
    for (let i=0; i<pngList.length; i++){
      if (i !== temp){
        rotate(pngList[i], 'left', (rng(-200, 200)), rng(-400, 400), rng(-400, 400));
        await new Promise(r => setTimeout(r, 100));
      }
    }
  }
}
