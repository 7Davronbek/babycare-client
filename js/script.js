


  let swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

  let tabs = document.querySelector(".tabs");
  let tabHeader = tabs.querySelector(".tab-header");
  let tabBody = tabs.querySelector(".tab-body");
  let tabIndicator = tabs.querySelector(".tab-indicator");
  let tabHeaderNodes = tabs.querySelectorAll(".tab-header > div");
  let tabBodyNodes = tabs.querySelectorAll(".tab-body > div");

  for (let i = 0; i < tabHeaderNodes.length; i++) {
    tabHeaderNodes[i].addEventListener("click", function () {
      tabHeader.querySelector(".active").classList.remove("active");
      tabHeaderNodes[i].classList.add("active");
      tabBody.querySelector(".active").classList.remove("active");
      tabBodyNodes[i].classList.add("active");
      tabIndicator.style.left = `calc(calc(calc(25% - 5px) * ${i} + 10px))`;
    });
  }


  const parallax = (e) => {
      document.querySelectorAll('.layer').forEach(layer => {
          const speed = layer.getAttribute('data-speed')

          const x = (window.innerWidth - e.pageX * speed) / 100
          const y = (window.innerHeight - e.pageY * speed) / 100

          layer.style.transform = `translate(${x}px, ${y}px)`
      })
  }
  
  document.addEventListener('mousemove', parallax)

  const burger = document.querySelector('.burger')
  const navbar = document.querySelector('.navbar-menu')


  const burgering = () => {
    burger.classList.toggle('burgered')
    navbar.classList.toggle('active')
  }

  function navbars() {
    const nav = document.querySelector(".myNav");
    let scrolling = window.pageYOffset > 100;
  
    nav.classList.toggle("active", scrolling);
  }
  
  window.addEventListener("scroll", () => {
    navbars();
  });