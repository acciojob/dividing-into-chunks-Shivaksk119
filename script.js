const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ans = [];
	let subarr = [];
	let currSum = 0;
	for(let i=0;i<arr.length;i++){
		if(currSum+arr[i]>n){
			ans.push(subarr);
			subarr=[];
			currSum=0;
		}
		subarr.push(arr[i])
		currSum += arr[i];
	}
	if(subarr.length>0){
		ans.push(subarr)
	}
	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
