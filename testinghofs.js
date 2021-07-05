const capitalizer = (func) => {
    const innerFunc = (arg) => {
        return func(arg.toUpperCase());
    }
    return innerFunc;
}



module.exports = capitalizer