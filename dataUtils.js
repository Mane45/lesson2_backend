function formatDate(date, format) {
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    return format.replace("YYYY", year).replace("MM", month).replace("DD", day)
}
function isWeekend(date) {
    const day = date.getDay()
    return day === 0 || day === 6
}
function daysBetween(date1, date2) {
    const diff = Math.abs(date1 - date2)
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
}
module.exports = { formatDate, isWeekend, daysBetween }