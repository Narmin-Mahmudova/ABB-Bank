$(() => {
    const path = 'img/'
    const image = ['benovse.jpg', 'coban.jpg', 'lale.jpg', 'nergiz.jpg', 'papatya.jpg', 'qelenfir.jpg', 'zanbaq.jpg', 'zeferan.jpg']
    const slider = $('#slider')
    const w = slider.width()
    const h = slider.height()
    let x = 0
    let timer = setTimeout(change, 0)

    if( !$('style').length ) $('head').append('<style></style>')
    $('style').append(`.active { transform: scale(1.2); border: 3px solid red!important }`)
    
    slider
        .append('<div id="slide"></div>')
        .after('<div id="thumbs"></div>')
        .click(e => {
            x += Math.sign(e.offsetX - w / 2)
            change()
        })
    const slide = $('#slide')
    const thumbs = $('#thumbs')
    slide.css({
        width: '100%',
        height: '100%',
    })
    image.forEach(img => thumbs.append(`<img src='${path}${img}' />`))
    thumbs
        .css({
            display: 'flex',
            justifyContent: 'center'
        })
        .find('img')
            .css({
                width: '30px',
                height: '30px',
                border: '2px solid #fff',
                boxShadow: '0 0 3px #333',
                borderRadius: '50%',
                margin: '5px'
            })
            .click(function(e) {
                x = $(this).index()
                change()
            })
    

    function change() {
        clearTimeout(timer)
        if (x < 0) x = image.length - 1
        if (x >= image.length) x = 0

        slide
            .fadeOut('slow', function() {
                $(this).css('background', `url('${path}${image[x]}') center/cover`)
                thumbChange()
            })
            .fadeIn('slow', function() {
                slider.css('background', `url('${path}${image[x]}') center/cover`)
            })
        
        timer = setTimeout(() => {x++; change()}, 3000) 

    }

    function thumbChange() {
        thumbs.find('img').removeClass('active')
        thumbs.find('img').eq(x).addClass('active')
    }
})