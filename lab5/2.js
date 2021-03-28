/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 * 
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */
function curryStack(args, f){
    if(args.length >= f.length){
        return f(...args);
    } 
    return function() {
        args.push(...arguments);
        return curryStack(args, f);
    };
}
function curry(f) {
    return curryStack([], f);
}

module.exports = curry;
function add(a, b, c) {
      return a + b + c;
}
