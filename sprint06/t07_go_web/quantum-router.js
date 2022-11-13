exports.calculateTime = () => {
    const start = new Date('01-02-1939')
    let end = new Date()
    end = new Date(Math.floor((end.getTime() - start.getTime()) / 7) + start.getTime())
    let arr = [
          [(end.getFullYear() - start.getFullYear())],
          [end.getMonth() - start.getMonth()],
          [end.getDate() - start.getDay()]
        ]
    return arr
}