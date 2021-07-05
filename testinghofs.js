const capitalizer = (func) => {
    const innerFunc = (arg) => {
        return func(arg.toUpperCase());
    }
    return innerFunc;
}

const after = (num, func) => {
    let count = 0
    const innerFunc =  (arg) => {
        count++
        if (count > num) {
            return func(arg) }          
        }
    return innerFunc
    
}

module.exports = {capitalizer, after}