// let year = prompt('В каком году')

// if (year == 2015) alert('Вы правы!')

// let a=1;
// switch (a){
//     case 1:
//         console.log(1)
//         break;
//     case 2:
//         console.log(2)
//         break;
//     case 3:
//         console.log(3)
//         break;
//     default:
//         console.log('error')
//         break;
// }

// a = 15 if a>5 else 0 (Python)

// let state = 9 + 15 < 3;
// let a = state ? console.log('yes') : console.log('no')

// let a = state ? console.log('yes') :
//     (2>6) ? console.log('dfgdfgdf') :
//     (2*9>3) ? console.log('dfgdfgdfgdf') : console.log('false')

// 1
/*
let a = 10;
if (a == 10){
    console.log('Верно')
} else {
    console.log('Неверно')
}
*/

// 2
/*
let min = 55, quarter;

if (min >= 0 && min < 15){
    quarter = 1
} else if (min >= 15 && min < 30) {
    quarter = 2
} else if (min >= 30 && min < 45) {
    quarter = 3
} else if (min >= 45 && min < 60) {
    quarter = 4
}

console.log(quarter)
*/

// 3 
// let lang = 'en', arr;

// if (lang == 'ru') {
//     arr = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']
// } else if (lang == 'en') {
//     arr = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
// }

// console.log(arr)

// switch (lang) {
//     case 'ru':
//         arr = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']
//         break;
    
//     case 'en':
//         arr = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
//         break;
// }

// lang = [
//     ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
//     ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
// ]

// console.log(lang[0])
// console.log(lang[1])

// lang = {
//     'ru': ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
//     'en': ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
// }

// console.log(lang.ru)
// console.log(lang.en)

// Работа с if-else
// 1
// function check(a){
//     if (a == 0){
//         return'Верно'
//     } else {
//         return 'Неверно'
//     }
// }

// console.log(check(1))
// console.log(check(0))
// console.log(check(-3))

// 2
// function check(a){
//     if (a > 0){
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }

// console.log(check(1))
// console.log(check(0))
// console.log(check(-3))

// 3
// function check(a){
//     if (a < 0){
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }

// console.log(check(1))
// console.log(check(0))
// console.log(check(-3))

// 4
// function check(a){
//     if (a >= 0){
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }

// console.log(check(1))
// console.log(check(0))
// console.log(check(-3))

// 5
// function check(a){
//     if (a <= 0){
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }

// console.log(check(1))
// console.log(check(0))
// console.log(check(-3))

// 6
// function check(a){
//     if (a !== 0){
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }

// console.log(check(1))
// console.log(check(0))
// console.log(check(-3))

// 7
// function check(a){
//     if (a === 'test'){
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }

// console.log(check('test'))
// console.log(check('тест'))
// console.log(check(3))

// 8
// function check(a){
//     if (a === '1'){
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }

// console.log(check('1'))
// console.log(check(1))
// console.log(check(3))

//// Работа с && (и) и || (или) ////

// 1
// function check(a){
//     if (a > 0 && a < 5){
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }

// console.log(check(5))
// console.log(check(0))
// console.log(check(-3))
// console.log(check(2))

// 2
// function check(a){
//     if (a === 0 || a === 2){
//         return a += 7
//     } else {
//         return a /= 10
//     }
// }

// console.log(check(5))
// console.log(check(0))
// console.log(check(-3))
// console.log(check(2))

// 3
// function check(a, b){
//     if (a <= 1 && b >= 3){
//         return a + b
//     } else {
//         return a - b
//     }
// }

// console.log(check(1, 3))
// console.log(check(0, 6))
// console.log(check(3, 5))

// 4
// function check(a, b){
//     if (a > 2 && a < 11 || b >= 6 && b < 14) {
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }

// console.log(check(5, 7))
// console.log(check(1, 4))
// console.log(check(5, 4))
// console.log(check(1, 7))

//// Задачи на switch-case ////
/*
function season(num){
    let result;
    switch(num){
        case 1:
            result = 'Зима'
            break;
        case 2:
            result = 'Весна'
            break;
        case 3:
            result = 'Лето'
            break;
        case 4:
            result = 'Осень'
            break;
    }

    return result
}

console.log(season(1))
console.log(season(2))
console.log(season(3))
console.log(season(4))
*/

//// Задачи ////

// 1
// function decada_mounth(day){
//     if (day > 0 && day <= 10){
//        return 'Первая декада' 
//     } else if (day > 10 && day <= 20){
//         return 'Вторая декада'
//     } else if (day > 20 && day <= 31){
//         return 'Третья декада'
//     }
// }

// console.log(decada_mounth(5))
// console.log(decada_mounth(13))
// console.log(decada_mounth(27))

// 2
/*
function check_season(month){
    if (month === 12 || month >= 1 && month <= 2){
        return 'Зима'
    } else if (month >= 3 && month <= 5){
        return 'Весна'
    } else if (month >= 6 && month <= 8){
        return 'Лето'
    } else if (month >= 9 && month <= 11){
        return 'Осень'
    }
}

console.log(check_season(1))
console.log(check_season(4))
console.log(check_season(7))
console.log(check_season(11))
*/

// 3
// function check_first_letter_a(str){
//     if (str[0] === 'a'){
//         return 'Да'
//     } else {
//         return 'Нет'
//     }
// }

// console.log(check_first_letter_a('abcde'))
// console.log(check_first_letter_a('edcba'))

// 4
// function check_first_symbol(str){
//     if (str[0] == 1 || str[0] == 2 || str[0] == 3){
//         return 'Да'
//     } else {
//         return 'Нет'
//     }
// }

// console.log(check_first_symbol('123456'))
// console.log(check_first_symbol('654321'))

// 5
// function sum_string(str){
//     let sum = 0;
//     for (let i = 0; i < str.length; i++){
//         sum += Number(str[i])
//     }
//     return sum
// }

// console.log(sum_string('123'))
// console.log(sum_string('456'))
// console.log(sum_string('789'))

// 6
/*
function one_equals_two(str){
    let sum1 = 0, sum2 = 0;

    for (let i = 0; i < str.length/2; i++){
        sum1 += Number(str[i])
        sum2 += Number(str[i + str.length/2])
    }
    
    if (sum1 === sum2) { return 'Да' } else { return 'Нет' }
}


console.log(one_equals_two('123456'))
console.log(one_equals_two('123123'))
console.log(one_equals_two('456456'))
*/