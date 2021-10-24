const sponsor_Text = document.querySelector('.sponsor_text');
const sponsor_Text2 = document.querySelector('.sponsor_text2');
const blob = document.querySelector('.blob');
const blob2 = document.querySelector('.blob2');

var animateScaling = anime({
  targets: '.blob',
  keyframes: [{ scale: 0.01 }, { scale: 1 }],
  borderRadius: ['0%', '120%'],
  rotate: '3turn',
  easing: 'easeInOutQuad',
  duration: 1000,
  autoplay: false,
});
var animateScaling2 = anime({
  targets: '.blob2',
  keyframes: [{ scale: 0.01 }, { scale: 1 }],
  borderRadius: ['0%', '120%'],
  rotate: '3turn',
  easing: 'easeInOutQuad',
  duration: 1000,
  autoplay: false,
});

document.querySelector('.play-scale').onclick = animateScaling.play;
document.querySelector('.play-scale2').onclick = animateScaling2.play;

sponsor_Text.addEventListener('click', () => {
  blob.classList.add('fill_animation');
});
sponsor_Text2.addEventListener('click', () => {
  blob2.classList.add('fill_animation');
});

sponsor_Text.addEventListener('click', () => {
  sponsor_Text.classList.add('spon_textdis');
});
sponsor_Text2.addEventListener('click', () => {
  sponsor_Text2.classList.add('spon_textdis');
});
