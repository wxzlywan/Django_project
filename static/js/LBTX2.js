$(function(){

	var i=0;

	$(".m-content-con1 .m-content-wrapx1 .m-content-tab1 .ul2 li").mouseenter(function(){
		$(this).removeClass("z-crt1").addClass("z-crt1").siblings().removeClass("z-crt1");
		var index=$(this).index()
		if(index==0){
			$(".m-content-man .DIVS").stop().animate({left:'0px'},"slow")
		} 
		else if(index==1){
			$(".m-content-man .DIVS").stop().animate({left:'-1190px'},"slow")
		}
		else if(index==2){
			$(".m-content-man .DIVS").stop().animate({left:'-2380px'},"slow")
		}
		else if(index==3){
			$(".m-content-man .DIVS").stop().animate({left:'-3570px'},"slow")
		}
		i = index;
	})
	$(".m-content-man").mouseenter(function(){
		$(".m-content-man .prev2").css("display","block");
		$(".m-content-man .next2").css("display","block");		
	})
	$(".m-content-man").mouseleave(function(){
		$(".m-content-man .prev2").css("display","none");
		$(".m-content-man .next2").css("display","none");		
	})
 	function move(){
 		if(i<0){
 			$(".m-content-man .DIVS").css("left",0);
 			i=0;
 		}
 		if(i>=4){
 			$(".m-content-man .DIVS").animate({left:0},"fast");
 			i=0;
 		}
 		$(".m-content-man .DIVS").stop().animate({left:-i*1190},500);
 		$(".m-content-con1 .m-content-wrapx1 .m-content-tab1 .ul2 li").eq(i).removeClass("z-crt1").addClass("z-crt1").siblings().removeClass("z-crt1");
 	}
 	$(".prev2").click(function(){
 		i--;
 		move();
 		console.log(i);
 	})
 	$(".next2").click(function(){
 		i++;
 		move();
 		console.log(i);
 	})
})