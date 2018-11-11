$(function () {

$('.cart-detail-number .plus').click(function () {
    var cartid = $(this).attr('cartid')
    var $that = $(this)
    console.log(cartid)

    $.get('/addnumber/',{'cartid':cartid},function (response) {
        console.log(response)
        if (response.status == 1){
            $that.prev().val(response.number)

            $('.subtotal').html(function () {
                var number = parseInt($(this).prev().children('input').val())
                var pricestr = $(this).prev().prev().html()
                var price =  parseInt(pricestr.split('￥')[1])
                var subtotal = number * price
                // console.log(subtotal)
                $(this).html('￥'+ subtotal)
                total()
            })
        }

    })
})


$('.cart-detail-number .minus').click(function () {
    var cartid = $(this).attr('cartid')
    var $that = $(this)
    console.log(cartid)

    $.get('/minusnumber/',{'cartid':cartid},function (response) {
        console.log(response)
        $that.next().val(response.number)
        $('.subtotal').html(function () {
            var number = parseInt($(this).prev().children('input').val())
            var pricestr = $(this).prev().prev().html()
            var price =  parseInt(pricestr.split('￥')[1])
            var subtotal = number * price
            // console.log(subtotal)
            $(this).html('￥'+ subtotal)
            total()
        })
    })

})


$('.subtotal').html(function () {
    var number = parseInt($(this).prev().children('input').val())
    var pricestr = $(this).prev().prev().html()
    var price =  parseInt(pricestr.split('￥')[1])
    var subtotal = number * price
    // console.log(subtotal)
    $(this).html('￥'+ subtotal)
    total()
})


$('.check').click(function () {
    console.log('点击')
    var check = $('.check').length
    var checked = $('.check:checked').length
    if (this.checked==true){
        total()
    } else{
        $('.TTM-all-money span').html('0')
        $('#totalPrice').html('0')
    }

    if(check==checked){
        $(".all-select").prop("checked",true);
        }else{
        $(".all-select").prop("checked",false);
    }

})

 $(".all-select").click(function(){
     // console.log(this);
     if(this.checked==true){
         $(".check").prop("checked",true);
         total()
     }else{
         $(".check").prop("checked",false);
         $('.TTM-all-money span').html('0')
         $('#totalPrice').html('0')
     }


 });

$('.cart-delete').click(function () {
    var cartid = $(this).attr('cartid')
    var $that = $(this)
    $.get('/cartdelete/',{'cartid':cartid},function (resoponse) {
        console.log(resoponse)
        if (resoponse.status == 1){
            console.log($that.parent().parent())
            $that.parent().parent().remove()

        }
    })
})



function total() {
    var sum = 0

    $('.check').each(function () {

        if (this.checked==true){
            // console.log('调用')
           // var subtotalstr = $(this).siblings('.subtotal').html()
            var subtotalstr = $(this).parent().siblings('.subtotal').html()
            // console.log(subtotalstr)
            var subtotal1 = parseInt(subtotalstr.split('￥')[1])
            // console.log(subtotal1)
            sum += subtotal1
            //
            $('.TTM-all-money span').html(sum)
            $('#totalPrice').html(sum)
        }
    })
}

})


