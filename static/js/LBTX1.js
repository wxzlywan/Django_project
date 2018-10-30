$(function () {
    var i=0;
	$(".m-content-con1 .m-content-wrapx1 .m-content-tab1 .ul1 li").mouseenter(function(){
		$(this).removeClass("z-crt").addClass("z-crt").siblings().removeClass("z-crt");
		var index=$(this).index()
		if(index==0){
			$(".m-content-women .DIVS").stop().animate({left:'0px'},"slow")
		}
		else if(index==1){
			$(".m-content-women .DIVS").stop().animate({left:'-1190px'},"slow")
		}
		else if(index==2){
			$(".m-content-women .DIVS").stop().animate({left:'-2380px'},"slow")
		}
		else if(index==3){
			$(".m-content-women .DIVS").stop().animate({left:'-3570px'},"slow")
		}
		i = index;
	})
	$(".m-content-women").mouseenter(function(){
		$(".m-content-women .prev1").css("display","block");
		$(".m-content-women .next1").css("display","block");
	})
	$(".m-content-women").mouseleave(function(){
		$(".m-content-women .prev1").css("display","none");
		$(".m-content-women .next1").css("display","none");
	})
 	function move(){
 		if(i<0){
 			$(".m-content-women .DIVS").css("left",0);
 			i=0;
 		}
 		if(i>=4){
 			$(".m-content-women .DIVS").animate({left:0},"fast");
 			i=0;
 		}
 		$(".m-content-women .DIVS").stop().animate({left:-i*1190},500);
 		$(".m-content-con1 .m-content-wrapx1 .m-content-tab1 .ul1 li").eq(i).removeClass("z-crt").addClass("z-crt").siblings().removeClass("z-crt");
 	}
 	$(".prev1").click(function(){
 		i--;
 		move();
 		console.log(i);
 	});
 	$(".next1").click(function(){
 		i++;
 		move();
 		console.log(i);
 	});

});

