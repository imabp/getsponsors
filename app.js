const sponsor_Text = document.getElementById('spon_text');
const blob = document.querySelector('.blob');

sponsor_Text.addEventListener('click', () => {
  blob.classList.add('fill_animation');
});
sponsor_Text.addEventListener('click', () => {
  blob.classList.remove('blob:hover');
});
