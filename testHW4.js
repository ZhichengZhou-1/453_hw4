var exercises = require('./exercises');
/*
//Test the sum function
var sum = exercises.arrayMethods.sum;
var remove = exercises.arrayMethods.remove;
console.log(sum([1, 2, 3, 4, 'five']));
console.log(sum([1, 2, 3, 4]));

var remove = exercises.arrayMethods.remove;
console.log("\nremove REGULAR output is:" + remove([1,2,3,4,5,], 5));
console.log("remove MULTIPLE output is:" + remove([1,2,3,4,5,6,5,5,10,11], 5));
console.log("remove NON_EXISTENT output is:" + remove([1,2,3,4,5,], 6));

var dup = exercises.arrayMethods.findDuplicates;
console.log("\nfindDuplicates REGULAR output is:" + dup([1,1,3,4,5]));
console.log("findDuplicates REGULAR + STRING output is:" + dup([1,1,3,4,5, 'a', 'c', 'a', 'afewf']));
console.log("findDuplicates Non_EXISTENT output is:" + (dup([1,2,3,4,5])));

var map = exercises.highorderMethods.map;
console.log("\nmap REGULAR output is:" + map([1,2,3], function (num) { return num *2}));
console.log("map REGULAR output is:" + map(['haha', 'me'], function (string) { return string.repeat(2)}));
console.log("map REPLACE output is:" + map(['this', 'me'], function (string) { return string.replace('this', 'me')}));
console.log("map Non_EXISTENT output is:" + map(['this is me', 'bad'], function (string) { return string.replace('c')}));

var filter = exercises.highorderMethods.filter;
console.log("\nfilter REGULAR output is:" + filter([1,2,3], function (num) { return num > 1}));
console.log("filter REGULAR output is:" + filter([-1,-2,-3,4,5], function (num) { return num > 0}));
console.log("filter STRING output is:" + filter(['haha', 'me', 'this'], function (string) { return string === 'me' || string == 'this'}));
console.log("filter Non_EXISTENT output is:" + filter([1,2,3,4,5], function (num) { return num > 5}));

var reduce = exercises.highorderMethods.reduce;
console.log("\nreduce REGULAR output is:" + reduce([1,2,3,4], function (num, running_total) { return num + running_total}, 0));
console.log("reduce REGULAR output is:" + reduce([1,2,3,4], function (num, running_total) { return num * running_total}, 1));

var reduceRight = exercises.highorderMethods.reduceRight;
console.log("\nreduceRight REGULAR output is:" + reduceRight([1,2,3,4,5], function(num, running_total) { return num + running_total}, 0));
console.log("reduceRight REGULAR output is:" + reduceRight([1,2,3,4,5], function(num, running_total) { return running_total - num}, 0));
console.log("reduceRight REGULAR output is:" + reduceRight([1,2,3,4], function(num, running_total) { return running_total / num}), 0);

*/
var stringify = exercises.stringifyMethods.mystringify;
var boo = true;
var obj = {
   backgroundcolor: '#000',
   color: '#fff',
   weekdays: [1,2,3,4],
   function: function(n) {return num}
  };
console.log("\nstringify NUMBER output is:" + stringify(13));
console.log("stringify BOOLEAN output is:" + stringify(boo));
console.log("stringify NULL output is:" + stringify(null));
console.log("stringify STRING output is:" + stringify("hahahaha"));
console.log("stringify ARRAY output is:" + stringify(["q",2,3]));
console.log("stringify OBJECT output is:" + stringify(obj));
console.log("stringify ARRAY FUNCTION output is:" + stringify(["q",2,3, function(num) {return num}]));








