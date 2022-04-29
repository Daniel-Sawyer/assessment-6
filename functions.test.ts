const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('should return a array', () => {
        let answer = shuffleArray()
        expect(answer).toContain([])
    })
    test("should be equal", () =>{
    let answer = shuffleArray === shuffleArray
    expect(answer).toBeTruthy()
    })
})