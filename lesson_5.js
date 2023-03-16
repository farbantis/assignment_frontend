console.log("Блок 1 Задание 1");
function Animal(name,age, colour) {
    if (!new.target) {
        return new Animal(name, age, colour)
    }
    else {
        this.name = name;
        this.age = age;
        this.colour = colour;
        }
}
const rabbit = Animal('Rabbit', 8, 'black'); // переадресовывает вызовы на new Animal
console.log(rabbit)



console.log("Блок 1 Задание 2");
function Calculator() {
    this.read = function (){
        this.fig1 = +prompt('first figure: ')
        this.fig2 = +prompt('second figure: ')
    };
    this.setAction = function (){
        this.action = prompt('action (+,-,*,/): ')
    };
    this.doAction = function () {
        switch (this.action){
            case '+':
                return sum(this.fig1, this.fig2);
            case '*':
                return mul(this.fig1, this.fig2);
            case '-':
                return sub(this.fig1, this.fig2);
            case '/':
                return div(this.fig1, this.fig2);
            default:
                console.log(`sorry, calculator doesnt support action ${this.action}`)
        }
    };
    function sum(a, b) {return a + b}
    function mul(a, b) {return a * b}
    function sub(a, b) {return a - b}
    function div(a, b) {return a / b}
    }

const calculator = new Calculator();
calculator.read();
calculator.setAction();
const tres = calculator.doAction(); // результат
console.log(`calculator result is ${tres}`)



console.log("Блок 1 Задание 3");
function Nums() {
   this.args = Array.from(arguments);

Nums.prototype.getSum = function () {
       return this.args.filter(el=>el %1 === 0).reduce((a, b)=>a + b)
                            }

Nums.prototype.myFilterReverse = function () {
       let arr13=[]
       for (let i=this.args.length-1; i>=0; i--) {
           if (this.args[i] % 1 === 0) {arr13.push(this.args[i])}
       }
        return arr13
   }
}
const test = new Nums(1, 2, 3, 5.5);
const sum = test.getSum(); // найдет сумму всех элементов в свойстве args, которые являются целыми  числами.
const newArr = test.myFilterReverse(); // Отфильтруем массив в свойстве args и развернет массив (было [1, 2, 3] -> стало [3, 2, 1])
console.log(`sum is ${sum}, reversed arr: ${newArr}`);



console.log("Блок 1 Задание 4");
Array.prototype.getUnique = function () {
    for (let i=0; i<this.length; i++) {
        if (this.includes(this[i], i+1)) {
            this.splice(i, 1)
            }
    }
    return this
}
const arr14 = [1, 1, 2, 2, 3];
const newArr14 = arr14.getUnique(); //  [1, 2, 3]
console.log(newArr14)



console.log("Блок 1 Задание 5");
const myObj15 = {a: 1, b: 2, c: 3, d: false, e: 0}
Object.prototype.getKeySum = function () {
    let keys = Object.values(this)
    return keys.filter(el=>Boolean(el)).reduce((a, b)=>a + b)
}
Object.prototype.reversKey = function () {
    console.log(this)
    const keys = Object.keys(this)
    const values = Object.values(this)
    let arr = {}
    for (let i = 0; i<values.length; i++) {
        arr[values[i]] = keys[i]
    }
    return arr
}

const res15 = myObj15.getKeySum();
console.log(res15)
const ress15 = myObj15.reversKey();
console.log(ress15)



console.log("Блок 2 Задание 1");
const arr21 = ['Vasya', 'Petya', 'Alexey']
console.log(arr21, 'was')
function removeUser(arr21, num) {
    return arr21.splice(num, 1)
}
removeUser(arr21, 1)
console.log(arr21, 'is') /// ['Vasya', 'Alexey']



console.log("Блок 2 Задание 2");
const div522 = document.getElementById('task_522');
div522.append(document.createElement('div'));
div522.append(document.createElement('div'));
div522.append(document.createElement('div'));
const myDivs = div522.children
for (let i=0; i<myDivs.length; i++) {
    myDivs[i].style.cssText=`
        width: 100px;
        height: 100px;
        position: absolute;
        `}
myDivs[0].style.backgroundColor="red"
myDivs[0].style.top="0"
myDivs[1].style.backgroundColor="blue"
myDivs[1].style.left="60px"
myDivs[1].style.top="60px"
myDivs[1].style.zIndex="2"
myDivs[2].style.backgroundColor="green"
myDivs[2].style.left="120px"
myDivs[2].style.top="120px"



console.log("Блок 2 Задание 3");
const holder = document.querySelector('.holder');
const colors = ['red', 'blue','purple', 'green', 'yellow']
const orders = [1, 4, 3, 5, 2]
const width = [450, 300, 300, 300, 450]
for (let i=1; i<6; i++) {
    holder.append(document.createElement('div'))
    holder.lastElementChild.className='item'
    holder.lastElementChild.innerHTML=`${i}`
    holder.lastElementChild.style.cssText = `
                            background-color: ${colors[i-1]};
                            width: ${width[i-1]}px;
                            order: ${orders[i-1]};
                            height: 100px;
                            display: flex;
                            align-items: center;
                            font-size: 30px;
                            font-weight: bold;
                            justify-content: center;        
                            `
                            }
let item = document.getElementsByClassName('item')[0]
holder.style.cssText = `
                margin-top: 300px;
                width: 900px;
                border: 6px solid black;
                border-radius: 25px 25px 0 0;
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                `



console.log("Блок 2 Задание 4");
function sampleFunc() {
    console.log (`${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}`)
}
function modificator(func) {
    return func.bind(this, 'test', 'sample')
}
const testFunc = modificator(sampleFunc);
testFunc(); // sampleFunc: test | sample



