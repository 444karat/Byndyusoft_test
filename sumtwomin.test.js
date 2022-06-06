const sum2min = require('./index.js');

describe('Array', () => {
	describe('[1,2,3,4,5,6,7,8,9,0]', () => {
		it('should return 1 ', done => {
			const exeptResult = 1;
			const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
			if (exeptResult == sum2min(testArray)) {
				done();
			}
		});
	});
	describe('[]', () => {
		it('should return \"array don\'t have  number\"', done => {
			const exeptResult = 'array don\'t have  number';
			const testArray = [];
			if (exeptResult == sum2min(testArray)) {
				done();
			}
		});
	});
	describe('[\'hello\',\'world\',\'test\',1]', () => {
		it('should return \"array don\'t have second number element\"', done => {
			const exeptResult = 'array don\'t have second number element';
			const testArray = ['hello', 'world', 'test', 1];
			if (exeptResult == sum2min(testArray)) {
				done();
			}
		});
	});
	describe('[\'hello\',\'world\',\'test\',1000,1000,1230,1204,2305,2354,1000,-7]', () => {
		it('should return 993', done => {
			const exeptResult = 993;
			const testArray = ['hello', 'wo-123rld', 'test', 1000, 1000, 1230, 1204, 2305.123, 2354.123, 1000, -7];
			if (exeptResult == sum2min(testArray)) {
				done();
			}
		});
	});
	describe('[0,\'0\',1,1]', () => {
		it('should return 0 ', done => {
			const exeptResult = 0;
			const testArray = [0, '0', 1, 1];
			if (exeptResult == sum2min(testArray)) {
				done();
			}
		});
	});
});
