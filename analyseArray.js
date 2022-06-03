function analyseArray(array){
    const resultingObject = {}
    let sum = array.reduce((prev,curr) => prev + curr,0)
    resultingObject['average'] = sum/array.length
    resultingObject['min'] = Math.min(...array)
    resultingObject['max'] = Math.max(...array)
    resultingObject['length'] = array.length
    return resultingObject
}

module.exports = analyseArray