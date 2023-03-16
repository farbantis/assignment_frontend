console.log("Блок 1 Задание 1")
function calcSumOfSquares(num){
    let result = 0
    for (let i=1; i<=Math.abs(num); i++){
        result+= i**2
    }
    return result
}
let num = prompt('Enter a number: ');
console.log('сумма квадратов чисел = ', calcSumOfSquares(Number(num)));



console.log("Блок 1 Задание 2");
let myArray = [3, 5, 12, 9, 23, 93, 17];
let mySum = myArray.filter(el=>el>2 && el<20).reduce((a,b)=>a+b, 0)
console.log('отфильтрованная сумма = ', mySum)



console.log("Блок 1 Задание 3");
const myArray12 = [[1, 6, 3, '6'], [10, 15, 13, '10']];
let result = [];
myArray12.forEach(el=>{el.forEach(el=>{if (typeof el === 'number' && el % 2 === 0) {result.push(el)}})})
result = result.reduce((a,b)=>a+b)
console.log('сумма элементов которые числа и кратны 2м = ', result)



console.log("Блок 1 Задание 4");
let myObject = {"name": "Oleg",
                "age": 10};
function addToObject(key, value, obj){
    if (key in myObject) {
        alert(`key ${key} already exists with the value ${obj[key]}`)
    }
    else {
        obj[key] = value
        alert(`key ${key} was successfully added to the object`)
    }
    console.log('object is ', myObject)
}
let user_key = prompt('what is the key: ');
let user_value = prompt(`what is the value of ${user_key}: `);
addToObject(user_key, user_value, myObject);



console.log("Блок 2 Задание 1");
function bindFunc(someFunc, someArgument) {
    let args = Array.from(arguments).slice(2)
    return someFunc.bind(someArgument, args)
    }

function someFunc(args){
    console.log('internal function with new context:', this, args)
}

const res421 = bindFunc(someFunc, 5, 555, 666)
res421()



console.log("Блок 2 Задание 2");
function func422() {
    return Object.values(this).reduce((a, b) => a + b)
}

const objectA = {
 a: 1,
 b: 2,
 c: 3,
}
console.log('sum of all values = ', func422.call(objectA));



console.log("Блок 2 Задание 3");
function getNewArray() {
    return this.values.filter(el=>typeof el === 'number' && el % 2 === 0)
}
const valObject0 = {
 values: [1, '2', 4, 8, '8',  3, 10, null, false],
}

const res423 = getNewArray.call(valObject0);
console.log(res423); // Ссылаясь на массив ключа values из valObject0 [4, 8]



console.log("Блок 3 Задание 1");
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};
function getCity(citiesObj) {
    return Object.entries(citiesObj).map(([city, country])=>`${city} это ${country}`)
}
console.log(getCity(citiesAndCountries)); // ['Киев - это Украина', 'Нью-Йорк - это США', ... и т.д.]



console.log("Блок 3 Задание 2");
const namesOfDays = {
    "ru": ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    "en": ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}
function getNameOfDay(lang, datNumber){
    return namesOfDays[lang].slice(datNumber-1, datNumber).toString()
}

console.log(getNameOfDay('en', 7)) // 'Sunday'
console.log(getNameOfDay('ru', 3)) // 'Среда'



console.log("Блок 3 Задание 3");
// Функция должна устанавливать прототип (protoObj) для currentObj.
const person = {
    name: 'Vlad'
};
const person1 = {
    age: 1
};
function setProto (currentObj, protoObj) {
    return currentObj.__proto__=protoObj
}
setProto(person1, person); // Теперь прототипом для объекта person1 выступает объект person
console.log('person is now prototype of person1', person1)



console.log("Блок 3 Задание 4");
const person_434 = {
    "setName": function (name) {this.name = name},
    "getName": function () {return this.name},
    "setAge": function (age=0) {this.ageValidation(age) ?this.age=age :this.age='Validation Error'},
    "getAge": function () {return this.age},
    "ageValidation": function (age) {return age>18},
}
const person1_434 = {"age": 100}
person1_434.__proto__=person_434

console.log('...setting age to 1')
person1_434.setAge(1); // передать возраст можно как угодно
console.log('current age = ', person1_434.getAge())
console.log('...setting age to empty')
person1_434.getAge(); // 'Validation Error'
console.log('current age = ', person1_434.getAge())
console.log('...setting age to 20')
person1_434.setAge(20); // передать возраст можно как угодно
console.log('current age = ', person1_434.getAge()); // Новое значение - 20
console.log('...setting name to John')
person1_434.setName('John');
console.log('current name = ', person1_434.getName())
console.log(person1_434)
