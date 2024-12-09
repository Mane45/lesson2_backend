function unique(arr) {
    if (Array.isArray(arr)) {
        return [...new Set(arr)]
    }
    return "you entred not array"
}

function flatten(arr = []) {
    if (Array.isArray(arr)) {
        let result = []
        arr.forEach(el => {
            if (!Array.isArray(el)) {
                result.push(el)
            } else {
                result.push(...flatten(el))
            }
        })
        return result
    }
    return "you entred not array"
}

function chunk(arr, size) {
    let result = []
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            return result
        }
        result.push(arr.splice(0, size))
        return result.concat(chunk(arr, size))
    }
    return "you entred not array"
}

module.exports = { unique, flatten, chunk }