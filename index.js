'use strict';

// YOU KNOW WHAT TO DO //

/**
 * _.each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

module.exports.each = each;



/**
 *  identity: takes a value and returns it unchanged
 * 
 * @param: {Any Datatype} value: Can be any datatype
 * 
 * @return {Any Datatype}: Will be the same value as our input value
 * 
 **/
 
 function identity(value) {
    return value;
}

module.exports.identity = identity;

/**
 * typeOf: Return the type of <value> as a string.  This will also differentiate
 * between objects, arrays, and null.
 * 
 * @param {any type of input} value: Input of any type
 * 
 * @return {String}: The datatype of the input as a string
 */
 
function typeOf(value) {
  if (typeof value != "object") {
  return typeof value;
} else if (value === null) {
    return "null";
} else if (Array.isArray(value)) {
    return "array";
} else {
    return "object";
}
}

module.exports.typeOf = typeOf;

/**
 * first: Returns a new array with the first number of items of the array.  If
 * the array arg is not an array, it returns an empty array.  If the second
 * input is NaN or not given, it returns the first element of the array.  If
 * the array doesn't have that # of items, it will return the array.
 * 
 * @param {Array} array: An array
 * @param {Number} num: Number of items the user would like as output from the 
 * beginning of the array.
 * 
 * @return {Array}: An array containing the first number of items in the array
 * given.
 */
 
function first(array, num) {
    var newArray = [];
    if (!Array.isArray(array)) {
        return [];
}   
    if (typeof num != "number") {
    return array[0];
}   else {
      for (var i = 0; i < num; i++) {
          if (array[i] != undefined) {
              newArray.push(array[i]);
          }
      }
}
    return newArray;
}

module.exports.first = first;

/**
 * last: Returns a new array with the last number of items of the array.  If
 * the array arg is not an array, it returns an empty array.  If the second
 * input is NaN or not given, it returns the last element of the array.  If
 * the array doesn't have that # of items, it will return the array.
 * 
 * @param {Array} array: An array
 * @param {Number} num: Number of items the user would like as output from the 
 * end of the array.
 * 
 * @return {Array}: An array containing the last number of items in the array
 * given.
 */
 
function last(array, num){
    var newArray = []
    if (!Array.isArray(array)){
        return [];
    } 
    if (typeof num != 'number') {
        return array[array.length -1];
    } else {
        for (var i = array.length - num; i < array.length; i++) {
            if (array[i] != undefined) {
            newArray.push(array[i]);
        }
    }
    }
    return newArray;
}

module.exports.last = last;

/**
 * indexOf: takes an array and a value and iterate through the given array
 * to see if it exists in the array.  Returns the index of where the element 
 * exists first, or -1 if the given value is not in the array.
 * 
 * @param {Array} array: An array
 * @param {Any type of input} value: value to find within the array
 * 
 * @return {Number}: Number telling which index of the array the given value
 * is first found.  -1 represents the value not being found.
 */
 
function indexOf(array, value){
for (var i = 0; i < array.length; i++ ){
    if (array[i] === value){
        return i;
    }
 }
 return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: this function determines whether a given array contains a value and
 * returns a boolean value for whether it is true or not.
 * 
 * @param {Array} array: An array
 * @param {Any type of input} value: value to find within the array
 * 
 * @return {Boolean}: Returns true if the value is in the array,  false otherwise
 */
 
function contains(array, value){
    var result = false;
    for (var i = 0; i < array.length; i++){
       (array[i] === value) ?  result = true : false;
       
    }
    
    return result;
}

module.exports.contains = contains;

/**
 * unique: function returns a new array with all the duplicate entries removed 
 * from the given array
 * 
 * @param {Array} array: An array
 * 
 * @return {Array}: new array with all of the duplicate entries removed
 */
 
function unique(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!newArray.includes(array[indexOf(array, array[i])])) {
            newArray.push(array[i]);
        }
    }    
    return newArray;
}           

module.exports.unique = unique;

/**
 * filter: this function runs another function on each element of an array 
 * and returns the elements which resolved to true.
 * 
 * @param {Array} array: An array
 * @param {Function} func: function to run on each array element.  should resolve
 * to true or false.
 * 
 * @return {Array}: an array of all the elements which resolved to true
 */
 
function filter(array, func) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

module.exports.filter = filter;

/**
 * reject: this function runs another function on each element of an array 
 * and returns the elements which resolved to false.
 * 
 * @param {Array} array: An array
 * @param {Function} func: function to run on each array element.  should resolve
 * to true or false.
 * 
 * @return {Array}: an array of all the elements which resolved to false
 */
 
function reject(array, func){
    let newArr = [];
    let silly = filter(array, func)
    for (var i = 0; i <array.length; i++){
         if (!silly.includes(array[i]))
        newArr.push(array[i]);
       }
    return newArr;
}

module.exports.reject = reject;

