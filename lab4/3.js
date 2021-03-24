/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    if(str.length < 2){
        return str;
    }
    let count = 1;
    let result = str[0];
    for(let i = 1; i < str.length; i++){
        if(str[i] === str[i - 1]){
            count++;
        } 
        else {
            if(count > 1){
                result = result.concat(String(count));
            }
            result = result.concat(str[i]);
            count = 1;
        }
    }
    if(count > 1){
        return result.concat(String(count));
    }
    return result;
}

module.exports = rle;
//console.log(rle('AAAB'));
//console.log(rle('BCCADDEEEBB'));