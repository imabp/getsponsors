const sponsor_Text = document.querySelector('.sponsor_text');
const sponsor_Text2 = document.querySelector('.sponsor_text2');
const blob = document.querySelector('.blob');
const blob2 = document.querySelector('.blob2');

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
