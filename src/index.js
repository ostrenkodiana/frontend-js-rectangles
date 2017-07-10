'use strict';

function areIntersected(rectangleA, rectangleB) {


	if (rectangleA.top >= (rectangleB.top + rectangleB.height) ||
		(rectangleA.top + rectangleA.height) <= rectangleB.top ||
		rectangleA.left >= (rectangleB.left + rectangleB.width) ||
		(rectangleA.left + rectangleA.width) <= rectangleB.left) {
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
