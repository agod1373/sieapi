let piggyPng = document.getElementById('piggy-png');
let piggyDiv = document.getElementById('piggy');

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

/*
const piggyShadow = () => shadowAnimate(piggyPng, '100%', 0 , 1, 300);
const piggyReturn = () => shadowAnimate(piggyPng, 0, 0, 1.00, 300);
piggyPng.addEventListener('mouseenter', piggyShadow);
piggyDiv.addEventListener('mouseleave', piggyReturn);
*/

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
