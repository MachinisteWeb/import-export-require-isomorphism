/* jshint node: true */
var http = require('http'),
	fs = require('fs'),
	JSDOM = require('jsdom').JSDOM,
	httpPort = 8080,
	httpDomain = 'localhost';

http.createServer(function (request, response) {
	var router,
		file,
		statusCode,
		contentType;

	if (/\/$/g.test(request.url)) {
		router = {
			'/': 'index',
			'/about-us/': 'overview',
			'/contact-us/': 'contact'
		};

		file = router[request.url] || 'error';

		statusCode = (router[request.url]) ? 200 : 404;

		fs.readFile('layout.htm', function (err, layout) {
			if (err) {
				console.log('We cannot open layout file.', err);

				response.writeHead(500, {});
				response.end('');
			}

			fs.readFile('views/' + file + '.htm', 'utf-8', function (err, content) {
				var dom = new JSDOM(layout);

				if (err) {
					console.log('We cannot open ' + file + ' view file.', err);
				}

				dom.window.document.getElementsByTagName('base')[0]
					.setAttribute('href', 'http://' + httpDomain + ':' + httpPort + '/');

				dom.window.document.getElementsByClassName('layout')[0]
					.innerHTML = require('./views/' + file + '.js')(content, dom.window).template;

				response.writeHead(statusCode, {
					'Content-Type': 'text/html; charset=utf-8'
				});

				response.end(dom.serialize());
			});
		});
	} else {
		file = request.url.slice(1);

		fs.readFile(file, 'utf-8', function (err, content) {
			statusCode = 200;
			contentType = {};

			if (/\.(m)js$/g.test(file)) {
				contentType = {
					'Content-Type': 'application/javascript; charset=utf-8'
				};
			}

			if (/\.htm$/g.test(file)) {
				contentType = {
					'Content-Type': 'text/html; charset=utf-8'
				};
			}

			if (err) {
				statusCode = 404;
				contentType = {};
				content = '';

				console.log('We cannot open ' + file + ' asset file.', err);
			}

			response.writeHead(statusCode, contentType);

			response.end(content);
		});
	}
}).listen(httpPort, function () {
	console.log('Server listening on: http://' + httpDomain +':' + httpPort + '/');
});