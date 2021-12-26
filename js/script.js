const windowWidth = $(window).innerWidth()
if (windowWidth > 500) {
  $(window).scroll(() => {
    const windowHeight = $(window).innerHeight()
    if ($('.portfolio').position().top - windowHeight + $('.portfolio').height() / 2 <= $(window).scrollTop()) {
      $('.portfolio__content').addClass('slide-in-left')
      $('.portfolio__img').addClass('slide-in-right')
    }
    if ($('.adv').position().top - windowHeight + $('.adv').height() / 2 <= $(window).scrollTop()) {
      $('.adv__item').eq(0).addClass('slide-in-left')
      $('.adv__item').eq(1).addClass('fade-in')
      $('.adv__item').eq(2).addClass('slide-in-right')
    }
    if ($('.earn').position().top - windowHeight + $('.earn').height() / 2 <= $(window).scrollTop()) {
      $('.earn__img').addClass('slide-in-left')
      $('.earn__content').addClass('slide-in-right')
    }
    if ($('.offer').position().top - windowHeight + $('.offer').height() / 2 <= $(window).scrollTop()) {
      $('.offer').addClass('fade-in')
    }
  })
}