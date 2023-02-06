// Задача 6
// Написать метод, который в консоль выводит таблицу умножения.
// На вход метод получает число,
// до которого выводит таблицу умножения.
// В консоли должна появиться таблица.
// Например, если на вход пришло число 5, то получим:


function multTable(num) {

    function padWithSpaces(num, strLen) {
        return ' '.repeat(strLen - num.toString().length + 1) + num
    }

    const maxNumDigits = (num * num).toString().length

    let table = ''
    for (let y = 1; y <= num; y++) {
        for (let x = 1; x <= num; x++) {
            table += padWithSpaces(x * y, maxNumDigits)
        }
        table += '\n'
    }
    table = table.substring(0, table.length - 1)
    console.log(table)
}

multTable(5)

//Итого 20 минут