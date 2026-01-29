function moveZeros(arr) {
  let solution = []
  let zeros = 0
  for ( let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      solution.push(arr[i])
    } else {
      zeros += 1
    }
  }
  for ( let i = 0; i < zeros; i++) {
    solution.push(0)
  }
  return solution
}