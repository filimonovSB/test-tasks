// Задача 5
// Написать метод/функцию, 
// который/которая на вход принимает целое число,
// а на выходе возвращает то,
// является ли число простым (не имеет делителей кроме 1 и самого себя).

function task5(arr1, arr2) {

    function findRepeats(arr) {
        let start = 0
        let result = []
        while (start < arr.length) {
            for (let i = start + 1; i < arr.length; i++) {
                if (arr[start] === arr[i]) {
                    result.push(arr[start])
                    break
                }
            }
            start++
        }
        return result
    }
    let result1 = findRepeats(arr1)
    let result2 = findRepeats(arr2)
    let answer = []
    let start = 0
    while (start < result1.length) {
        for (let i = 0; i < result2.length; i++) {
            if (result1[start] === result2[i]) {
                answer.push(result2[i])
                break
            }

        }
        start++
    }
    return answer.sort()
}

console.log(task5([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]))

 //итого 30 минут
