
function sum2Min(array) {
	array = array.filter((item) => /^(\-|\+)?\d+(\.\d+)?$/.test(item) );

	if (array.length == 0)
		return "array don't have  number";
	if (array.length == 1)
		return "array don't have second number element";
	const isSorted = function (array_) {
		for (let i = 1; i < array_.length; i++) {
			if (Number(array_[i - 1]) > Number(array_[i])) {
				return false;
			}
		}
		return true;
	};

	if (!isSorted(array)) {
		array.sort((a, b) => Number(a) - Number(b));
	}
	return Number(array[0]) + Number(array[1]);
}
module.exports = sum2Min;
