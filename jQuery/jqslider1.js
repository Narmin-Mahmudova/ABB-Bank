$(() => {
    const path = 'img/'
    const image = ['benovse.jpg', 'coban.jpg', 'lale.jpg', 'nergiz.jpg', 'papatya.jpg', 'qelenfir.jpg', 'zanbaq.jpg', 'zeferan.jpg']
    const slider = $('#slider')
    const w = slider.width()
    const h = slider.height()
    let x = 0

    slider
        .css({ 
            position: 'relative',
            overflow: 'hidden'
        })
        .append('<div id="ribbon"></div>')
        .append('<div id="thumbs"></div>')
        .click(function(e) {
            if(e.offsetX > w / 2) x++
            else x--
            if (x < 0) x = 0
            if (x > image.length - 1) x = image.length - 1
            change()
        })
    const ribbon = $('#ribbon')
    const thumbs = $('#thumbs')
    ribbon.css({
        display: 'flex',
        position: 'absolute'
    })
    image.forEach(img => {
        ribbon.append(`<img src='${path}${img}' alt='sekil' />`)
        thumbs.append(`<img src='${path}${img}' />`)
    })
    $('#ribbon > img').css({
        width: w + 'px',
        height: h + 'px',
        'object-fit': 'cover'
    })

    thumbs.css({
        position: 'absolute',
        bottom: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    })
    $('#thumbs > img')
        .css({
            width: '30px',
            height: '30px',
            border: '2px solid #fff',
            boxShadow: '0 0 3px #333',
            borderRadius: '50%',
            margin: '5px'
        })
        .click(function(e) {
            e.stopPropagation()
            x = $(this).index() 
            change()
        })

    function change() {
        ribbon.animate({
            left: - w * x + 'px'
        })
    }
})