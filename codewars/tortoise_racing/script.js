function race(v1, v2, g) {
    if (v1 >= v2) {
        return null
    } else {
        const time = g / (v2 - v1)
        const timeHours = Math.floor(time)
        const timeMinutes = Math.floor((time * 60) % 60)
        const timeSeconds = Math.floor((time * 3600) % 60)
        return [timeHours, timeMinutes, timeSeconds]
    }
}

console.log(race(720, 850, 70))
