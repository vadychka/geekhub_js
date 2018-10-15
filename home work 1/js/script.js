var arr = ['first','second','third','fourth'];
console.log(arr);

//pop
arr.pop();
console.log(arr);

//push
arr.push('fourth');
console.log(arr);

//concat
var arr2 = ['fifth','sixth','seventh'];
var All_arr = arr.concat(arr2);
console.log(All_arr);

//indexOf
var Index = All_arr.indexOf('second');
console.log(Index);
var Index = All_arr.indexOf('eighth');
console.log(Index);

//join
console.log(All_arr.join('-'));

//forEach
All_arr.forEach(function (el) {
    console.log(el);
})

//slice
console.log(All_arr.slice(1,6));

//splice
All_arr.splice(2,2, 'THIRD', 'FOURTH');
console.log(All_arr);

//shift
var shiftAll = All_arr.shift();
console.log(All_arr);
console.log(shiftAll);

//unshift
All_arr.unshift('null','first');
console.log(All_arr);