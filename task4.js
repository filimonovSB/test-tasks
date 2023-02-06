// Задача 4
// Написать метод/функцию, 
// который/которая на вход принимает целое число,
// а на выходе возвращает то,
// является ли число простым (не имеет делителей кроме 1 и самого себя).

function task4(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}

const simpleNumbers = [2, 3, 5, 7, 11, 13, 17,
    19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
    61, 67, 71, 73, 79, 83, 89, 97]

simpleNumbers.forEach(number => { console.log(number + " " + task4(number)) })

 //итого 3 минуты
