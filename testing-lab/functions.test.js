const { TestWatcher } = require("@jest/core")

const {
    returnTwo,
    greeting,
    add
} = require('./functions.js')

test("return 2, returns integer 2", () => {
    expect(2).toBe(2)
})

describe("return greetings for name parameters", () => {
    test("James, returns Hello James", () => {
        expect(greeting("James")).toBe("Hello, James.")
    })
    test("Jill, returns Hello Jill", () => {
        expect(greeting("Jill")).toBe("Hello, Jill.")
    })
})

describe("return sum of two number parameters", () => {
    test("1 & 2 return 3", () => {
        expect(add(1,2)).toBe(3)
    })
    test("5 & 9 return 14", () => {
        expect(add(5,9)).toBe(14)
    })
})