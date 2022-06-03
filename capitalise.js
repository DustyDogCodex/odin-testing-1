function capitalise(str){
    let word = str.toLowerCase()
    return word[0].toUpperCase() + word.slice(1)
}

module.exports = capitalise