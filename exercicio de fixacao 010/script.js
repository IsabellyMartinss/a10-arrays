//Exercício 1 e 2

const arrayNumbers = [22, 1.68, 2023, 13];
console.log(arrayNumbers);
console.log(arrayNumbers.length);
console.log(arrayNumbers[0]);
console.log(arrayNumbers.includes(1.68));

const arrayStrings = ["Isabelly", "Karen", "Martins"];
console.log(arrayStrings.length);
console.log(arrayStrings[1]);

const arrayMix = [8, 22, 24,"Baby", "eu", "Táta", true];
console.log(arrayMix.length);
console.log(arrayMix[2]);
console.log(arrayMix.includes(13));

//Exercício 3

const arrayNumbersCopia = [22];
console.log(arrayNumbers);
console.log(arrayNumbersCopia);

const arrayStringsCopia = [arrayStrings.pop()];
console.log(arrayStrings);
console.log(arrayStringsCopia);

const arrayMixCopia = arrayMix.splice(1,1)
console.log(arrayMix);
console.log(arrayMixCopia);





























// Colinha do que foi feito durante a aula:

// console.log(arrayNumbers);
// console.log(arrayNumbers.sort());
// console.log(arrayNumbers.reverse());

// console.log(arrayNumbers.pop());
// console.log(arrayNumbers);

// console.log(arrayNumbers.push(6));
// console.log(arrayNumbers);

// console.log(arrayNumbers.splice(2,1));
// console.log(arrayNumbers);

// const arrayStrings = ['Isabelly', 'Karen', 'Martins']

// const arrayNumbers = [22, 1.68, 13+1]

// const arrayMix = ['TurmaA', 10, true]

// const arrayValor = [13]

// const arrayNada = []

// console.log(arrayMix.includes(10))

// // ArrayStrings
// // console.log(arrayStrings.length)
// // console.log(arrayStrings[3])

// // ArrayNumbers
// console.log(arrayNumbers.length)