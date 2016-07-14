var sum = 0;

for (var i = 0; i < process.argv.length; ++i) {
	if (i !== 0 && i !== 1)     // why doesn't === && === work?
		sum += Number(process.argv[i]);
}

console.log(sum);





// var arr = proccess.argv.slice(1);

// arr.shift();
// arr.shift();

// console.log(arr.reduce((prev, curr) => Number(prev) + Number(curr)));





// process.argv.reduce(function(prev, curr, index) {
// 	if (index > 1) {
// 		return Number(prev) + Number(curr);        // NaN?!?
// 	}
// });