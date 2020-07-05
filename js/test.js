(() => {
	document
		.querySelector('.js-speaker-form')
		.addEventListener('submit', e => {
			e.preventDefault();

			new FormData(e.currentTarget).forEach((value, name) =>
				console.log(`${name}: ${value}`),
			);

			e.currentTarget.reset();
		});
})();
(() => {
	document
		.querySelector('.js-footer-form')
		.addEventListener('submit', e => {
			e.preventDefault();

			new FormData(e.currentTarget).forEach((value, name) =>
				console.log(`${name}: ${value}`),
			);

			e.currentTarget.reset();
		});
})();
(() => {
	document
		.querySelector('.js-portfolio-form')
		.addEventListener('submit', e => {
			e.preventDefault();

			new FormData(e.currentTarget).forEach((value, name) =>
				console.log(`${name}: ${value}`),
			);

			e.currentTarget.reset();
		});
})();