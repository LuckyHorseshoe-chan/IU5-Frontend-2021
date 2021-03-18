/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    while(str.indexOf('()') != -1 || str.indexOf('[]') != -1|| str.indexOf('<>') != -1){
        str = str.replace(/\(\)/g, '');
        //console.log('- ()');
        //console.log(str);
        str = str.replace(/\[\]/, '');
        //console.log('- []')
        // console.log(str);
        str = str.replace(/\<\>/, '');
     //   console.log(str);
    }
    if(str.length > 0){
        return false;
    }
    return true;
//    let BrArr = [0, 0, 0, 0, 0, 0];
//    let BrStr = '[]<>()'
//    for(let i = 0; i < str.length; i++){
//        let ind = BrStr.indexOf(str[i]);
//        // не скобки игнорируем
//        if(ind != -1){
//            BrArr[ind]++;
//        }
//        // если закрывающая скобка встретилась раньше открывающей
//        if(BrArr[1] > BrArr[0] || BrArr[3] > BrArr[2] || BrArr[5] > BrArr[4]){
//            return false;
//        }
//        // если скобка другого вида не закрылась
//        if(BrArr[0] === BrArr[1] && BrArr[0] > 0 && (BrArr[2] != BrArr[3] || BrArr[4] != BrArr[5])){
//            return false;
//        }
//        if(BrArr[2] === BrArr[3] && BrArr[2] > 0 && (BrArr[0] != BrArr[1] || BrArr[4] != BrArr[5])){
//            return false;
//        }
//        if(BrArr[4] === BrArr[5] && BrArr[4] > 0 && (BrArr[2] != BrArr[3] || BrArr[0] != BrArr[1])){
//            return false;
//        }
//        // когда скобка закрылась, обнуляем счёт
//        if(BrArr[0] === BrArr[1] && BrArr[0] > 0){
//            BrArr[0] = 0;
//            BrArr[1] = 0;
//        }
//        if(BrArr[2] === BrArr[3] && BrArr[2] > 0){
//            BrArr[2] = 0;
//            BrArr[3] = 0;
//        }
//        if(BrArr[4] === BrArr[5] && BrArr[4] > 0){
//            BrArr[4] = 0;
//            BrArr[5] = 0;
//        }
//   }
}

module.exports = checkBrackets;
//console.log(checkBrackets('[(<>)]'))
