/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
    let result = [
        {from: arr[0]["from"], to: arr[0]["to"]}
    ]
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            console.log(typeof result)
            if(arr[j]["from"] === arr[i]["to"]){
                result.push(arr[j]);
            }
            else if(arr[i]["from"] === arr[j]["to"]){
                let cache = result;
                result = [
                    {from: arr[j]["from"], to: arr[j]["to"]}
                ];
                result.push(...cache);
            }
        }
    }
    return result;
}

module.exports = makeRoute;
