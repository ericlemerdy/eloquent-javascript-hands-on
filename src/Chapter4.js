function Chapter4() {
	this.cats = {};
}
Chapter4.prototype.addCat = function(catName) {
	this.cats[catName] = true;
};
Chapter4.prototype.isCatAlive = function(catName) {
	return catName in this.cats;
};
Chapter4.prototype.removeCat = function(catName) {
	delete this.cats[catName];
};
Chapter4.prototype.range = function(number) {
	var array = [];
	for (var i = 0; i <= number; i++) {
		array[i] = i;
	}
	return array;
};
Chapter4.prototype.joinAndSplit = function(array) {
	return array.join(" ").split(" ");
};
