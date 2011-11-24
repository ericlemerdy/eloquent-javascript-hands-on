function Chapter3() {
}
Chapter3.prototype.absolute = function(i) {
	if (i < 0) {
		return -i;
	}
	return i;
};
Chapter3.prototype.greaterThan = function(limit) {
	return function(i) {
		return i > limit;
	};
};