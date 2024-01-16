const anime = require('animejs');
anime({
    targets: '.loop',
    translateX: 270,
    loop: 3,
    easing: 'easeInOutSine'
  });