const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('is-open');
  const isOpen = menu.classList.contains('is-open');
  btn.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('is-open')) {
    menu.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.focus();
  }
});
