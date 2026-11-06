// Content is visible by default; motion is an enhancement only.
document.documentElement.classList.add('has-js');

const header = document.querySelector<HTMLElement>('#site-header');
let headerFramePending = false;
const updateHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
  headerFramePending = false;
};
window.addEventListener('scroll', () => {
  if (!headerFramePending) {
    headerFramePending = true;
    window.requestAnimationFrame(updateHeader);
  }
}, { passive: true });
updateHeader();

const menu = document.querySelector<HTMLDialogElement>('#mobile-menu');
const menuToggle = document.querySelector<HTMLButtonElement>('#menu-toggle');
const closeMenu = () => menu?.close();

menuToggle?.addEventListener('click', () => {
  if (!menu || menu.open) return;
  menu.showModal();
  document.body.classList.add('menu-is-open');
  menuToggle.setAttribute('aria-expanded', 'true');
});
menuToggle?.setAttribute('aria-expanded', 'false');
document.querySelector('#menu-close')?.addEventListener('click', closeMenu);
menu?.addEventListener('close', () => {
  document.body.classList.remove('menu-is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
});
menu?.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});
menu?.addEventListener('click', (event) => {
  if (!menu || event.target !== menu) return;
  const bounds = menu.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeMenu();
});
window.matchMedia('(min-width: 901px)').addEventListener('change', (event) => {
  if (event.matches && menu?.open) closeMenu();
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const activeAnimations = new Set<Animation>();
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      if (reducedMotion.matches) return;
      const animation = entry.target.animate([
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: 800, easing: 'cubic-bezier(.2,.65,.3,1)' });
      activeAnimations.add(animation);
      animation.onfinish = () => activeAnimations.delete(animation);
      animation.oncancel = () => activeAnimations.delete(animation);
    });
  }, { threshold: 0, rootMargin: '0px 0px -25px 0px' });

  document.querySelectorAll<HTMLElement>('.reveal').forEach((element) => {
    // Leave anything already on screen untouched, including restored scroll positions.
    if (element.getBoundingClientRect().top >= window.innerHeight) observer.observe(element);
  });
  reducedMotion.addEventListener('change', (event) => {
    if (!event.matches) return;
    observer.disconnect();
    activeAnimations.forEach((animation) => animation.cancel());
    activeAnimations.clear();
  });
}
