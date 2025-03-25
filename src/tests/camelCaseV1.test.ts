import {toUpperCamelCase} from "../core/camelCaseV1";

describe("To upper camel case should", ()=>{
    it("return a string: when the initial sentence is:", ()=>{
        expect(toUpperCamelCase("")).toBe("");
    });
    it("return a string:  when the initial sentence is: ", ()=>{
        expect(toUpperCamelCase(" ")).toBe("");
    });
    it("return a string: Hola when the initial sentence is: hola", ()=>{
        expect(toUpperCamelCase("hola")).toBe("Hola");
    });
    it("return a string: Hola when the initial sentence is: HoLa", ()=>{
        expect(toUpperCamelCase("HoLa")).toBe("Hola");
    });
    it("return a string: SoyJavier when the initial sentence is: SOY-JAVIER", ()=>{
        expect(toUpperCamelCase("SOY-JAVIER")).toBe("SoyJavier");
    });
    it("return a string: HolaSoyJavier when the initial sentence is: hola_SOY-JAVIER", ()=>{
        expect(toUpperCamelCase("hola_SOY-JAVIER")).toBe("HolaSoyJavier");
    });
    it("return a string: HolaSoyJavier when the initial sentence is: hola SOY-_JAVIER", ()=>{
        expect(toUpperCamelCase("hola SOY-_JAVIER")).toBe("HolaSoyJavier");
    });
})