/**
 * partition: this function runs another function on each element of an array 
 * and returns an array withe two subarrays:  one for elements of the original
 * array which resolve to truthy; one for elements which resolve to falsey.
 * 
 * @param {Array} array: An array
 * @param {Function} func: function to run on each array element.  should resolve
 * to truthy or falsy.
 * 
 * @return {Array}: an array with two subarrays: one for elements which resolve
 * to truthy; one for elements which resolve to falsey.
 */
 
function partition(array, func){
    let newArray = [];
    let arrTruthy = [];
    let arrFalsy = [];
    for (var i = 0; i < array.length; i++){
        if (func(array[i], i, array) == true) {
            arrTruthy.push(array[i]);
        }else{
            arrFalsy.push(array[i])
           }
    }      
 return newArray = [arrTruthy, arrFalsy];
}

module.exports.partition = partition;

/**
 * map: this function determines whether a given collection is an array or an 
 * object.  If it's an array, it passes in args of element, index, and collection.
 * If it's an object, it passes in value, key, and collection.  Returns an array
 * of the results.
 * 
 * @param {Array or Object} collection: An array or object
 * @param {Function} func: function to run on each element.
 * 
 * @return {Array}: an array with the result of running the function on each
 * element.
 */
 
function map(collection, func) {
   var newArr = [];
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            newArr.push(func(collection[i], i, collection));
        }
    } else {
        for (var key in collection) {
            newArr.push(func(collection[key], key, collection));
        }
    }
 return newArr;
}

module.exports.map = map;

/**
 * pluck: takes an array (of objects) and returns the values for the given 
 * property as a new array
 * 
 * @param {Array} arrOfObj: An array of objects
 * @param {String} string of the property's key: the key of a key/value pair
 * 
 * @return {Array}: an array of values for the given key
 */
 
function pluck(arrOfObj, prop) {
     return map(arrOfObj, function(e){return e[prop]});
    }

module.exports.pluck = pluck;

/**
 * every: returns a booolean of true or false to a series of arrays or objects.
 * returns true only if every element is true 
 * compared to the function or truthy.  Returns false if even one element
 * is false compared to the given function or falsey.
 * 
 * @param {Array or Object} Collection: A collection of arrays or objects
 * @param {Function} func: the function which should return a boolean on each
 * of the arrays or objects
 * 
 * @return {Boolean}}: true if all arrays or objects resolve to true or truthy;
 * false if even one resolves to false or falsey.   If the function is not 
 * provided, it will return true if every element is truthy, otherwise it will
 * return false.
 */
 
function every(collection, func) {
    
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (func != undefined && !func(collection[i], i, collection)) {
                return false;
            } else if (!collection[i]) {
                return false;
            }        
       }
    } else {
        for (var key in collection) {
            if (func != undefined && !func(collection[key], key, collection)) {
                return false;
            } else if (!collection[key]) {
                return false;
            }
        }
    }
return true;
    }

module.exports.every = every;

/**
 * some: returns a booolean of true or false to a series of arrays or objects.
 * returns false only if every element is false
 * compared to the function or falsey.  Returns true if even one element
 * is true compared to the given function or truthy.
 * 
 * @param {Array or Object} Collection: A collection of arrays or objects
 * @param {Function} func: the function which should return a boolean on each
 * of the arrays or objects
 * 
 * @return {Boolean}}: false if all arrays or objects resolve to false or falsey;
 * true if even one resolves to true or truthy.   If the func is not provided, 
 * it will return true if at least one element is truthy, otherwise it will
 * return false.
 */
 
function some(collection, func) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (func != undefined && func(collection[i], i, collection)) {
                return true;
            } else if (collection[i] === true) {
                return true;
            }        
        }  
    } else {
        for (var key in collection) {
            if (func != undefined && func(collection[key], key, collection)) {
                return true;
            } else if (collection[key] === true) {
                return true;
            }
        }
    }
 return false;
}

module.exports.some = some;

/**
 * reduce: takes in an array, a function, and a seed (starting point).  Runs the
 * function for each element of the array successively and replaces the seed with
 * the result for each successive pass.  If there is no seed, it will use the
 * first element as the seed.
 * 
 * @param {Array} array: An array
 * @param {Function} func: the function which should be run on each element of
 * the array
 * @param {Datatype} seed: this will be used as the initial data when the
 * function is passed.  If it is not given, we will start with the first
 * element of the array
 * 
 * @return {Datatype}: This value with be the result of all of the elements
 * run through the function, one at a time, successively
 */
 
function reduce(array, func, seed) {
   if (seed == undefined) {
       seed = array[0];
      for (var i = 1; i < array.length; i++) {
       seed = func(seed, array[i], i);
      }
    return seed;
   }
    for (var i = 0; i < array.length; i++) {
       seed = func(seed, array[i], i);
    }
     return seed;
}

module.exports.reduce = reduce;

/**
 * extend: takes any number of objects as arguments and returns the first object
 * with the properties from all the other objects added to it
 * 
 * @return {Object}: First object updated with all the properties from the
 * successive objects
 */
 
function extend() {
    for (var i = 0; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            arguments[0][key] = arguments[i][key];
        }
    }
    return arguments[0];
}

module.exports.extend = extend;

