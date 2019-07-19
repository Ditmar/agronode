$(function() {
	var i=0;
	var index=0;
	var W=Number($(".newformcontent").width());
	
	var moveControl=function(i)
	{
			$(".slice_form").animate({
				"margin-left":-W*i},
				500, function() {
				/* stuff to do after animation is complete */
			});
	}

	$(window).resize(function(){
		W=Number($(".newformcontent").width());
		$(".slice_form").css("margin-left",-W*index)
	});


		$("#last1").keydown(function(e) {
			//alert()
			if(e.which==9)
			{
				moveControl(1);
				//alert("IN");
			}
		});
		$("#repass").keydown(function(e) {
			//alert()
			if(e.which==9)
			{
				moveControl(2);
				//alert("IN");
			}
		});
	$(".navform li").each(function(item, key) {
		$(this).attr('ids',i);
		i++;
		

		$(this).click(function(event) {
			var idsdata=Number($(this).attr('ids'));
			index=idsdata;
			console.log(W);
			$(".slice_form").animate({
				"margin-left":-W*idsdata},
				500, function() {
				/* stuff to do after animation is complete */
			});
		});
	});
});