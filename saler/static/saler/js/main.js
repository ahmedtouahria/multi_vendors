// main menu sliding code

document.getElementById('main').addEventListener('mousemove',function(e){
	if (document.body.offsetWidth<1024){
	if (e.offsetX <= 40) {
		document.getElementById('nav').style.left = "0";
		document.getElementById('main').style.marginLeft = "40px";
	}
	else{
		document.getElementById('main').style.marginLeft = "0";
		document.getElementById('nav').style.left = "-40px";
		document.getElementById('menu').style.display='none';
		document.getElementById('nav').firstElementChild.style.color = '#fff';
		document.getElementById('wallet').style.left = '-400px';

	}
  }
})

