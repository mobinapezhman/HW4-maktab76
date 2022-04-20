function removeFirstOccurrence(string, searchString) {
    let index = string.indexOf(searchString);
    if (index === -1) {
        return string;
    }
    return `${string.slice(0, index)} ${string.slice(index + searchString.length)}`
}
let string = "The quick broen fox jumps over the lazy dog."
console.log(`Original text : \n ${string} \n result : \n ${removeFirstOccurrence(string, 'the')}`)