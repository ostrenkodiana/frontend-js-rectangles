'use strict';

function areIntersected(rectangleA, rectangleB) {

	function bottom(rectangle) {
		return rectangle.top + rectangle.height;
	}

	function right(rectangle) {
		return rectangle.left + rectangle.width;
	}

	if (rectangleA.top >= bottom(rectangleB) ||
		bottom(rectangleA) <= rectangleB.top ||
		rectangleA.left >= right(rectangleB) ||
		right(rectangleA) <= rectangleB.left) {
		return false;
	} else {
		return true;
	}
}

function filterVisible(rectangleA, array) {
	return array.filter(function (element) {
		if (element.width !== 0 && element.height !== 0) {
			return areIntersected(rectangleA, element);
		} else {
			return false;
		}
	});
}

console.log(filterVisible);
