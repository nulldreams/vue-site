/* global $ */
$(function () {
  console.log($('.video-img').length)
  $('.video-img').on('click', function () {
    $(this).addClass('hide')
    $('.embed-responsive').show().removeClass('hide')
    $('video').each(function () {
      this.play()
    })
  })
})
