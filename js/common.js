$(document).ready(function() {

	// АНИМАЦИЯ ПОСЛЕ ЗАГРУЗКИ ДОКУМЕНТА, ВСЕ ВНИЗУ, СЛЕДУЮЩАЯ ФУНКЦИЯ
	

  // ЭТО ПАРАЛЛАКС
	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});

	// ЭТО КАРУСЕЛЬ
  $(".owl-carousel").owlCarousel({
  	loop : true,
  	responsiveClass : true,
  	responsive : {
    0 : {
        items : 1,
        nav : true
       }
     },
    navText : ["<img src='img/l_rew_arr.png'>","<img src='img/r_rew_arr.png'>"],
    navClass : ['owl-prev', 'owl-next']
 });

  // ЭТО МАГНИФИК ПОПАП
  $('.popup').magnificPopup({type:'image'});
  $('.popup_content').magnificPopup();



//МОЯ ВЕРСТКА
function wResize() {
	$("header").css("min-height", $(window).height());
}

wResize();
	$(window).resize(function () {
		wResize()
});

//ВЕРХНИЕ ТАБЫ ТЕЛЕФОН 
$(".top_phone .tab_item").not(":first").hide();
$(".top_phone .wrapper .tab").click(function() {
	$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

//ТАБЫ ХЕДЕРА
$(".tabs_header .tab_item").not(":first").hide();
$(".tabs_header .wrapper .tab").click(function() {
	$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

// ТАБЫ СЕКЦИИ КАК НАС НАЙТИ
$(".s_contacts .tab_item").not(":first").hide();
$(".contacts_top .tab").click(function() {
	$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

// НИЖНИЕ ТАБЫ ТЕЛЕФОН
$(".bottom_phone .tab_item").not(":first").hide();
$(".bottom_phone .wrapper .tab").click(function() {
	$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				magnificPopup.close();
				ths.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});

//ВЫПОЛНЕНИЕ СКРИПТОВ УЖЕ ПОСЛЕ ЗАГРУЗКИ СТРАНИЦЫ; ТУТ АНИМАЦИЯ
$(window).load(function() {
	// headers
	$(".top_header h1").animated("fadeInDown", "fadeInDown");
	$(".top_header h2").animated("fadeInUp", "fadeInUp");
	// header tabs
	$(".tabs_header").animated("fadeInUpBig", "fadeInUpBig");
	// teasers section
	$(".teas_img").animated("slideInLeft", "slideInLeft");
	$(".teas_descr").animated("zoomIn", "zoomIn");
	// trust triggers section
	$(".s_profi h2").animated("fadeInDown", "fadeOutUp");
	$(".profi_item").animated("flipInX", "flipOutX");
	$(".s_profi form").animated("rotateInDownRight", "rotateOutUpRight");
	// s_back section
	$(".s_back h3").animated("fadeInDown", "fadeOutUp");
	// contacts section
	$(".contacts_top").animated("fadeInDown", "fadeOutUp");
	// footer
	$(".f_h2").animated("fadeInDown", "fadeOutUp");
	$(".f_p").animated("fadeInUp", "fadeOutDown");

});