/**
 * Напишите функцию multiplyArray(arr, n),
 * на вход подается массив arr, и число n
 * необходимо вернуть новый массив, в котором все числа в n раз больше исходного
 * в массиве могут быть не только числа, эти элементы должны соответствовать исходным (не числа не трогать)
 * Примеры:
 * [1, 2, 3, 'ddd', {min: 1}, 22, false], 2 -> [2, 4, 6, 'ddd', {min: 1}, 44, false]
 */

function multiplyArray(arr, n) {
    for(let i = 0; i < arr.length; i++){
 //       console.log(arr[i]);
 //       console.log(isNaN(Number(arr[i])));
        if(!isNaN(Number(arr[i])) && typeof arr[i] != "boolean"){
            arr[i] = Number(arr[i]) * n;
        }
    }
    return arr;
}

module.exports = multiplyArray;
//console.log(multiplyArray([1, 2, 3, 'ddd', {min: 1}, 22, false], 3));