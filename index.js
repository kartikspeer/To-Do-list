
$(".input").change(function(){
    var input = $(this).val();
    $('ul').append('<li> <i class="fa fa-check" aria-hidden="true"></i>' + input + '  <i class="fa fa-trash" aria-hidden="true"></i> </li>');
    $(this).val('');
})

$('ul').on('click','.fa-trash',function(){
    $(this).parent('li').fadeOut(200);
})

$('ul').on('click','.fa-check',function(){
    $(this).parent('li').toggleClass('Checked');
    // $('fa-check').addClass('checkTick');
})