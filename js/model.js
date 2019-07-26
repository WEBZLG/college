function showModel(){
	$(".modelBg").fadeIn()
}
function hideModel(){
	$(".modelBg").fadeOut()
}
function showModelMain(){
	$(".modelBgMain").fadeIn()
}
function hideModelMain(){
	$(".modelBgMain").fadeOut()
}
$(".close").on("click",function(){
	$(".modelBg").fadeOut()
	$(".modelBgMain").fadeOut()
})