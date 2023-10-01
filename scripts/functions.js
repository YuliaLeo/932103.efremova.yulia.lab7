export function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

export function generateColor() {
    let hexColor = "#";

    for (let position = 0; position < 6; position++){
        const randomNumber = Math.floor (Math.random() * hexCharacters.length)
        hexColor += hexCharacters[randomNumber];
    }

    return hexColor;
}
