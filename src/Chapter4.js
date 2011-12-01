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
Chapter4.prototype.startsWith = function(paragraph, startPattern) {
	var end = startPattern.length;
	return startPattern == paragraph.slice(0, end);
};
Chapter4.prototype.catNames = function(paragraph) {
	return paragraph.slice(paragraph.indexOf(":") + 2).split(", ");
};
Chapter4.prototype.extractDate = function(paragraph) {
	function numberAt(start, length) {
		return Number(paragraph.slice(start, start + length));
	}
	return new Date(numberAt(11, 4), numberAt(8, 2) - 1, numberAt(5, 2));
};
