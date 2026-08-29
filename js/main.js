/////////////////// TRANSLATE ALL /////////////////////
/////////////////// TRANSLATE ALL /////////////////////
const btnEn = document.getElementById("lang-en");
const btnRu = document.getElementById("lang-ru");
if (btnEn) {
  btnEn.addEventListener("click", () => {
  localStorage.setItem("preferred-lang", "en");
  window.location.href = "index.html";
});
}
if (btnRu) {
  btnRu.addEventListener("click", () => {
  localStorage.setItem("preferred-lang", "ru");
  window.location.href = "index-ru.html";
});
}

const currentLang = document.documentElement.lang;
const savedLang = localStorage.getItem("preferred-lang");

if(savedLang && savedLang !== currentLang) {
  if(savedLang == "en") {
    window.location.href = "index.html";
  }
  if(savedLang == "ru") {
    window.location.href = "index-ru.html";
  }
}

// \\\\\\\\\\\\\\\\\\ BODY TRANSITION \\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\ BODY TRANSITION \\\\\\\\\\\\\\\\\

setTimeout(function () {
  $("body").addClass("body_visible");
}, 300);

////////////////////// HEADER LOG | REG BUTTONS /////////////////////////
////////////////////// HEADER LOG | REG BUTTONS /////////////////////////
const headerUserNav = document.querySelector(".header__user-nav");
headerUserNav.addEventListener("click", (event) => {
  const clickedButton = event.target.closest(".header__user-btn");
  if (!clickedButton || !headerUserNav.contains(clickedButton)) return;
  const popupType = clickedButton.dataset.popupType;
  createPopup(popupType);
});

const loginPopup = document.querySelector(".header__user-popup.login");
const registerPopup = document.querySelector(".header__user-popup.register");
const overlayPopup = document.querySelector(".overlay-popup");
const body = document.querySelector(".body");
const bodyBlock = document.querySelector(".body-blocked");


//проверка состояния бургер-меню
function isBurgerMenuOpen() {
  return $(".header__top").hasClass("header__top--open");
}

//махинации с классом body-blocked
function updateBodyBlockedState() {
  const popupIsOpen = 
    loginPopup?.classList.contains("popup--show") || 
    registerPopup?.classList.contains("popup--show");
  
  if (popupIsOpen || isBurgerMenuOpen()) {
    body?.classList.add("body-blocked");
    bodyBlock?.classList.add("body-blocked");
  } else {
    body?.classList.remove("body-blocked");
    bodyBlock?.classList.remove("body-blocked");
  }
}

function createPopup(type) {
  // изначальное скрытие попапов
  loginPopup?.classList.remove("popup--show");
  registerPopup?.classList.remove("popup--show");
  overlayPopup?.classList.remove("overlay-popup--show");

  if (type === "login") {
    loginPopup?.classList.add("popup--show");
    overlayPopup?.classList.add("overlay-popup--show");
  } else if (type === "register") {
    registerPopup?.classList.add("popup--show");
    overlayPopup?.classList.add("overlay-popup--show");
  }
  updateBodyBlockedState();
}

document
  .querySelectorAll(".overlay-popup, .header__form-close")
  .forEach((element) => {
    element.addEventListener("click", () => {
      loginPopup?.classList.remove("popup--show");
      registerPopup?.classList.remove("popup--show");
      overlayPopup?.classList.remove("overlay-popup--show");
      updateBodyBlockedState();
    });
  });

// \\\\\\\\\\\\\\\\\\\\\\ DIRECTIONS FILTER  \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\ DIRECTIONS FILTER  \\\\\\\\\\\\\\\\\\\\\\\\\\\\

var mixer = mixitup(".directions__list");

$(".directions__filter-btn").on("click", function () {
  $(".directions__filter-btn").removeClass("directions__filter-btn--active");
  $(this).addClass("directions__filter-btn--active");
});

// 1. Экземпляр с базовыми настройками
var mixer = mixitup(".directions__list", {
  animation: {
    enable: true,
    queue: false,
  },
});

// 2. Функция, которая переключает анимацию в зависимости от ширины экрана
function updateMixerAnimation() {
  // Условие: анимация включена только при ширине окна больше 750 пикселей
  var enableAnim = window.innerWidth > 750;
  mixer.configure({
    animation: { enable: enableAnim },
  });
}

