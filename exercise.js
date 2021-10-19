/*
 * Homework 3 (CS 453)
 * ---------------------------
 *
 * The following code stubs are incomplete. Your job is to complete the
 * functions and achieve the desired functionality described in the comments.
 * Please don't change the names of given functions and object properties, as
 * the autograder will treat them as missing and you will get a zero.
 *
 * While completing this assignment, be sure to use Mozilla Developer Network's
 * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
 */

/*
 * ==========================================================================
 * Exercise 1 - Array Helpers
 *
 * In this exercise we're going to augment the built-in `Array` methods with
 * some useful ones of our own.
 *
 * ==========================================================================
 */

/*
 * Complete the sum function, which sums all the elements in the array and returns the total.
 * Throw an error if an element isn't a Number.
 *
 * Hint: A JavaScript variable `x` is a number if (and only if) typeof x === 'number'.
 */
var sum = function (arr) {
  // Your code goes here.
  let total = 0;
  try {
    for(let i = 0; i < arr.length; i++) {
      if(typeof arr[i] !== 'number') throw 'Illegal argument';
      total += arr[i];
    }
  return total;
  } catch(err) {
    console.log('Error: ' + err);
  }
};

/* Complete the remove function, which takes an array (`arr) and returns
 * a new array which contains the elements of `arr` with `item` removed.
 * HINT: you should use === for comparison, NOT ==.
 *
 * If `arr` contains more than one copy of `item`, remove both.
 * If `arr` doesn't contain `item`, return a copy of `arr`.
 */
var remove = function (arr, item) {
  // Your code goes here
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === item) {
      arr.splice(i,1);
    }
    else {
      i++;
    }
  }
  return arr;
};

/*
 * Complete findDuplicates, which returns all values in an array which occur
 * more than once.
 *
 * For example, if `arr` is [1, 1, 'a', 'b', 'c', 'a'], then findDuplicates(arr)
 * should return [1, 'a']
 */
var findDuplicates = function (arr) {
  // Your code goes here
  const return_array = new Array();
  var i = 0;
  while (i < arr.length) {
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      if (!return_array.includes(arr[i])) {
        return_array.push(arr[i])
      }
    }
    i++;
  }

  if (return_array.length === 0) {
    console.log("No duplicates found\n");
  }

  return return_array;
};

/*
 * ==========================================================================
 * Exercise 2 - Higher Order Functions
 *
 * Let's get some practice with JavaScript functions by implementing some variants
 * of the higher-order functions.
 *
 * Note: JavaScript (since its fifth edition) has built-in map, filter, and reduce functions.
 * This is great because it means you can use them in the other exercises and all your subsequent homeworks!
 * However, I have disabled them for this exercise, so you do have to write the functions yourself =)
 *
 * ==========================================================================
 */

/*
 * First, let's implement map. Map takes in
 * two arguments - an array to perform the mapping on, and the mapping function.
 * It applies the mapping function to all elements in the array and returns an array of results.
 */
var map = function (array, mappingFunction) {
  const return_array = new Array();
  var i = 0;
  while (i < array.length) {
    return_array.push(mappingFunction(array[i]));
    i++;
  }
  if (return_array.length === 0) {
    console.log("no matched result\n");
  }
  return return_array;

  // Your code goes here
};

/*
 * Next, let's implement filter. Filter takes in
 * two arguments - an array to filter, and a filtering function. It returns a list of all
 * elements of the array such that filterFunction(element) === true.
 */
var filter = function (array, filterFunction) {
  const return_array = new Array();
  var i = 0;
  while (i < array.length) {
    if (filterFunction(array[i]) == true) {
      return_array.push(array[i]);
    }
    i++;
  }
  if (return_array.length === 0) {
    console.log("no matched result\n");
  }
  return return_array;
  // Your code goes here
};

/*
 * Next up is reduce (AKA fold). Reduce takes in
 * three arguments - an array to reduce, a reduction function, and a seed value. For every element
 * in the array, the reduction function is applied to the _current_ aggregate value and the element
 * to obtain the _new_ aggregate value. The seed value is thus the _first_ aggregate value, and the
 * result of reduce is the _final_ aggregate value obtained after processing the last element.
 */
var reduce = function (array, reductionFunction, seedValue) {
  var i = 0;
  while (i < array.length) {
    //console.log("seed" + seedValue);
    const temp = reductionFunction(array[i], seedValue);
    //console.log("temp" + temp);
    seedValue = temp;
    i++;
  }
  return seedValue;
  // Your code goes here
};

/* Finally, let's write reduceRight. As you may have guessed, reduceRight is exactly like reduce,
 * except that instead of processing the elements in order (left-to-right), it processes them in
 * reverse order (right-to-left).
 */
var reduceRight = function (array, reductionFunction, seedValue) {
   var i = array.length - 1;
  while (i >= 0) {
    if (i == array.length - 1) {
      seedValue = array[i];
    }
    else{
      console.log("seed" + seedValue);
      const temp = reductionFunction(array[i], seedValue);
      console.log("temp" + temp);
      seedValue = temp;
    }
    i--;
  }
  return seedValue;
  // Your code goes here
};


