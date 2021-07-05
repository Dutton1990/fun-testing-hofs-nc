const capitalizer = require('../testinghofs')


describe('test capitalizer function', () => {
    test('returns a function', () => {
        expect(typeof capitalizer()).toEqual('function')
    })

    test('returns a _new_ function', () => {
        expect(capitalizer()).not.toBe(capitalizer())
    })

    test('takes a function as an argument and returns a function that returns the string', () => {
        function returnString(string) {
            return string
        }
        
        const changedString = capitalizer(returnString)
        expect(typeof changedString('string')).toEqual('string')
    })

    test('takes a function as an argument and returns a function that returns a capitalized string', () => {
        function upperCase(string) {
            return string.toUpperCase()
        }
        
        const changedString = capitalizer(upperCase)

        expect(changedString('string')).toEqual('STRING')
        expect(changedString('eli')).toEqual('ELI')
    })

    test('takes a function and returns a function that can capitalize the argument its invoked with', () => {
        const sayHello = (person) => {
            return `hello ${person}`;
          };
        const shoutGreeting = capitalizer(sayHello)

        expect(shoutGreeting('eli')).toEqual('hello ELI')
    })
})

//// WORK PLZ