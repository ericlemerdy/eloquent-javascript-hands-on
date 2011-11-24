/**
 * @see http://eloquentjavascript.net/chapter2.html
 */
describe("Chapter 2", function() {
	var chapter2 = null;

	beforeEach(function() {
		chapter2 = new Chapter2();
	});

	it("should be able to calculate 2^10", function() {
		var expectedNumber = 1024;
		expect(chapter2.twoPow(10)).toEqual(expectedNumber);
		expect(chapter2.twoPowWithALoopImplementation(10)).toEqual(expectedNumber);
	});

	it("should be able to print a triangle", function() {
		var expectedTriangle = //
		"#\n" + //
		"##\n" + //
		"###\n" + //
		"####\n" + //
		"#####\n" + //
		"######\n" + //
		"#######\n" + //
		"########\n" + //
		"#########\n" + //
		"##########\n";
		expect(chapter2.triangle()).toEqual(expectedTriangle);
		expect(chapter2.triangleWithAForLoopImplementation()).toEqual(expectedTriangle);
	});

	it("should be able to react on operation", function() {
		expect(chapter2.guessTwoPlusTwo(4)).toEqual("True!");
		expect(chapter2.guessTwoPlusTwo(3)).toEqual("Almost!");
		expect(chapter2.guessTwoPlusTwo(5)).toEqual("Almost!");
		expect(chapter2.guessTwoPlusTwo(42)).toEqual("You are cold...");
	});

	it("should demonstrate equal operator", function() {
		expect(false == 0).toBeTruthy();
		expect(false == 1).toBeFalsy();

		expect("" == 0).toBeTruthy();
		expect("" == 1).toBeFalsy();

		expect("5" == 5).toBeTruthy();
		expect("4" == 5).toBeFalsy();
	});

	it("should equals with type check", function() {
		expect(null === undefined).toBeFalsy();
		expect(null === null).toBeTruthy();
		expect(undefined === undefined).toBeTruthy();

		expect(false === 0).toBeFalsy();
		expect(false === true).toBeFalsy();
		expect(false === false).toBeTruthy();

		expect("" === 0).toBeFalsy();
		expect("" === " ").toBeFalsy();
		expect("" === '').toBeTruthy();

		expect("5" === 5).toBeFalsy();
		expect("5" === 4).toBeFalsy();
		expect("5" === '5').toBeTruthy();
	});

	it("should explain automatic type conversion", function() {
		expect("Apollo" + 5).toEqual("Apollo5");
		expect(null + "ify").toEqual("nullify");
		expect("5" * 5).toEqual(25);
	});

});