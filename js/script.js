/* Toggle button hide sidebar */
var toggleIcon = document.querySelector('#toggleIcon');

toggleIcon.addEventListener('click', function() {

	console.log('toggleIcon is working'); /* for debugging/testing */

	var nav = document.querySelector('div.sidebar');
	nav.style.left = '-15%'; /* -150px */

	var main = document.querySelector('main');
	main.style.marginLeft = '-15%';
	main.style.width = '100%';

	var toggleIcon = document.querySelector('#toggleIcon');
	toggleIcon.setAttribute('hidden', 'hidden');

	var	toggleIcon1 = document.querySelector('#toggleIcon1');
	toggleIcon1.removeAttribute('hidden');

});

/* Toggle button hide sidebar */
var toggleIcon1 = document.querySelector('#toggleIcon1');

toggleIcon1.addEventListener('click', function() {

	console.log('toggleIcon1 is working'); /* for debugging/testing */

	var nav = document.querySelector('div.sidebar');
	nav.style.left = '0'; /* -150px */

	var main = document.querySelector('main');
	main.style.marginLeft = '0';
	main.style.width = '85%';

	var toggleIcon = document.querySelector('#toggleIcon');
	toggleIcon.removeAttribute('hidden');

	var	toggleIcon1 = document.querySelector('#toggleIcon1');
	toggleIcon1.setAttribute('hidden', 'hidden');

});

