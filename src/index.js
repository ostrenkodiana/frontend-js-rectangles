'use strict';

function areIntersected(a, b) {
    if (a.top >= (b.top + b.height) ||
        (a.top + a.height) <= b.top ||
        a.left >= (b.left + b.width) ||
        (a.left + a.width) <= b.left) {
        return false;
    } else {
        return true;
    }
};


function filterVisible(a, array) {
    return array.filter(function (element) {
        if (element.width !== 0 && element.height !== 0) {
            return areIntersected(a, element);
        } else {
            return false;
        }
    });
};
