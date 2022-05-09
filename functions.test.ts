const {shuffleArray} = require('./utils')

let testArr =[1,2,3,4]

describe('shuffleArray should', () => {
    test('should return a array', () => {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true)
    })
    test("check that it returns an array of the same lenght as sent in", () =>{
    expect(shuffleArray(testArr)).toHaveLength(testArr.length)
    })
})