const capitalizer = (func) => {
    const innerFunc = (arg) => {
        return func(arg.toUpperCase());
    }
    return innerFunc;
}

const after = () => {}

module.exports = {capitalizer, after}