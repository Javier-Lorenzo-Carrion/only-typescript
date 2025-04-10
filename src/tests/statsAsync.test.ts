import * as statsAsync from "../core/statsAsync";

describe("Stats Async should", ()=>{
    it("calculates the sum of all elements of the array (async)", async ()=>{
        const result = await statsAsync.sum([1,2,3]);
        const expected = 6;
        expect(expected).toBe(result);
    })

    it("calculates the average of all elements of the array (async)", async ()=>{
        const result = await statsAsync.average([2,8]);
        const expected = 5;
        expect(expected).toBe(result);
    })
})