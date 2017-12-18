/* jslint node: true */
module.exports = function (template, window) {
	var body = window.document.implementation.createHTMLDocument().body,
		a;

	body.innerHTML = template;

	body.getElementsByTagName('h1')[0].textContent = 'Error page';
	body.getElementsByTagName('p')[0].textContent = 'This is the error page...';
	a = body.getElementsByTagName('a')[0];
	a.textContent = 'Back to the home';
	a.setAttribute('href', './index.html');

	return {
		template: body.innerHTML
	};
};