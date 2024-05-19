const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	if (navigation.style.display=== "block") {
		navigation.style.display="none";
	}
	else {
		navigation.style.display="block";
	}
})