/*
 * ==========================================================================
 * Exercise 3 - Stringifying Objects
 *
 * For our final exercise, we're going to write a handy function that turns an input value into a
 * string. Specifically, this function will take a 'plain object' - one that has no function
 * properties - and turns it into a string like the one you'd see if you used console.log().
 *
 * There is a built-in way to do this in JavaScript; namely, JSON.stringify. However, we're going
 * to use a slightly different set of rules for our function, so you can't just call this method - sorry!
 *
 * Specifically, you should follow these rules to make a stringify your object:
 *
 * 1. NUMBERS and BOOLEANS are turned into strings directly (e.g. 2.5 -> 2.5, true -> true).
 * 2. STRINGS, as values, should have _single_ quotes around them. Don't worry about escaping
 *    characters like \n, \r, ', et cetera.
 * 3. An ARRAY should be stringified as a left square bracket ('['), followed by its stringified values separated
 *    by commas, followed by a right square bracket (']'). There should be a space following every comma, and there
 *    should be no comma following the final value.
 * 4. An OBJECT should be stringified as a left curly brace ('{'), followed by each of its key value pairs, followed
 *    by a right curly brace ('}'). A key-value pair should be stringified as the key (with no surrounding quotes),
 *    then a colon and a space, and then the stringified value. As with arrays, the key-value pairs should be
 *    separated by commas; there should be a space following every comma, and there
 *    should be no comma and space following the final value.
 * 5. NULL should be stringified as null, and UNDEFINED should be stringified as undefined (no quotes around either).
 * 6. If you ever encounter a function (as the original input value, as an array element, or as an object property),
 *    then you should throw a new Error('Illegal argument').
 *
 * HINT 1: Your function should work for ANY plain JavaScript object you pass it, including base types like
 * numbers/strings. This points towards a pretty slick recursive implementation...
 * HINT 2: Use Object.keys to get the keys of an object to iterate through.
 * HINT 3: You can use `typeof` to get the type of an object (as a string). Read the docs online
 * at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof.
 * HINT 4: typeof doesn't work for Arrays (it just gives you 'object'). Use Array.isArray to differentiate them.
 *
 * ==========================================================================
 */

var stringify = function (object) {
  var type;
  if (object === null) {
    return 'null';
  }
  if (Array.isArray(object) === true) {
    type = 'array';
  }
  else if (typeof(object) === 'function') {
    throw 'Illegal argument';
  }
  else {
    type = typeof(object);
  }
  console.log(type);
  if (type === 'number' || type === 'boolean' || type === 'undefined') {
    console.log(object);
    return object;
  }
  else if (type === 'string') {
    console.log("'" + object + "'");
    var returned_string = "'" + object + "'";
    return returned_string;
  }
  else if (type === 'array') {
    var left_brace = "'[";
    var temp ='';
    var right_brace = "]'";
    for (var i = 0; i < object.length; i++) {
      if (typeof(object[i]) === 'function') {
        throw 'Illegal argument';
      }

      else if (i != object.length - 1) {
        temp += "'" + object[i] + "'" +", ";
      }
      else {
        temp += "'" + object[i] + "'";
      }
    }
    return left_brace + temp + right_brace;
  }
  else if (type === 'object') {
    //console.log(Object.keys(object));
    var key_arr = new Array();
    var value_arr = new Array();
    //var keys = Object.keys(object);
    for (var key in object) {
      key_arr[key_arr.length] = key;
      value_arr[value_arr.length] = object[key];
    }
    //var values = Object.values(object);
    var left_brace = "'{";
    var right_brace = "}'";
    var key_value = '';
    var temp = '';
    console.log(key_arr + "  " + value_arr);
    console.log(key_arr.length);
    for (var i = 0; i < key_arr.length; i++) {
      console.log("check");
      if (typeof(key_arr[i]) === 'function' || typeof(value_arr[i]) === 'function') {
        throw 'Illegal argument';
      }
      if (Array.isArray(value_arr[i]) !== true && i != key_arr.length - 1) {
        key_value += key_arr[i] + ": " + value_arr[i] + ", ";
      }
      else if (Array.isArray(value_arr[i]) !== true) {
        key_value += key_arr[i] + ": " + value_arr[i];
      }
      else {
        for (var j = 0; j < value_arr[i].length; j++) {
          if ( j != value_arr[i].length - 1) {
            temp += "'" + value_arr[i][j] + "'" + ",";
          }
          else {
            temp += "'" + value_arr[i][j] + "'";
          }
        }
        key_value += key_arr[i] + ": " + temp;
      }
    }
    return left_brace + key_value + right_brace;
  }
  // Your code goes here
};

/*
 * NOTE: don't change this code.
 *
 * Export solution as a module.
 */
module.exports = {
  arrayMethods: {
    sum: sum,
    remove: remove,
    findDuplicates: findDuplicates
  },
  highorderMethods: {
    map: map,
    filter: filter,
    reduce: reduce,
    reduceRight: reduceRight
  },
  stringifyMethods: {
    mystringify:stringify
  }
};

