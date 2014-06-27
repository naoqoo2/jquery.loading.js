(function() {
	jQuery.fn.loading = function(config){

		if($('.loading').size() == 0){
			//bodyタグにloading用のタグ作成
			var $loadingObj = $('<div/>').addClass('loading');
			var $styleObj = $('<style/>').attr('type', 'text/css');
			$loadingObj.append($styleObj);
			$('body').append($loadingObj);
			$('.loading').css({
				color: '#000',
				backgroundColor: '#fff',
				position: 'absolute',
				display: 'block',
				left: 0,
				top: 0,
				opacity: 0.5,
				width: '100%',
				height: '100%',
				zIndex: 100
			});
			$('.loading').hide();
		}
		
		var myObj = new Object();
		
		myObj.start = function () {
			$('.loading').show();
			try{
				$('.loading').activity();
			}catch(e){
				
			}
		}
		myObj.end = function () {
			$('.loading').hide();
		}
		return myObj;

	};

})(jQuery);
