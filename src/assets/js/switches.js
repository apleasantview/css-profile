/* The theme switch.
 *
 * One axis, written as a list of them, because the shape generalises for free:
 * an axis is a storage key, a base value, and the values it cycles through. A
 * second axis is a line here rather than a second copy of this file.
 *
 * There is a second copy of the value list in the pre-paint script in
 * eleventy.config.js. That one has to be inline and standalone in <head> so the
 * attribute lands before the body paints. It cannot import this file without
 * becoming a request, so the duplication is the price of no flash. If you add
 * a value, edit both.
 */
export function switches() {
	var root = document.documentElement;

	/* The base of an axis is an absence rather than a value: following the
	 * system means holding no opinion, so it removes the attribute instead of
	 * setting one. */
	var axes = [{ name: 'theme', base: 'system', values: ['system', 'light', 'dark'] }];

	function current(axis) {
		return localStorage.getItem(axis.name) || axis.base;
	}

	function toggle(axis) {
		return document.querySelector('[data-' + axis.name + '-toggle]');
	}

	function apply(axis, value) {
		if (value === axis.base) {
			delete root.dataset[axis.name];
			localStorage.removeItem(axis.name);
		} else {
			root.dataset[axis.name] = value;
			localStorage.setItem(axis.name, value);
		}
		paint();
	}

	/* Every control repaints on every change, so two controls for the same axis
	 * can never disagree about what is applied. Painting never applies, so they
	 * cannot chase each other. */
	function paint() {
		axes.forEach(function (axis) {
			var button = toggle(axis);
			if (button) button.textContent = axis.name + ' — ' + current(axis);
		});
	}

	axes.forEach(function (axis) {
		var button = toggle(axis);
		if (!button) return;

		button.addEventListener('click', function () {
			var next = axis.values[(axis.values.indexOf(current(axis)) + 1) % axis.values.length];
			apply(axis, next);
		});
	});

	paint();
}
