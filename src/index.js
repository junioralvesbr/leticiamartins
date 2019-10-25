$('.item').on('click', function(){
    var categoria = $(this).attr('data-categoria')
    console.log(categoria);
    
    $('item').each(function(){
      if(!$(this).hasClass(categoria)){
        $(this).hide()
      }else{
        $(this).show()
      }
    })
})