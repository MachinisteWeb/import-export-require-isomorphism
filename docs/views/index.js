/* jslint node: true */
module.exports = function (template, window) {
	var body = window.document.implementation.createHTMLDocument().body,
		links = [{
			href: './about-us.html',
			content: 'Go to about page'
		}, {
			href: './contact-us.html',
			content: 'Go to contact page'
		}, {
			href: './error.html',
			content: 'Try an error page'
		}];

	body.innerHTML = template;

	body.getElementsByTagName('h1')[0].textContent = 'Welcome';
	body.getElementsByTagName('p')[0].textContent = 'This is the welcome page!';
	Array.prototype.forEach.call(body.getElementsByTagName('a'), function (a, i) {
		a.textContent = links[i].content;
		a.setAttribute('href', links[i].href);
	});

	return {
		template: body.innerHTML
	};
};