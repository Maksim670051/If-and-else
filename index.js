
const num = [
    'нуль',
    'один',
    'два',
    'три',
    'четыре',
    'пять',
    'шесть',
    'семь',
    'восемь',
    'девять',
    'десять  ',
    'одиннадцать ',
    'двеннадцать ',
    'триннадцать ',
    'четырнадцать ',
    'пятнадцать ',
    'шестнадцать ',
    'семнадцать ',
    'восемнадцать ',
    'девятнадцать '
]

// Функция запускается при нажатии кнопки отпарвить
function onChangeNumber() {

    // Получение значение из input
    let number = document.getElementById('number').value;

    // Проверка удовлетворения условию (что число лежит в интервале от 1 до 9999) и вывод результата
    if (number <= 9999 && number >= 1) document.getElementById('rez').innerHTML = val(number) + ' ' + rub(number)
    else document.getElementById('rez').innerHTML = '<p class="error">Введите число от 1 до 9999</p>';

}

// Функция склонения слова рубль (Пример: рублей)
function rub(number) {

    let rub = '';

    if (number >= 1 && number <= 100) {

        if (number % 10 == 1) rub = 'рубль'
        else if ((number >= 2 && number <= 4) || (number > 20 && number % 10 >= 2 && number % 10 <= 4)) rub = 'рубля'
        else if ((number >= 5 && number <= 20) || (number % 10 >= 5 && number % 10 <= 9) || (number % 10 == 0)) rub = 'рублей'

    }
    else if (number >= 101 && number <= 9999) {

        if (number % 10 == 1 && number != 111 && number != 1111) rub = 'рубль'
        else if ((number >= 111 && number <= 120) || (number >= 1111 && number <= 1200)) rub = 'рублей'
        else if ((number % 10 >= 2 && number % 10 <= 4)) rub = 'рубля'
        else if ((number % 10 >= 5 && number % 10 <= 9) || (number % 10 == 0)) rub = 'рублей'

    }

    return rub

}

// Склонение числительного (Премер: сто сорок пять)
function val(number) {

    let value = ''

    if (number >= 1 && number <= 19) value = num[number]
    else if (number >= 20 && number <= 39) value = num[Math.trunc(number / 10)] + 'дцать ' + num[number % 10]
    else if (number >= 40 && number <= 49) value = 'сорок  ' + (number == 40 ? '' : num[number % 10])
    else if (number >= 50 && number <= 89) value = num[Math.trunc(number / 10)] + 'десят  ' + (number % 10 == 0 ? '' : num[number % 10])
    else if (number >= 90 && number <= 99) value = 'девяносто    ' + (number % 10 == 0 ? '' : num[number % 10])
    else if (number >= 100 && number <= 199) {

        value = 'сто ' + (number >= 110 ? '' : (number % 10 == 0 ? '' : num[number % 10]))
        value += ok(number)

    }
    else if (number >= 200 && number <= 299) {

        value = 'двести  ' + (number >= 210 ? '' : (number % 10 == 0 ? '' : num[number % 10]))
        value += ok(number)

    }
    else if (number >= 300 && number <= 499) {

        value = num[Math.trunc(number / 100)] + 'сто ' + (number >= 110 ? '' : (number % 10 == 0 ? '' : num[number % 10]))
        value += ok(number)

    }
    else if (number >= 500 && number <= 999) {

        value = num[Math.trunc(number / 100)] + 'сот ' + (number >= 110 ? '' : (number % 10 == 0 ? '' : num[number % 10]))
        value += ok(number)

    }
    else if (number >= 1000 && number <= 9999) {

        if (number >= 1000 && number <= 1999) {

            value = ' тысяча ';
            number = number % 1000;

            value += ok1000(number);

        }
        if (number >= 2000 && number <= 4999) {

            value = num[Math.trunc(number / 1000)] + ' тысячи ';
            number = number % 1000;

            value += ok1000(number);

        }
        if (number >= 5000 && number <= 9999) {

            value = num[Math.trunc(number / 1000)] + ' тысяч   ';
            number = number % 1000;

            value += ok1000(number);

        }
    }

    return value

}