// 3. Запускаем проверку при загрузке и вешаем её на событие изменения размера окна
updateMixerAnimation();
window.addEventListener("resize", updateMixerAnimation);

// \\\\\\\\\\\\\\\\\\\\\\  YOUTUBE PLAYER  \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\  YOUTUBE PLAYER  \\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Инициализация fancybox для всех элементов с атрибутом data-fancybox
Fancybox.bind("[data-fancybox]", {
  // Здесь можно добавить свои настройки, например:
  Toolbar: {
    display: ["close"],
  },
});

// \\\\\\\\\\\\\\\\\\\\\\  SLIDER TEAM  \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\  SLIDER TEAM  \\\\\\\\\\\\\\\\\\\\\\\\\\\\

$(".team__slider").slick({
  arrows: false,
  slidesToShow: 4,
  infinite: true,
  draggable: false,
  waitForAnimate: true,
  speed: 300,

  // АДАПТИВ \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        dots: true,
        appendDots: $(".team__dots"),
        waitForAnimate: true,
        speed: 500,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        dots: true,
        appendDots: $(".team__dots"),
        waitForAnimate: true,
        speed: 500,
      },
    },
  ],
});
$(".team__slider-prev").on("click", function (e) {
  e.preventDefault();
  $(".team__slider").slick("slickPrev");
});

$(".team__slider-next").on("click", function (e) {
  e.preventDefault();
  $(".team__slider").slick("slickNext");
});

// \\\\\\\\\\\\\\\\\\\\\\  SLIDER TESTIMONIALS \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\  SLIDER TESTIMONIALS \\\\\\\\\\\\\\\\\\\\\\\\\\\\

$(".testimonials__slider").slick({
  arrows: false,
  dots: true,
  appendDots: $(".testimonials__dots"),
  waitForAnimate: true,
  speed: 500,
});

$(".testimonials__prev").on("click", function (e) {
  e.preventDefault();
  $(".testimonials__slider").slick("slickPrev");
});

$(".testimonials__next").on("click", function (e) {
  e.preventDefault();
  $(".testimonials__slider").slick("slickNext");
});

// \\\\\\\\\\\\\\\\\\\\\\  ACCORDEON \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\  ACCORDEON \\\\\\\\\\\\\\\\\\\\\\\\\\\\

// НЕ АККОРДЕОН НО ТОП ФУЛЛ ОПЕН НАРМАЛДАКИ
// $('.program__acc-link').on('click', function (e){
//   e.preventDefault()
//   $(this).toggleClass('program__acc-link--active')
//   $(this).children('.program__acc-text ').slideToggle()
// })

// АККОРДЕОН НО НЕ ТОП МНЕ НЕ НРАВКИ ХОТЯ БУДТО НЕПЛОХО И ОН НЕ ФУЛЛ ОПЕН
$(".program__acc-link").on("click", function (e) {
  e.preventDefault();
  if ($(this).hasClass("program__acc-link--active active")) {
    $(this).removeClass("program__acc-link--active active");
    $(this).children(".program__acc-text").slideUp();
  } else {
    $(".program__acc-link").removeClass("program__acc-link--active active");
    $(".program__acc-text").slideUp();
    $(this).addClass("program__acc-link--active active");
    $(this).children(".program__acc-text").slideDown();
  }
});

// \\\\\\\\\\\\\\\\\\ BURGER \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\ BURGER \\\\\\\\\\\\\\\\\\\\\\\\\\\\

setInterval(() => {
  if (
    $(window).scrollTop() > 0 &&
    $(".header__top").hasClass("header__top--open") === false
  ) {
    $(".burger").addClass("burger--follow");
  } else {
    $(".burger").removeClass("burger--follow");
  }
}, 0);
$(".burger, .overlay").on("click", function (e) {
  e.preventDefault();
  $(".header__top").toggleClass("header__top--open");
  $(".burger").toggleClass("burger-open");
  $(".overlay").toggleClass("overlay--show");
  updateBodyBlockedState();
});
$(".header__top a").on("click", function () {
  $(".header__top").removeClass("header__top--open");
  $(".burger").removeClass("burger-open");
  $(".overlay").removeClass("overlay--show");
  updateBodyBlockedState();
});

// АДАПТИВ footer \\\\\\\\\\\\\\\\\\\\\\\\\\
$(".footer__top-title--slide").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("footer__top-title--on");
  $(this).next().slideToggle();
});
