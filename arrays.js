var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  const newArray = ['foo', ...array];
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  const array = ['foo', ...array];
  return array
}
