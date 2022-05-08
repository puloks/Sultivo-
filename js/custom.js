// navbar demobox

$("#demobox").click(function(){
    $(".fullscreendemobox").addClass("demoin")
})
$(".demoout").click(function(){
    $(".fullscreendemobox").removeClass("demoin")
})

// navbar loginbox

$("#login").click(function(){
    $(".loginbox").addClass("logincome")
})
$(".loginoutout").click(function(){
    $(".loginbox").removeClass("logincome")
})

// banner slider
$('.bannerslider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
  });
//   service slider

$('.servslider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
  });
//   testimonial slider
$('.testslider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
  });

