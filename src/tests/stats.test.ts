import {average, sum} from "../stats";


describe("Stats should", ()=>{
    it("calculates the sum of all elements of the array", ()=>{
        const result = sum([1,2,3]);
        const expected = 6;
        expect(expected).toBe(result);
    })

    it("calculates the average of all elements of the array", ()=>{
        const result = average([2,8]);
        const expected = 5;
        expect(expected).toBe(result);
    })
})