console.log("Блок 2 Задание 5");
const group = [{
                name: "John",
                lastName: "Silver",
                age: 88,
                notebook: false,
                },
              {
                name: "Jimmy",
                lastName: "Smith",
                age: 15,
                notebook: true,
              },
];

function getStudentsList(arrayOfStudents) {
    for(let i=0; i<arrayOfStudents.length; i++){
        let str = ""
        for(let myObjEl in arrayOfStudents[i]){
            if (arrayOfStudents[i].hasOwnProperty(myObjEl)){
                str += `${myObjEl} - ${arrayOfStudents[i][myObjEl]}, `
        }}
        console.log(str.slice(0, -2))
    }
}
function getStudentsList1(arrayOfStudents) {
    for(let i=0; i<arrayOfStudents.length; i++){
        let str = ""
        let counter = 0
        for(let myObjEl in arrayOfStudents[i]){
            if (arrayOfStudents[i].hasOwnProperty(myObjEl)){
                str += `${myObjEl} - ${arrayOfStudents[i][myObjEl]}${counter===Object.keys(arrayOfStudents[i]).length-1 ? ';': ','} `
                counter ++
        }}
        console.log(str)
    }
}
function getStudentsList2(arrayOfStudents) {
    let str = ""
    arrayOfStudents.forEach(el=>{
        let keys = Object.keys(el)
        keys.forEach(elm=>str +=`${elm} - ${el[elm]}, `)
    })
    console.log(str.slice(0, -2))
}
console.log('.....вариант 1')
getStudentsList(group) // Name - Vlad,lastName - Test,haveLaptop - true
console.log('.....вариант 2')
getStudentsList1(group);
console.log('.....вариант 3')
getStudentsList2(group);



console.log("Блок 3 Задание 1");
const p = document.createElement('p')
holder.after(p)
p.style.cssText=`
            display: inline-block;
            cursor: pointer;`
p.innerText = 'I am a "p" element, click on me....'
const div = document.createElement('div')
div.className = 'imgWrapper'
p.after(div)
const imgWrapper = document.querySelector('.imgWrapper')
const insertPicture = document.createElement('img')
insertPicture.className='img'
imgWrapper.append(insertPicture)
imgWrapper.style.cssText =`height: 210px;`
const img = document.getElementsByTagName('img')[0]
img.style.cssText = `visibility: hidden;`
img.src="picture1.jpg"
p.addEventListener('click', function (){
    img.style.visibility='visible'
         })
img.addEventListener('mouseover', function (){
    img.style.cssText=`
        scale: 2;
        transform-origin: left top;
        transition: scale 5s;
        `})
img.addEventListener('click', function (){
    img.style.cssText = `
         visibility: hidden;
         `})




console.log("Блок 3 Задание 2");
const arr_532 = [1, 2, 3, 0, 4, 5, 6]
let resulut532 = 0
for(let i=arr_532.length-1; i>-1; i--) {
    if (arr_532[i] !== 0) {
        resulut532 += arr_532[i]
    }
    else {
        break
    }
}
console.log('sum is ', resulut532)



console.log("Блок 3 Задание 3");
const arr_533 = [1, 2, 3, 0, 4, 5, 6]
let mySum = 0
let quantity = 0
for (let i=0; i<arr_533.length; i++){
    mySum += arr_533[i]
    if (mySum > 10) {
        quantity = i+1
        break
    }
}
console.log('we needed ', quantity, ' figures to reach >10', arr_533.slice(0, quantity))



console.log("Блок 3 Задание 4");
const form_btn = document.getElementById('form_btn')
const form_input = document.getElementById('form_input')
form_input.placeholder='see result in console'

form_btn.addEventListener('click', function (){
    console.log(document.getElementById('form_input').value)
})




console.log("Блок 3 Задание 5");
const links = document.getElementsByTagName('a')
for (let i=0; i < links.length; i++) {
    links[i].addEventListener('mouseover', function (){
        links[i].append(document.createElement('span'));
        links[i].children[0].textContent=` (${links[i].href})`
    })
    links[i].addEventListener('mouseout', function (){
        links[i].children[0].innerHTML=''
    })
}



console.log("Блок 3 Задание 6");
const btn535 = document.getElementById('btn535')
btn535.addEventListener('click', function (){
    btn535.style.visibility='hidden'
})



console.log("Блок 3 Задание 7");
const circle = document.getElementById('circle')
const circle_wrapper = document.getElementById('circle_wrapper')
const form1_input = document.getElementById('form1_input')
const form1_btn = document.getElementById('form1_btn')

form1_input.addEventListener('keyup', function (event){
    if (
        (!isNaN(+form1_input.value)) || ((form1_input.value[0] ==='-') && (form1_input.value.length===1))
    ) {}
    else {
        console.log('Not a number')
        form1_input.value = ''
    }
})

let movePixels;
form1_btn.addEventListener('click', function (){
    if (+form1_input.value > 600 || +form1_input.value < 0) {
        console.log('should be error')
        form1_input.value = 'ERROR'
    }
    else {
        movePixels = +form1_input.value
        circle.animate(
            [
                {transform: `translateX(${movePixels}px`, offset: 0.5},
                {borderRadius: '50%'},
                {backgroundColor: 'green'},
                {borderRadius: '5%'},
                {backgroundColor: 'yellow'},
                {borderRadius: '50%'},
                {backgroundColor: 'purple'},
                {borderRadius: '5%'},
                {backgroundColor: 'blue'},
                {borderRadius: '50%'},
            ],
            {duration:10000, iterations: 2, direction: "reverse"})
    }
})

circle.style.cssText = `
                animation-name: move-circle;
                animation-duration: 10s;
                height: 100px;
                width: 100px;
                border: 5px solid black;
                border-radius: 50%;
                `
