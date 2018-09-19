$('.fa-times').click(function(){
    

       $('.fa-times').removeClass('active')
       $('.fa-times').removeClass('left')
       $('.fa-bars').addClass('active') 
       
       $(".nav").addClass('notActive')
       
});

$('.fa-bars').click(function(){
    


       $('.fa-bars').removeClass('active')
       $('.fa-times').addClass('left')
       $('.fa-times').addClass('active') 
       
       $(".nav").removeClass('notActive')

});



$(".one").click(function(){
   
    $(".slide1").addClass('active1')
    $(".slide2").removeClass('active1')
    $(".slide3").removeClass('active1')
    
    $(".one").addClass('active2')
    $(".two").removeClass('active2')
    $(".three").removeClass('active2')
    
});


$(".two").click(function(){
   
    $(".slide2").addClass('active1')
    $(".slide1").removeClass('active1')
    $(".slide3").removeClass('active1')
    
    $(".two").addClass('active2')
    $(".one").removeClass('active2')
    $(".three").removeClass('active2')
    
});


$(".three").click(function(){
   
    $(".slide3").addClass('active1')
    $(".slide2").removeClass('active1')
    $(".slide1").removeClass('active1')
    
    $(".three").addClass('active2')
    $(".two").removeClass('active2')
    $(".one").removeClass('active2')
    
});







