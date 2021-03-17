/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
 function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
  }
function getMinMax(str) {
    let arr = [];
    // обрезаем лишнее по краям
    if(isNaN(Number(str[str.length - 1]))){
        str = str.slice(0, str.length - 1);
    }
    if(str[0] != '-' && isNaN(Number(str[0]))){
        str = str.slice(1);
    }
    let strarr = str.split(/[\]\[\s,]+/);
    for(let i = 0; i < strarr.length; i++){
        // используем эти строки для отладки
        // console.log(strarr[i]);
        // console.log(Number(strarr[i]));
        if(!isNaN(Number(strarr[i]))){
            arr.push(Number(strarr[i]));
        }
    }
    let result = {
        min: getMinOfArray(arr),
        max: getMaxOfArray(arr)
    };
    return result;
}

module.exports = getMinMax;