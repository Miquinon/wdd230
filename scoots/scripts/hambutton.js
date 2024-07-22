const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.nav');


hambutton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hambutton.classList.toggle('open');

	if (navigation.style.display==="block") {
		navigation.style.display="none";
	}
	else {
		navigation.style.display="block";
	}
	function resetMenu(){
		if(window.innerWidth >= 800){
			document.querySelector('.nav').style.display= 'flex';
		}	else if (window.innerWidth < 800) {
			document.querySelector('.nav').style.display= 'none';
		}
	}
	window.addEventListener('resize', resetMenu);
});