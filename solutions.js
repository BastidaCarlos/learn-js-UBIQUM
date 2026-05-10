// Expressions
export const rectPerimeter = (x, y) => (x + y) * 2;

export const rectArea = (w, h) => w * h;

export const triArea = (b, h) => (b * h) / 2;

export const ringArea = (r1, r2) => (Math.PI * r2 ** 2) - (Math.PI * r1 ** 2);

export const f2c = (f) => (f - 32) / 1.8;

export const c2f = (c) => (c * 1.8) + 32;

// Strings
export const makeName = (first, last) => `${last}, ${first}`; 

export const ellide = (s, n) => `${s.substring(0, n)}...`

// export const longer = (s1, s2) => {
//     if (s1.length > s2.length) {
//         return s1;
//     } else if (s2.length > s1.length) {
//         return s2;
//     } else {
//         return s1;
//     }
// }


// Conditionals
export const longer = (s1, s2) => (s1.length >= s2.length) ? s1 : s2;

export const mid3 = (a, b, c) => (a + b + c) - Math.max(a, b, c) - Math.min(a, b, c);

export const lastFirst = (obj) => {
    if (obj.first && obj.last) {
       return `${obj.last}, ${obj.first}` 
    } else if (obj.first) {
       return obj.first; 
    } else if (obj.last) {
       return obj.last; 
    } 
    return "";
}

// Arrays
export const subArray = (array, indices) => indices.map(indice => array[indice]);

export const over21 = (object) => object.filter(usuario => usuario.age >= 21);

export const product = (array) => array.reduce((acc, n) => acc * n, 1);

export const getRepeats = (array) => array.filter((num, index, array) => array.indexOf(num) === index && array.indexOf(num) !== array.lastIndexOf(num));

export const aboveAverage = (array) => {
    const average = (array.reduce((avg, obj) => avg + obj.score, 0) / array.length);
    return array.filter(student => student.score > average);
}

// Arrays and Strings

export const reverseNumber = (number) => Number(String(number).split('').reverse().join(''));

export const isWordAnagram = (wordOne, wordTwo) => (wordOne.split('').sort().join('')) === (wordTwo.split('').sort().join(''));

export const isPhraseAnagram = (phraseOne, phraseTwo) => (phraseOne.toLowerCase().replaceAll(' ', '').split('').sort().join('')) === (phraseTwo.toLowerCase().replaceAll(' ','').split('').sort().join(''))

export const longestWords = (string) => {
    if (string  === '') return []; 
    const maxLength = Math.max(...string.split(' ').map(word => word.length));
    return string.split(' ').filter(word => word.length === maxLength);
}

// DOM Operations
export const moduleTitles = () =>  Array.from(document.querySelectorAll('.module-title')).map(element => element.textContent) 

export const goPurple = () => {
    const title = document.querySelector('.exercise-name');
    title.style.color = 'white';
    title.style.backgroundColor = 'purple';
    return `Go Purple!`
}

export const copycat = (n) => {
    const answers = [100, 'hello!', [1, 2, 3]];
    return answers[n - 1];
}