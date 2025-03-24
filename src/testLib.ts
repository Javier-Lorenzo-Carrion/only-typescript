export function expect<T>(expected: T) {
    return {
        toBe(result: T): void {
            if (result !== expected) {
                throw new Error(`❌ : ${result} is not equal to ${expected}`);
            }
        }
    }
}

export async function test(description: string, callback:()=>void){
    try{
        await callback();
        console.log(`✅ ${description}`);
    }
    catch (error){
        console.log(`❌ : ${description}`);
        console.log(error)
    }
}

export const it = test;

export function describe(description: string, callback:()=>void){
    console.log(description);
    callback();
}

// TODO: SOLUCIONAR EL PROBLEMA DEL SOPORTE PARA PROMESAS PARA QUE LOS TEST SE AGRUPEN EN ASINCRONOS Y NO
// TODO: PODRIAMOS AÑADIR ALGO PARA QUE DIGA EN QUE LINEA FALLA EL CODIGO Y NO LA LINEA QUE LANZA EL ERROR (REVISA EL CODIGO FUENTE DE JEST)