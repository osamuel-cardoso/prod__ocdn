import gsap from 'gsap'

const menuInteract = document.querySelectorAll('.interact-wrapper')
let isOpen = false

menuInteract.forEach((el) => {
  const tl = gsap.timeline({
    paused: true,
  })
  const headerLink = el.querySelector('.header__link')
  const menuComponent = el.querySelector('.header__link-menu-component')
  const menuContent = el.querySelectorAll('.menu__content-component')

  function openMenu() {
    if (!isOpen && !tl.isActive()) {
      tl.set(menuComponent, {
        pointerEvents: 'none',
      })
        .to(menuComponent, {
          display: 'block',
          pointerEvents: 'all',
          duration: 0.01,
        })
        .from(menuComponent, {
          opacity: 0,
          y: '-5%',
          ease: 'power1.out',
          duration: 0.15,
        })
        .to(menuComponent, {
          opacity: 1,
          y: '0%',
          ease: 'power1.out',
          duration: 0.1,
        })
        .from(menuContent, {
          opacity: 0,
          y: '5%',
          ease: 'ease',
          stagger: 0.15,
          duration: 0.1,
        })
      isOpen = true
    }
  }
  function closeMenu() {
    if (!tl.isActive()) {
      tl.reverse(0.15)
    }
    isOpen = false
  }

  headerLink?.addEventListener('mouseenter', openMenu)
  headerLink?.addEventListener('mouseleave', closeMenu)
  el.addEventListener('mouseenter', () => tl.restart())
  el.addEventListener('mouseleave', () => tl.reverse())
})
