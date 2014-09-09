#!/usr/bin/env node

/**
* Create a function to calculate the outcome for two inputs
* (numbers only.)
* @param a , b (numbers only)
* @function 1 add a to b 
* @function 2 subtract b from a 
* @function 3 multiply a and b 
* @function 4 divide b into a 
* @returns solution to function 
* @examples 
* ie) a + b
* ie) a-b
* ie) a*b
* ie) a/b 
**/


var additionCalculator = function(a,b) {
	console.log(a + b)
};

var subtractCalculator = function(a,b) {
	console.log(a - b)
};

var multiplyCalculator = function(a,b) {
	console.log(a * b)
};

var divisionCalculator = function(a,b) {
	console.log(a/b)
};

var program = require('commander');

program
	.version('0.0.1')
	.option('-m, --multiply', 'Multipy two digits')
	.option('-d, --division', 'Divide two digits')
	.option('-s, --subtract', 'Subtract two digits')
	.option('-a, --add', 'Add two digits')
	.parse(process.argv);

var argsArray = process.argv.slice(3);

console.log(argsArray);

if (program.multiply) {
	multiplyCalculator(argsArray[0], argsArray[1])
	};
if (program.add) {
	additionCalculator(argsArray[0], argsArray[1])
	};
if (program.subtract) {
	subtractCalculator(argsArray[0], argsArray[1])
	};
if (program.division) {
	divisionCalculator(argsArray[0], argsArray[1])
	};

// chmod +x index.js




// descibe('calculator()', function() {
// 	it('calculator', function(){
// 		var result = additionCalculator(-a,1,2);
// 		expect(result).to.eql(3)
// 	})
// } )