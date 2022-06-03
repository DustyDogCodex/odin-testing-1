const capitalise = require('./capitalise')
const reverseString = require('./reverseString')
const calculator = require('./calculator')
const caesarCipher = require('./caesarCipher')

test('testing capitalisation of string', () => {
    expect(capitalise('varun')).toBe("Varun")
})

test('reversing a given string', () => {
    expect(reverseString('i love the smell of napalm in the morning')).toBe("gninrom eht ni mlapan fo llems eht evol i")
})

test('testing calculator operations', () => {
    expect(calculator(2,'add',1335)).toBe(1337)
    expect(calculator(2,'subtract',2)).toBe(0)
    expect(calculator(2,'divide',2)).toBe(1)
    expect(calculator(2,'multiply',2)).toBe(4)
})

test('testing caesar cipher encryption', () => {
    expect(caesarCipher("FREE PIZZA!")).toBe('SERR CVMMN!')
    expect(caesarCipher("FREE LOVE?")).toBe("SERR YBIR?")
    expect(caesarCipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')).toBe('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')
})
