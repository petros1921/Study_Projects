$(document).ready(function() {
  $("footer").mouseenter(function() {
    $("ul").hide();
  })
  $("div").mouseleave(function() {
    $("ul").show();
  })
});

$(function() {
  $("p").click(function() {
    console.log("You clicked on a paragraph");
  })
});
  
$(function() {
  $("h1").click(function() {
    $("h1").css('color', '#FF0000');
  })
});
  
$("h1").hide();
$("h1").fadeIn(2000, function() {
  $(this).addClass("black");
});
$("p").on("click", function() {
  $("h1").stop();
});

//$("p").hide(500).delay(1000).show(300);
$("h1").click(function() {
  $("ul").animate({
    opacity: .5,
    marginLeft: '+=100',
    height: "200px"
  }, 3000, 'linear', function() {
    alert("Animation is complete.");
  })
});

$("p").click(function(){
  $("div")
  .animate({width: "70%"}, 2000)
  .animate({fontSize: "40px"}, 2000)
  .animate({borderLeftWidth: "30px"}, 2000)
});
$("h1")
  .append("<span> Legesse</span>")
  .before("<span> Hello</span>")
  .after("<span> World!</span>")
  .prepend("<span>Hello </span>")
$("p").append('<b> Bro</b>' + '<i>Code</i>')
//$("p").remove('.first')

$(document).ready(function() {
  $("button").click(function() {
    $('p.first').css("font-size", "30px");
  });
  $('p.first').css({
    color: "yellow",
    //backgroundColor: "blue"
  });
});
$(document).ready(function(){
  $("button").click(function() {
    $("h1").addClass("green");
  });
});

//$("footer").children().css({"color": "", "border": "2px solid red"});
$("div").click(function() {
  $("div").load("https://www.w3schools.com/jquery/jquery_ref_css.asp")
});

