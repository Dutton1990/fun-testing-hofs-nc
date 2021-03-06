const {capitalizer, after} = require('../testinghofs')


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

describe('test after function', () => {
    test('returns a function when invoked with nothing', () => {
        expect(typeof after()).toEqual('function')
    });

    test('takes the number 0 and a function and returns the function', () => {
        const someFunc = (someStr) => {
            return someStr
        }
        expect(typeof after(0, someFunc)).toEqual('function')
    });

    test('takes the number 0 and a function and when returned function is invoked gives the return value of the original function', () => {
        const someFunc = (someStr) => {
            return someStr
        }
        const returnedFunc = after(0, someFunc)
        expect(returnedFunc('Hello')).toEqual('Hello')
    });

    test('takes the number 1 and a function and returned function returns undefined when invoked once', () => {
        const someFunc = (someStr) => {
            return someStr
        }  
        const returnedFunc = after(1, someFunc)
        expect(returnedFunc('Poonam')).toEqual(undefined)
    })

    test('takes the number 1 and a function and invoked function returns value after more than one invocation', () => {
        const someFunc = (someStr) => {
            return someStr
        }  
        const returnedFunc = after(1, someFunc)
        returnedFunc('Christian')
        expect(returnedFunc('Christian')).toEqual('Christian') 
    })
});