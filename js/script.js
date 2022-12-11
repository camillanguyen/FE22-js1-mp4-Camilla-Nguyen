
let camillaAnimation = anime.timeline({
  loop: true,
});
//Rubriken/namn
camillaAnimation.add({
  targets: '.camilla-nguyen #name',
  scale: [14, 1],
  opacity: [0, 1],
  easing: "easeOutCirc",
  duration: 1000,
  delay: (el, i) => 2000 * i,
})
camillaAnimation.add({
  targets: '#name',
  easing: "easeOutExpo",
  delay: 1000,

})

//Ålder
camillaAnimation.add({
  targets: '.age',
  innerHTML: [0, 26],
  easing: 'linear',
  duration: 2000,
  round: 10,
});

//Bilder
  camillaAnimation.add({
    targets: '.imageContainer #first ',
    translateX: 250,
    duration: 2000,
    direction: 'alternate',
    rotate: '1turn',
  })
  camillaAnimation.add({
    targets: '.imageContainer #second',
    translateX: 250,
    duration: 2000,
    direction: 'alternate',
    rotate: '1turn',
  })
  camillaAnimation.add({
    targets: '.imageContainer #third',
    translateX: 250,
    duration: 2000,
    direction: 'alternate',
    rotate: '1turn',
  });

// let camillaAge = anime


//Knapparna

document.querySelector('.play').onclick = camillaAnimation.play;
document.querySelector('.pause').onclick = camillaAnimation.pause;
document.querySelector('.restart').onclick = camillaAnimation.restart;
