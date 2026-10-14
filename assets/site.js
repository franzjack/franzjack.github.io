// Responsive navigation and publication category controls.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
menuButton?.addEventListener('click', () => {
  const opened = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!opened));
  navigation?.classList.toggle('is-open', !opened);
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  navigation?.classList.remove('is-open');
}));
const filters = document.querySelectorAll('.filter-button');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(other => {
    const active = other === button;
    other.classList.toggle('is-active', active);
    other.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('.publication').forEach(item => {
    item.hidden = category !== 'all' && item.dataset.category !== category;
  });
}));
const yearNode = document.querySelector('#year');
if (yearNode) yearNode.textContent = new Date().getFullYear();
