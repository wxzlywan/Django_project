$('#account').blur(function () {
    $.get('/userinfocheck/',{
        'username': $(this).val()
        },
        function(response){
            // console.log(response)
            if (response['statusid'] == '0'){
                $('#usererr').html(response['msg']).css('color','red')
            }
            else if (response['statusid'] == '-1'){
                $('#usererr').html(response['msg']).css('color', 'red')
            }
            else if (response['statusid'] == '-2'){
                $('#usererr').html(response['msg']).css('color', 'red')
            }
            else if (response['statusid'] == '-3'){
                $('#usererr').html(response['msg']).css('color', 'red')
            }
            else if (response['statusid'] == '1'){
                $('#usererr').html(response['msg']).css('color','green')
            }
    })
})


















// {#		<script>#}
// {#			$(function(){#}
// {#				$.idcode.setCode(); //加载生成验证码方法#}
// {#	    		$(".Captcha_form").blur(function(){ #}
// {#	    			$(".Captcha_form").css("border-color","#ccc")#}
// {#	        		var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false#}
// {#	        		if(IsBy){#}
// {#	            		/*alert("验证码输入正确")*/#}
// {#	            		#}
// {#	            		console.log("验证码输入正确")#}
// {#	        		}else {#}
// {#	            		/*alert("请重新输入")*/	            		#}
// {#	            		$(".Captcha_form").css("border-color","red")#}
// {#	        		}#}
// {#	    		})#}
// {#	    		$(".text_form").blur(function(){#}
// {#	    			var user=$(".text_form").val();#}
// {#	    			var reg=/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/#}
// {#					if(reg.test(user)&&6<=user.length&&user.length<=20){#}
// {#						$("#user").html("用户名正确！")#}
// {#						$("#user").css("color","#71b83d")#}
// {#					}#}
// {#	    			else{#}
// {#	    				$("#user").html("请输入6-20位非连续字符，支持中文数字及'_'组合。")#}
// {#						$("#user").css("color","red")#}
// {#						return;#}
// {#	    			}#}
// {#	    		})#}
// {#	    		$(".password_form").blur(function(){#}
// {#	    			var Password=$(".password_form").val();#}
// {#	    			var sValue=Password;#}
// {#	    			checkStrong(sValue);	    			#}
// {#	    			var reg=/^([a-z_A-Z-.+0-9]+)$/#}
// {#					if(reg.test(Password)&&6<=Password.length&&Password.length<=20){#}
// {#						$("#PassWord").html("密码正确！")#}
// {#						$("#PassWord").css("color","#71b83d")#}
// {#					}#}
// {#	    			else{#}
// {#	    				$("#PassWord").html("密码为6-20个字符，请用英文加数字或下划线组合！")#}
// {#						$("#PassWord").css("color","red")#}
// {#	    			}#}
// {#	    		})#}
// {#	    		$(".ispassword_form").blur(function(){#}
// {#	    			var isPassword=$(".ispassword_form").val();#}
// {#	    			console.log(isPassword);#}
// {#	    			#}
// {#	    			var Password=$(".password_form").val();#}
// {#	    			console.log(Password);#}
// {#					if(isPassword==Password&&isPassword.length>0){#}
// {#						$("#IsPassWord").html("密码正确！")#}
// {#						$("#IsPassWord").css("color","#71b83d")#}
// {#					}#}
// {#	    			else{#}
// {#	    				$("#IsPassWord").html("输入的密码不一致！")#}
// {#						$("#IsPassWord").css("color","red")#}
// {#	    			}#}
// {#	    		})#}
// {#	    		$(".Register").click(function(){#}
// {#	    			//注册(cookie存储)#}
// {#	    			var Text=/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;#}
// {#	    			var Pasd=/^([a-z_A-Z-.+0-9]+)$/;#}
// {#	    			var IsBy = $.idcode.validateCode();#}
// {#	    			if(!Text.test($(".text_form").val())||!Pasd.test($(".password_form").val())||($(".text_form").val().length>20||$(".text_form").val().length<6)||($(".password_form").val().length>20||$(".password_form").val().length<6)||$(".ispassword_form").val()!=$(".password_form").val()||!IsBy){#}
// {#	    				return;#}
// {#	    			}#}
// {#					var users = $.cookie("users") ? JSON.parse($.cookie("users")) : [];#}
// {#					//先判断是否存在该用户#}
// {#					for (var i=0; i<users.length; i++) {#}
// {#						if ( users[i].name == $(".text_form").val() ) {#}
// {#							$("#user").html("用户名已存在! 不能注册相同的用户");#}
// {#							$("#user").css("color","red")#}
// {#							return;#}
// {#						}#}
// {#						#}
// {#					}#}
// {#					var user = {#}
// {#						name: $(".text_form").val(),#}
// {#						pwd: $(".password_form").val()#}
// {#					}#}
// {#					users.push(user); 					#}
// {#					$.cookie("users", JSON.stringify(users), {expires:10, path:"/"});#}
// {#					console.log( $.cookie("users") );#}
// {#					alert("注册成功");#}
// {#					window.location.href='land.html'#}
// {#	    		})#}
// {#	    		function checkStrong(sValue) {#}
// {#					    var modes = 0;#}
// {#					    $(".password_style span").css("background","#ccc");#}
// {#					    console.log(sValue);#}
// {#					    //正则表达式验证符合要求的#}
// {#					    if (sValue.length < 6) return modes;#}
// {#					    if (/\d/.test(sValue)) modes++; //数字#}
// {#					    if (/[a-z]/.test(sValue)) modes++; //小写#}
// {#					    if (/[A-Z]/.test(sValue)) modes++; //大写  #}
// {#					    if (/\W/.test(sValue)) modes++; //特殊字符#}
// {#					    #}
// {#					   //逻辑处理#}
// {#					    switch (modes) {#}
// {#					        case 1:#}
// {#					        	$(".password_style span").eq(0).css("background","red");#}
// {#					            return 1;#}
// {#					            break;#}
// {#					        case 2:#}
// {#					        	$(".password_style span").eq(0).css("background","red");#}
// {#					        	$(".password_style span").eq(1).css("background","yellow");#}
// {#					            return 2;#}
// {#					            break;#}
// {#					        case 3:#}
// {#					        case 4:#}
// {#					        	$(".password_style span").eq(0).css("background","red");#}
// {#					        	$(".password_style span").eq(1).css("background","yellow");#}
// {#					        	$(".password_style span").eq(2).css("background","greenyellow");#}
// {#					            return sValue.length < 20 ? 3 : 4#}
// {#					            break;#}
// {#					    }#}
// {#					 #}
// {#				}#}
// {#			})			#}
// {#		</script>#}