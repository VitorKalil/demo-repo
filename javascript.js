var caixa = $(".box")
caixa.css("background-color","red").css("text-align","center")
$(document).mousemove(function(e){
    let sombraH = 40 - 80*e.pageX/$(window).width()
    let sombraV = 40 - 80*e.pageY/$(window).height()
    let distSombra = (((sombraH**2) + (sombraV**2))**0.5)
    sombraH = sombraH+"px"
    sombraV = sombraV+"px"
    distSombra = distSombra+"px"
    let sombraString = sombraH + " "+ sombraV + " " + distSombra+ " 10px #888"
    caixa.html("Shadow Testing")
    caixa.css("box-shadow",sombraString)
})