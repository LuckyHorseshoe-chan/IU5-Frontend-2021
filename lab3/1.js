/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let result = '';
    let arr = str.split(' ');
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
    }
    result = arr.join(' ');
    return result;
}

module.exports = capitalize;