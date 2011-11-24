/**
 * @see http://eloquentjavascript.net/chapter3.html
 */
describe("Chapter 3", function() {
	var chapter3 = null;

	beforeEach(function() {
		chapter3 = new Chapter3();
	});

	it("should be able to compute absolute value of an integer", function() {
		expect(chapter3.absolute(-4)).toBe(4);
		expect(chapter3.absolute(5)).toBe(5);
		expect(chapter3.absolute(0)).toBe(0);
	});

	it("should return a function", function() {
		var greaterThanFour = chapter3.greaterThan(4);
		expect(greaterThanFour(3)).toBeFalsy();
		expect(greaterThanFour(4)).toBeFalsy();
		expect(greaterThanFour(5)).toBeTruthy();
	});

});