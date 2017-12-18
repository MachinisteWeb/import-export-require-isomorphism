/* jshint esversion: 6 */
;(function () {
	var router = {
		'/index.html': 'index',
		'/about-us.html': 'overview',
		'/contact-us.html': 'contact'
	},
	file = router[location.pathname] || 'error';

	window.module = {};

	window.addEventListener('popstate', function () {
		file = router[location.pathname] || 'error';

		changeRoute(file, true);
	});

	function changeRoute(file, animate) {

		Promise.all([
			fetch('views/' + file + '.htm').then(x => x.text()),
			fetch('views/' + file + '.js').then(x => x.text())
		]).then(function (result) {
			var layout = document.getElementsByClassName('layout'),
				view = result[0],
				model = result[1],
				content = eval(model)(view, window);

			if (animate) {
				layout = layout[layout.length - 1];
				layout.insertAdjacentHTML("afterend", '<div class="layout">' + content.template + "</div>");

				layout.classList.add('change');
				setTimeout(function () {
					layout.parentNode.removeChild(layout);
				}, 1000);
			} else {
				layout.innerHTML = content.template;
			}

			Array.prototype.forEach.call(document.getElementsByTagName('a'), function (a) {
				a.addEventListener('click', function (e) {
					e.preventDefault();
					history.pushState(null, 'Isomporphic example', document.getElementsByTagName('base')[0].getAttribute('href') + a.getAttribute('href'));

					file = router[location.pathname] || 'error';
					changeRoute(file, true);
				});
			});
		});
	}

	changeRoute(file, false);
}());