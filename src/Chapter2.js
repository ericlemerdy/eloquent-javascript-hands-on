function Chapter2() {
}
Chapter2.prototype.twoPow = function(pow) {
	var i = 0;
	var result = 1;
	while (i < pow) {
		result = result * 2;
		i++;
	}
	return result;
};
Chapter2.prototype.twoPowWithALoopImplementation = function (pow) {
	for (var i = 0, result = 1; i < pow; i++) {
		result = result * 2;
	}
	return result;
};
Chapter2.prototype.triangle = function() {
	var i = 0;
	var result = "";
	var line = "";
	while (i < 10) {
		line += "#";
		result += line + "\n";
		i++;
	}
	return result;
};
Chapter2.prototype.triangleWithAForLoopImplementation = function() {
	for (var i = 0, result = "", line = ""; i < 10; i++) {
		line += "#";
		result += line + "\n";
	}
	return result;
};
Chapter2.prototype.guessTwoPlusTwo = function(guess) {
	if (guess == 4) {
		return "True!";
	}
	if (guess == 3 || guess == 5) {
		return "Almost!";
	}
	return "You are cold...";
};