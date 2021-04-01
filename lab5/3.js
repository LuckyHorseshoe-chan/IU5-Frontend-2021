/**
 * Напишите функцию customBind(f, context),
 * входные данные - функция и контекст
 * выходные данные - функция с прибинженым контекстом
 * Примеры:
 * customBind(function() { return this.a + this.b}, {a: 1, b: 2})() -> 3
 */

function customBind(f, context) {
    return function(...args) { return f.apply(context, args)};
}

module.exports = customBind;
//console.log(customBind(function() { return this.a + this.b}, {a: 1, b: 2})())