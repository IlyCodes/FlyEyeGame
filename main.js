$(document).ready(function(){
    function tellPos(p){
        console.log( p.pageX,  p.pageY);
        $('#img').animate({left:p.pageX, top:p.pageY},20);
        $('#elem').animate({left:p.pageX, top:p.pageY},20);
        $('div').ready(function(){
            $('.point').animate({left:p.pageX, top:p.pageY},20);
        });
    }
    addEventListener('mousemove', tellPos, false);

    var p = $('#img, #elem').offset();
    p.top = 100;
    p.left = 100;
    $('#img, #elem').offset(p);

    // $('#img, #elem').click(function(){

    //     p.top = Math.random()*1000;
    //     p.left = Math.random()*700;
    //     $('#img').animate({left:p.left, top:p.top},1000);
    //     $('#elem').animate({left:p.left, top:p.top},1100);

    // });
    
    $(document).scroll(function(){

        alert('Scroll Detected!!');

    });

});