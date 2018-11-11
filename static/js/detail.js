$('#addcart').click(function () {
    var goodsid = $(this).attr('goodsid')
    var color = $('.shop_color span[isselect="true"]').html()
    var size = $('.shop_size span[isselect="true"]').html()
    var number = $('.shop_num input').val()
    console.log(size)
    console.log(color)
    console.log(goodsid)

    $.get('/addcart/', {'goodsid': goodsid, 'color': color, 'size': size, 'number': number}, function (response) {
        console.log(response)
        if (response.status == 1) {
            window.open('/addcartsuccess/'+goodsid+'/'+size+'/'+number+'/'+color+'/',target='_self')
        }else if (response.status == -1){
            window.open('/login/',target='_self')
        }
    })


})
$('.shop_size span').click(function () {
    // console.log($(this))
    var sizeisselect = $(this).attr('isselect',true)
    // console.log(sizeisselect)
    var sizeisnotselect = $(this).siblings().attr('isselect',false)
    // console.log(sizeisnotselect)
})

$('.shop_color span').click(function () {
    var colorisselect = $(this).attr('isselect',true)
    // console.log(colorisselect)
    var colorisnotselect = $(this).siblings().attr('isselect',false)

})

$('#minus').click(function () {
    var number = $('.shop_num input').val()
    if (number > 1){
        $('.shop_num input').val(number-1)
    }else {
        $('.shop_num input').val(1)
    }
})

$('#plus').click(function () {
    var number = $('.shop_num input').val()

    $('.shop_num input').val(parseInt(number)+1)
})


