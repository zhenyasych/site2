$(function(){
  
  $(".menu a").on("click", function (e) {
		//отменяем стандартную обработку нажатия по ссылке
		e.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.slider-blog__inner').slick({
    dots: true,
    arrows: false,
  });

  

$('.menu__btn').on('click', function(){
  $('.header').toggleClass('header--active');
  
});



var mixer = mixitup(".gallery__content");


});

