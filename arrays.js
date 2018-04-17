var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, elem){
  return [elem, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, elem){
  array.unshift(elem)
  return array
}

function addElementToEndOfArray(array, elem){
  return [...array, elem]
}

function destructivelyAddElementToEndOfArray(array, elem){
  return array.push(elem)
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}

function accessElementInArray(array, index)
{
  return array[index]
}

function removeElementFromBeginningOfArray(array){
  return array.slice()
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}
