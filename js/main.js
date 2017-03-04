$(function() {
	//tab选项卡
	$.ajax({
		type:'get',
		url:'data.json',
		success : function(data){
		 	$.each(data.dnf,function(i,n){
		 		console.log(i,n)
		 	})
		 }
	});	 
	$('.lover_vip_list li').eq(0).on('click', function() {
		$('.lover_vip_list li').eq(1).css('background', "url(../img/loveRight.png) no-repeat center top");
		$(this).css('background', 'url(../img/loveLeft.png) no-repeat left top');
		$('.love_lists').css('display', 'none');
		$('.love_lists').eq(0).css('display', 'block');
		$('.all-in-one-sidebar').html('<li>VIP区</li><li>菲利亚</li><li>纳尔斯</li><li>撒拉曼德</li><li>巴内尔特</li><li>电信1区</li><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2602776493&site=qq&menu=yes"><li>联系QQ</li></a>')
	})
	$('.lover_vip_list li').eq(1).on('click', function() {
		$('.lover_vip_list li').eq(0).css('background', "url(../img/loveLeft2.png) no-repeat left top");
		$(this).css('background', 'url(../img/loveRight2.png) no-repeat center top');
		$('.love_lists').css('display', 'none');
		$('.love_lists').eq(1).css('display', 'block');

		$('.all-in-one-sidebar').html('<li>广东一区</li><li>江苏一区</li><li>上海一区</li><li>北京一区</li><li>浙江一区</li><li>福建一区</li><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2602776493&site=qq&menu=yes"><li>联系QQ</li></a>')

	})

	$('.love_first_center li').hover(function() {
		$(this).addClass('love_outline')

	}, function() {
		$(this).removeClass('love_outline')

	})

	$('.all-in-one-sidebar').on('click', 'li', function() {
		$('.all-in-one-sidebar li').removeClass('lover_click');
		$(this).addClass('lover_click');
		if($('.love_lists').eq(0).css('display') == 'block') {
			$('html,body').animate({
				scrollTop: $(".lover_first").eq($(this).index()).position().top + 800
			}, 800);
		}
		if($('.love_lists').eq(1).css('display') == 'block') {
			$('html,body').animate({
				scrollTop: $(".lover_second").eq($(this).index()).position().top + 800
			}, 800);
		}

	})

	$(window).scroll(function() {

		if($('.love_lists').eq(0).css('display') == 'block') {
			function scroll(k) {
				return $(".lover_first").eq(k).position().top;
			};
			if($(window).scrollTop() - 700 < scroll(0)) {
				$('.all-in-one-sidebar li').removeClass('lover_click');
			};

			for(var k = 0; k < 6; k++) {

				if($(window).scrollTop() - 700 > scroll(k)) {
					$('.all-in-one-sidebar li').removeClass('lover_click');

					$('.all-in-one-sidebar li').eq(k).addClass('lover_click');
				}
			};
		}
		if($('.love_lists').eq(1).css('display') == 'block') {
			function scrolls(k) {
				return $(".lover_second").eq(k).position().top;
			};
			if($(window).scrollTop() - 700 < scrolls(0)) {
				$('.all-in-one-sidebar li').removeClass('lover_click');
			};
			for(var k = 0; k < 6; k++) {

				if($(window).scrollTop() - 700 > scrolls(k)) {
					$('.all-in-one-sidebar li').removeClass('lover_click');

					$('.all-in-one-sidebar li').eq(k).addClass('lover_click');
				}
			};
		}

	})

})

window.onscroll = goTop;

/*回到首页的函数*/
function goTop() {

	//兼容IE
	// document.documentElement.scrollTop 是IE的获取页面滚动条的高度
	//document.body.scrollTop是其他浏览器的获取页面滚动条的高度
	var heighs = document.documentElement.scrollTop || document.body.scrollTop;
	var goTop = document.getElementById("goTop");
	//判断如果页面没有下拉就不显示回到顶部
	if(heighs < 686) {
		//				console.log("<200")
		goTop.style.display = "none";
	} else {
		//				console.log("> 200")
		goTop.style.display = "block";
	}

}

function goBack() {
	$('html,body').animate({
		scrollTop: 0
	}, 800);
}