// Блоки кода
function ok(number) {

    let value = '';

    if (number % 100 >= 10 && number % 100 <= 19) value += num[number % 100]
    else if (number % 100 >= 20 && number % 100 <= 39) value += num[Math.trunc((number % 100) / 10)] + 'дцать ' + (number % 10 == 0 ? '' : num[number % 10])
    else if (number % 100 >= 40 && number % 100 <= 49) value += 'сорок  ' + (number % 100 == 40 ? '' : num[number % 10])
    else if (number % 100 >= 50 && number % 100 <= 89) value += num[Math.trunc(number % 100 / 10)] + 'десят  ' + (number % 10 == 0 ? '' : num[number % 10])
    else if (number % 100 >= 90 && number % 100 <= 99) value += 'девяносто    ' + (number % 10 == 0 ? '' : num[number % 10])

    return value

}
function ok1000(number) {

    let value = '';

    if (number >= 1 && number <= 19) value += num[number]
    else if (number >= 20 && number <= 39) value += num[Math.trunc(number / 10)] + 'дцать ' + num[number % 10]
    else if (number >= 40 && number <= 49) value += 'сорок  ' + (number == 40 ? '' : num[number % 10])
    else if (number >= 50 && number <= 89) value += num[Math.trunc(number / 10)] + 'десят  ' + (number % 10 == 0 ? '' : num[number % 10])
    else if (number >= 90 && number <= 99) value += 'девяносто    ' + (number % 10 == 0 ? '' : num[number % 10])

    else if (number >= 100 && number <= 199) {

        value += 'сто ' + (number >= 110 ? '' : (number % 10 == 0 ? '' : num[number % 10]))

        if (number % 100 >= 10 && number % 100 <= 19) value += num[number % 100]
        else if (number % 100 >= 20 && number % 100 <= 39) value += num[Math.trunc((number % 100) / 10)] + 'дцать ' + (number % 10 == 0 ? '' : num[number % 10])
        else if (number % 100 >= 40 && number % 100 <= 49) value += 'сорок  ' + (number % 100 == 40 ? '' : num[number % 10])
        else if (number % 100 >= 50 && number % 100 <= 89) value += num[Math.trunc(number % 100 / 10)] + 'десят  ' + (number % 10 == 0 ? '' : num[number % 10])
        else if (number % 100 >= 90 && number % 100 <= 99) value += 'девяносто    ' + (number % 10 == 0 ? '' : num[number % 10])

    }
    else if (number >= 200 && number <= 299) {

        value += 'двести ' + (number >= 210 ? '' : (number % 10 == 0 ? '' : num[number % 10]))

        if (number % 100 >= 10 && number % 100 <= 19) value += num[number % 100]
        else if (number % 100 >= 20 && number % 100 <= 39) value += num[Math.trunc((number % 100) / 10)] + 'дцать ' + (number % 10 == 0 ? '' : num[number % 10])
        else if (number % 100 >= 40 && number % 100 <= 49) value += 'сорок  ' + (number % 100 == 40 ? '' : num[number % 10])
        else if (number % 100 >= 50 && number % 100 <= 89) value += num[Math.trunc(number % 100 / 10)] + 'десят  ' + (number % 10 == 0 ? '' : num[number % 10])
        else if (number % 100 >= 90 && number % 100 <= 99) value += 'девяносто    ' + (number % 10 == 0 ? '' : num[number % 10])

    }
    else if (number >= 300 && number <= 499) {

        value += num[Math.trunc(number / 100)] + 'сто ' + (number >= 110 ? '' : (number % 10 == 0 ? '' : num[number % 10]))

        if (number % 100 >= 10 && number % 100 <= 19) value += num[number % 100]
        else if (number % 100 >= 20 && number % 100 <= 39) value += num[Math.trunc((number % 100) / 10)] + 'дцать ' + (number % 10 == 0 ? '' : num[number % 10])
        else if (number % 100 >= 40 && number % 100 <= 49) value += 'сорок  ' + (number % 100 == 40 ? '' : num[number % 10])
        else if (number % 100 >= 50 && number % 100 <= 89) value += num[Math.trunc(number % 100 / 10)] + 'десят  ' + (number % 10 == 0 ? '' : num[number % 10])
        else if (number % 100 >= 90 && number % 100 <= 99) value += 'девяносто    ' + (number % 10 == 0 ? '' : num[number % 10])

    }
    else if (number >= 500 && number <= 999) {

        value += num[Math.trunc(number / 100)] + 'сот ' + (number >= 110 ? '' : (number % 10 == 0 ? '' : num[number % 10]))

        if (number % 100 >= 10 && number % 100 <= 19) value += num[number % 100]
        else if (number % 100 >= 20 && number % 100 <= 39) value += num[Math.trunc((number % 100) / 10)] + 'дцать ' + (number % 10 == 0 ? '' : num[number % 10])
        else if (number % 100 >= 40 && number % 100 <= 49) value += 'сорок  ' + (number % 100 == 40 ? '' : num[number % 10])
        else if (number % 100 >= 50 && number % 100 <= 89) value += num[Math.trunc(number % 100 / 10)] + 'десят  ' + (number % 10 == 0 ? '' : num[number % 10])
        else if (number % 100 >= 90 && number % 100 <= 99) value += 'девяносто    ' + (number % 10 == 0 ? '' : num[number % 10])

    }

    return value

}