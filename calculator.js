function calculator(a,operator,b){
    switch(operator){
        case 'add':
            return a + b 
        case 'subtract':
            return a - b 
        case 'divide':
            return a / b 
        case 'multiply':
            return a * b
    }
}

module.exports = calculator