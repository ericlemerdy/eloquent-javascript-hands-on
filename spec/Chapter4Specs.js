/**
 * @see http://eloquentjavascript.net/chapter4.html
 */
describe("Chapter 4", function() {
	var chapter4 = null;

	beforeEach(function() {
		chapter4 = new Chapter4();
	});

	it("should demonstrate properties access", function() {
		var text = "0123456789";
		expect(text["length"]).toBe(10);
		expect(text.length).toBe(10);
	});

	it("should produce error trying to access property on null", function() {
		var text = null;
		try {
			text.length;
		} catch (e) {
			expect(e.message).toBeDefined();
			expect(e.name).toBe('TypeError');
		}
	});

	it("is possible to remove properties on an object", function() {
		var cat = {
			colour : "grey",
			name : "Spot",
			size : 46
		};
		expect(cat.size).toBe(46);
		delete cat.size;
		expect(cat.size).toBe(undefined);
		expect(cat).toEqual({
			colour : "grey",
			name : "Spot",
		});
	});

	it("is possible to add properties on an object", function() {
		var empty = {};
		expect(empty).toEqual({});
		empty.notReally = 1000;
		expect(empty.notReally).toBe(1000);
	});

	it("is possible to define keys as string when not legal variable names", function() {
		var thing = {
			"5" : 10
		};
		expect(thing["5"]).toBe(10);
		thing["5"] = 20;
		expect(thing[2 + 3]).toBe(20);

		var thing = {
			"foo bar" : "polka"
		};
		expect(thing["foo bar"]).toBe("polka");
	});

	it("can use variable to access property", function() {
		var propertyName = "length";
		var text = "0123456789";
		expect(text[propertyName]).toBe(10);
	});

	it("should use 'in' operator to verify properties", function() {
		var chineseBox = {};
		chineseBox.content = chineseBox;
		expect("content" in chineseBox).toBeTruthy();
		expect("content" in chineseBox.content).toBeFalsy;
	});

	it("#4.1 should use properties to specify cat names", function() {
		expect(chapter4.cats).toEqual({});
		chapter4.addCat("tom");
		expect(chapter4.cats).toEqual({
			"tom" : true
		});

		expect(chapter4.isCatAlive("tom")).toBeTruthy();
		expect(chapter4.cats).toEqual({
			tom : true
		});

		chapter4.removeCat("tom");

		expect(chapter4.isCatAlive("tom")).toBeFalsy();
		expect(chapter4.cats).toEqual({});
	});

	it("should demonstrate values and reference", function() {
		var object1 = {
			value : 10
		};
		var object2 = object1;
		var object3 = {
			value : 10
		};

		expect(object1 == object2).toBeTruthy();
		expect(object1 == object3).toBeFalsy();

		object1.value = 15;
		expect(object2.value).toBe(15);
		expect(object3.value).toBe(10);
	});

	it("#4.2 creating an array", function() {
		expect(chapter4.range(0)).toEqual([ 0 ]);
		expect(chapter4.range(1)).toEqual([ 0, 1 ]);
		expect(chapter4.range(4)).toEqual([ 0, 1, 2, 3, 4 ]);
	});

	it("has pre-defined methods", function() {
		var doh = "foo bar";
		expect(typeof doh.toUpperCase).toBe("function");
		expect(doh.toUpperCase()).toBe("FOO BAR");
	});

	it("should demonstrate arrays function", function() {
		var mack = [];
		mack.push("foo");
		mack.push("bar");
		mack.push("polka");
		expect(mack.join(" ")).toBe("foo bar polka");
		expect(mack.pop()).toBe("polka");
		expect(mack).toEqual([ "foo", "bar" ]);
	});

	it("should split word of a phrase", function() {
		var words = "Cities of the Interior";
		expect(words.split(" ")).toEqual([ "Cities", "of", "the", "Interior" ]);
	});

	it("#4.3 split and join are not each's other inverse", function() {
		var exemple = [ "eric", "n'est pas", "fort" ];
		var actual = chapter4.joinAndSplit(exemple);
		expect(actual).toNotEqual(exemple);
		expect(actual).toEqual([ "eric", "n'est", "pas", "fort" ]);
	});

	it("shoud implement startswith", function() {
		var paragraph = "born 15-11-2003 (mother Spot): White Fang";
		expect(paragraph.charAt(0) == "b" && paragraph.charAt(1) == "o" && paragraph.charAt(2) == "r"
				&& paragraph.charAt(3) == "n").toBeTruthy();
	})
});