
// \\\\\\\\\\\\\\\\\\\\\\ DIRECTIONS FILTER  \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\ DIRECTIONS FILTER  \\\\\\\\\\\\\\\\\\\\\\\\\\\\

  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active');
    $(this).addClass('directions__filter-btn--active')
  });

// \\\\\\\\\\\\\\\\\\\\\\  YOUTUBE PLAYER  \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\  YOUTUBE PLAYER  \\\\\\\\\\\\\\\\\\\\\\\\\\\\

  // Инициализация fancybox для всех элементов с атрибутом data-fancybox
  Fancybox.bind('[data-fancybox]', {
    // Здесь можно добавить свои настройки, например:
    Toolbar: {
      display: ['close'],
    },
  });
  
// \\\\\\\\\\\\\\\\\\\\\\  SLIDER TEAM  \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\  SLIDER TEAM  \\\\\\\\\\\\\\\\\\\\\\\\\\\\

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false, 
    waitForAnimate: true,
    speed: 300,
  })
  $('.team__slider-prev').on('click', function (e){
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })

  $('.team__slider-next').on('click', function (e){
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })

// \\\\\\\\\\\\\\\\\\\\\\  SLIDER TESTIMONIALS \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\  SLIDER TESTIMONIALS \\\\\\\\\\\\\\\\\\\\\\\\\\\\

  $('.testimonials__slider').slick({
    arrows:false,
    dots: true,
    appendDots: $('.testimonials__dots'),
    waitForAnimate: true,
    speed: 500,
  })

  $('.testimonials__prev').on('click', function (e){
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })

  $('.testimonials__next').on('click', function (e){
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

// \\\\\\\\\\\\\\\\\\\\\\  ACCORDEON \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\  ACCORDEON \\\\\\\\\\\\\\\\\\\\\\\\\\\\

// НЕ АККОРДЕОН НО ТОП ФУЛЛ ОПЕН НАРМАЛДАКИ
  // $('.program__acc-link').on('click', function (e){
  //   e.preventDefault()
  //   $(this).toggleClass('program__acc-link--active')
  //   $(this).children('.program__acc-text ').slideToggle()
  // })

// АККОРДЕОН НО НЕ ТОП МНЕ НЕ НРАВКИ ХОТЯ БУДТО НЕПЛОХО И ОН НЕ ФУЛЛ ОПЕН
$('.program__acc-link').on('click', function (e){
    e.preventDefault()
    if ($(this).hasClass('program__acc-link--active active')) {
      $(this).removeClass('program__acc-link--active active')
      $(this).children('.program__acc-text').slideUp()
    }
    else {
      $('.program__acc-link').removeClass('program__acc-link--active active')
        $('.program__acc-text').slideUp()
        $(this).addClass('program__acc-link--active active')
        $(this).children('.program__acc-text').slideDown()
      }
  })