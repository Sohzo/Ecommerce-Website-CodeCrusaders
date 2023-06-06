// header text animation - minimal
anime({
    targets: '#animateText',
    color: ['#EDE6E3', '#DADAD9'],
    loop: true,
    duration: 3000,
    direction: 'alternate',
    easing: 'easeInOutQuad'
});


// button hover animation
var buttons = document.querySelectorAll('button')

function enterButton(element) {
    anime({
        targets: element,
        scale: 1.2,
        duration: 800
    })
};

function exitButton(element) {
    anime({
        targets: element,
        scale: 1.0,
        duration: 600
    })
};

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', (e) => enterButton(e.target))
    btn.addEventListener('mouseleave', (e) => exitButton(e.target))
});

// gallery slide in animation
anime({
    targets: ('#scrollAnimate'),
    translateY: [770, 0],
    delay: anime.stagger(100, { start: 500 }),
    easing: 'easeInOutQuint'
})

anime({
    targets: ('#slideInRight'),
    translateX: [1500, 0],
    delay: anime.stagger(100, { start: 500 }),
    easing: 'easeInOutQuint'
})