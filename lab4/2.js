/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++){
        if(str[i] != str[len - 1 - i]){
            return false;
        }
    }
    return true;
}

module.exports = isPalindrome;
//console.log(isPalindrome('шалаш'))