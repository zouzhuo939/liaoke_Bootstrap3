$(function() {
	$(window).on("resize", function() {
		// 获取窗口的宽度
		let clientW = $(window).width();
		// 设置显示小图或者大图的临界值
		let isShowBigImage = clientW >= 800;
		// 获取所有的item
		let $allItem = $("#lk_carousel .item");
// 遍历
		$allItem.each(function(index, item) {
			// 取出图片的路径
			let src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img"); 
			let imgUrl = 'url("' + src +'")';
			// 设置背景
			$(item).css({
				backgroundImage: imgUrl	
			});
			
			// 设置img标签
			if(!isShowBigImage){
				let $img = "<img src = '" + src + "'>";
				$(item).empty().append($img);
			}else{
				$(item).empty();
			}

		});
	});
	// 调用方法
	$(window).trigger("resize");
	$('.carousel').carousel({
	  interval: 500
	})
});
