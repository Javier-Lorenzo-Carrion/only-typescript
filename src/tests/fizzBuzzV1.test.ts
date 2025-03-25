import {fizzbuzz} from "../core/fizzBuzzV1";


describe('FizzBuzz should', () => {
    it("returns number one as a string for number one", () => {
        expect(fizzbuzz(1)).toBe("1");
    });
    it("returns number two as a string for number two", () => {
        expect(fizzbuzz(2)).toBe("2");
    });
    it("returns fizz for number three", () => {
        expect(fizzbuzz(3)).toBe("fizz");
    });
    it("returns buzz for number five", () => {
        expect(fizzbuzz(5)).toBe("buzz");
    });
    it("returns fizzbuzz for number fifteen", () => {
        expect(fizzbuzz(15)).toBe("fizzbuzz");
    });
    it("returns fizz for any number divisible by three", () => {
        expect(fizzbuzz(6)).toBe("fizz");
    });
    it("returns buzz for any number divisible by five", () => {
        expect(fizzbuzz(10)).toBe("buzz");
    });
    it("returns fizzbuzz for any number divisible by fifteen", () => {
        expect(fizzbuzz(30)).toBe("fizzbuzz");
    });
    it("returns number as a string for any number that is not divisible by three or five", () => {
        expect(fizzbuzz(17)).toBe("17");
    });
})