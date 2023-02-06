// Задача 3
// Написать метод/функцию, который/которая
// на вход принимает число (int),
// а на выходе выдает слово “компьютер” в падеже,
// соответствующем указанному количеству. 
// Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».

function task3(number) {
    if (number === 1)
        return '1 компьютер'
    if (number % 10 === 1) {
        if (number % 11 === 0)
            return number + ' компьютеров'
        return number + ' компьютер'
    }
    if (number % 10 == 2 || number % 10 == 3 || number % 10 == 4) {
        if (number % 12 === 0 || number % 13 === 0 || number % 14 === 0)
            return number + ' комьютеров'
        return number + ' комьютера'
    }
    return number + ' компьютеров'
}

const test = [1, 2, 3, 4, 5, 11, 25, 41, 1048]
test.forEach(num => console.log(task3(num)))

//Итого 20 минут
