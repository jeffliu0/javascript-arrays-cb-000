var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, elem){
  return [elem, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, elem){
  array.unshift(elem)
}

addElementToEndOfArray(array, elem){
  array.push(elem)
}
