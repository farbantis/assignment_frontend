console.log('задание по блоку два, case 1'.toUpperCase())
let name = 'Vasya';
if (typeof(name) === 'string') {
    console.log(`Hello ${name}`)
}
else {
    console.log('Ошибка, не тот тип данных')
}

console.log('задание по блоку два, case 2'.toUpperCase())
name = 123;
if (typeof(name) === 'string') {
    console.log(`Hello ${name}`)
}
else {
    console.log('Ошибка, не тот тип данных')
}

console.log('задание по блоку два, case 2'.toUpperCase())
let c
console.log(typeof 123);
console.log(typeof 'hello');
console.log(typeof true);
console.log(typeof c);
console.log(typeof []);
console.log(typeof 'kk'/5);
console.log(typeof Symbol("id"));
console.log(typeof 10n);
console.log(typeof alert);


console.log('задание по блоку три, case 1'.toUpperCase())
const arr = ['Капуста', 'Репа', 'Редиска', 'Морковка']
console.log(arr.join("|"))

console.log('задание по блоку три, case 2'.toUpperCase())
const myarr = new Array('Вася;Петя;Вова;Олег'.split(';'))
console.log(myarr)

console.log('задание по блоку три, case 3'.toUpperCase())
const myFunc = (name='Гость') => console.log(`Привет ${name}`)
myFunc(name='Alex')
myFunc()

console.log('задание по блоку три, case 4'.toUpperCase())
const fruits = ['яблоко', 'ананас', 'груша'];
const fruitsInUpperCase = fruits.map(el=>el.toUpperCase())
console.log(fruitsInUpperCase)

console.log('задание по блоку три, case 5'.toUpperCase())
function addOneForAll(...nbrs) {
    return nbrs.map(el=>el+1)
}
const val = addOneForAll(1, 2, 3, 4);
console.log(val);

console.log('задание по блоку три, case 6'.toUpperCase())
function getSum(...nbrs) {
    return nbrs.reduce((a, b) => a+b, 0)
}
const val1 = getSum(1, 2, 3, 4);
console.log(val1);

console.log('задание по блоку три, case 7'.toUpperCase())
const arr1 = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
const numberArray = arr1.filter(el=>(typeof el) === 'number')
console.log(numberArray);

console.log('задание по блоку три, case 8'.toUpperCase())
function arrayTesting(arr38) {
        return arr38.some(el=>Boolean(el)===true)
}
const haveTrueValue = arrayTesting([0, false, null, 1]); // Нашли true значение (потому что есть хотябы одно true значение - 1)
const dontHaveTrueValue = arrayTesting([0, false, null, 0]); // Ничего нет
console.log(haveTrueValue);
console.log(dontHaveTrueValue);

