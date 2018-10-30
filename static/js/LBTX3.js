$(function(){
	var i=0;

	$(".m-content-con1 .m-content-wrapx1 .m-content-tab1 .ul3 li").mouseenter(function(){
		$(this).removeClass("z-crt2").addClass("z-crt2").siblings().removeClass("z-crt2");
		var index=$(this).index()
		if(index==0){
			$(".m-content-child .DIVS").stop().animate({left:'0px'},"slow")
		} 
		else if(index==1){
			$(".m-content-child .DIVS").stop().animate({left:'-1190px'},"slow")
		}
		else if(index==2){
			$(".m-content-child .DIVS").stop().animate({left:'-2380px'},"slow")
		}
		else if(index==3){
			$(".m-content-child .DIVS").stop().animate({left:'-3570px'},"slow")
		}
		i = index;
	})
	$(".m-content-child").mouseenter(function(){
		$(".m-content-child .prev3").css("display","block");
		$(".m-content-child .next3").css("display","block");		
	})
	$(".m-content-child").mouseleave(function(){
		$(".m-content-child .prev3").css("display","none");
		$(".m-content-child .next3").css("display","none");		
	})
 	function move(){
 		if(i<0){
 			$(".m-content-child .DIVS").css("left",0);
 			i=0;
 		}
 		if(i>=4){
 			$(".m-content-child .DIVS").animate({left:0},"fast");
 			i=0;
 		}
 		$(".m-content-child .DIVS").stop().animate({left:-i*1190},500);
 		$(".m-content-con1 .m-content-wrapx1 .m-content-tab1 .ul3 li").eq(i).removeClass("z-crt2").addClass("z-crt2").siblings().removeClass("z-crt2");
 	}
 	$(".prev3").click(function(){
 		i--;
 		move();
 		console.log(i);
 	})
 	$(".next3").click(function(){
 		i++;
 		move();
 		console.log(i);
 	})
});