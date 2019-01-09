'use strict';


/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

function isObjectEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    }
    return false;

};

// Вызовы функции для проверки
console.log(
    isObjectEmpty({})
); // true

console.log(
    isObjectEmpty({
        a: 1
    })
); // false

console.log(
    isObjectEmpty({
        a: 1,
        b: 2
    })
); // false