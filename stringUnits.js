module.exports.stringUnits = {
    reverse:(string="") => {
        if(typeof string === "string"){
            return string.split("").reverse().join("")
        } 
        return "you enter invalid input"
    },
    capitalize:(string="") => {
        if(typeof string === "string"){
            return string.toUpperCase()
        } 
        return "you enter invalid input"
    },
    truncate:(string="", length=0) => {
        return string.slice(0, length) + "..."
    }
}