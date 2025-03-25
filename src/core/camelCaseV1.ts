/* Implementar una función que convierta un texto, cuyas palabras están delimitadas por espacios y por guiones
bajos y altos, a formato pascal case */

export function toUpperCamelCase(text: string): string{
    let separatedWordsByHyphenAndUnderscore: string[] = text.split(/[-_\s]+/);
    let newText: string = "";
    for(let i = 0; i < separatedWordsByHyphenAndUnderscore.length; i++){
        let lowerCaseWord:string = separatedWordsByHyphenAndUnderscore[i].toLowerCase();
        let firstLetterToUpperCase: string = separatedWordsByHyphenAndUnderscore[i].charAt(0).toUpperCase();
        newText = newText + firstLetterToUpperCase + lowerCaseWord.substring(1);
    }
    return newText;
}