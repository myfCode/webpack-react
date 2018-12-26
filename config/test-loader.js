module.exports = {
    testLoader: function (source) {
        console.log('source', source)
        debugger
        return source
    }
}