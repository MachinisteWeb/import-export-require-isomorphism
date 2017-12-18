/* jslint node: true */
module.exports = function (template, window) {
	var body = window.document.implementation.createHTMLDocument().body,
		a;

	body.innerHTML = template;

	a = body.getElementsByTagName('a')[0];
	a.textContent = 'Back to the home';
	a.setAttribute('href', './index.html');

	body.getElementsByTagName('h1')[0].textContent = 'Contact US';
	body.getElementsByTagName('p')[0].innerHTML = 'You can contact us by using the following email: <a href="mailto:bruno.lesieur@gmail.com">bruno.lesieur@gmail.com</a>';

	return {
		template: body.innerHTML
	};
};