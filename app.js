const sponsor_Text = document.querySelector('.sponsor-text');
const blob = document.querySelector('.blob');

sponsor_Text.addEventListener('mouseover', () => {
  blob.classList.add('blob-animation');
});
