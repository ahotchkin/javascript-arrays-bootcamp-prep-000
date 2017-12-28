var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  const newArray = ['foo', ...array];
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array = ['foo', ...array];
  return array
}

function addElementToEndOfArray(array, element){
  const newArray = [...array, 'foo'];
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array = [...array, 'foo'];
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array){
  const newArray = array.slice(1);
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}
