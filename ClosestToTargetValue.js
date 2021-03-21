/**
 * Use this program to search a list of inputs for the value 
 * closest to the target value which can be set by the user.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');

arr=[];
var target = 0; // Set this value as your target value. 

for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);
    arr.push(t);
}
console.log(arr);

if (arr.length==0){
    console.log('0');
}

else{

    var index = 1;
    var closestTemp = 100000000000; //Ensure this number is larger than the largest possible data entry.

    for (var i=0; i<n; i++) {
        if (arr[i]==0){
            console.log('0');
        }
        else{
            if (Math.abs(arr[i]-target) < Math.abs(closestTemp-target)) {
                closestTemp = arr[i];
            }
            if (Math.abs(arr[i]-target) == Math.abs(closestTemp-target)) {
                if (arr[i] > closestTemp) {
                    closestTemp = arr[i];
                }
            }
        }
    }
    console.log(closestTemp);
}
