//task2
// Реализуйте функцию sum
function sum() {
  	result = 0;
	for (let i = 0; i < this.length; i++) {
    		result += this[i];
	}
	return result;
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));