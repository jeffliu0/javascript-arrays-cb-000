var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, elem){
  return [elem, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, elem){
  array.unshift(elem)
}

function addElementToEndOfArray(array, elem){
  return [...array, elem]
}

function destructivelyAddElementFromEndOfArray(array, elem){
  array.push(elem)
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
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
