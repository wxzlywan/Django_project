// 账号验证
var accountStatus = 0
$('#account').blur(function () {
    $.get('/userinfocheck/',{
        'username': $(this).val()
        },
        function(response){
            console.log(response)
            if (response['statusid'] == '0'){
                $('#userErr').html(response['msg']).css('color','red')
            }
            else if (response['statusid'] == '-1'){
                $('#userErr').html(response['msg']).css('color', 'red')
            }
            else if (response['statusid'] == '-2'){
                $('#userErr').html(response['msg']).css('color', 'red')
            }
            else if (response['statusid'] == '-3'){
                $('#userErr').html(response['msg']).css('color', 'red')
            }
            else if (response['statusid'] == '1'){
                $('#userErr').html(response['msg']).css('color','green')
                accountStatus = 1
                console.log(accountStatus)
            }
    });
});

// 密码验证

var passwordStatus = 0
$('#PassWord').blur(function () {
    var password = $(this).val()
    var reg = /[^a-zA-Z0-9_]+/
    if (password == '') {
        $('#pwdErr').html('密码不可以为空!').css('color','red')
    }
    else if (password.length <6 || password.length >20){
        $('#pwdErr').html('密码长度需要为6~20个字符!').css('color','red')
    }
    else if (reg.test(password)){
        $('#pwdErr').html('请用英文加数字或下划线组合!').css('color','red')
    }
    else{
        $('#pwdErr').html('密码正确!').css('color','green')
        passwordStatus=1
    }

})

// 确认密码验证

var pwdcStatus = 0
$('#passwordconfirm').blur(function () {
    var passwordconfirm = $(this).val()
    var password = $('#PassWord').val()
    var reg = /[^a-zA-Z0-9_]+/
    if (passwordconfirm == '') {
        $('#pwdcErr').html('密码不可以为空!').css('color','red')
    }
    else if (passwordconfirm.length <6 || passwordconfirm.length >20){
        $('#pwdcErr').html('密码长度需要为6~20个字符!').css('color','red')
    }
    else if (reg.test(passwordconfirm)){
        $('#pwdcErr').html('请用英文加数字或下划线组合!').css('color','red')
    }
    else if (passwordconfirm != password) {
        $('#pwdcErr').html('输入的密码不一致').css('color','red')
    }
    else{
        $('#pwdcErr').html('密码正确!').css('color','green')
        pwdcStatus =1
    }
})

//验证码验证
var codeStatus = 0
$('#Txtidcode').blur(function () {
    $.get('/codeVerifyCheck/',{'codeVerify': $(this).val()},function (response) {
        console.log(response)
        if (response.statusid == 1) {
            $('#codeErr').html(response.msg).css('color','green')
            codeStatus=1
        }else if (response.statusid == -1){
            $('#codeErr').html(response.msg).css('color','red')
        }
    })
})

$('#subButton').on('click', function () {
    console.log('注册')
    if (accountStatus && passwordStatus && pwdcStatus && codeStatus){
        $('#registerform').submit()
    }

})





