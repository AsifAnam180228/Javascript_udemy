'use strict';

//---------------------------------------------------------
/*
let hasDriversLicesce = false
const passTest = true
if (passTest) hasDriversLicesce = true
if (hasDriversLicesce) console.log('I can drive a car!')
*/
// const interface  = "audio"
// const private = "Car"
/*
function cutFruits(fruit){
    return fruit*4
}

function foodProcessor(apples, oranges){
    const applePieces = cutFruits(apples)//function call in a function
    const orangePieces = cutFruits(oranges)
    console.log(apples, oranges)
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} oranges pieces! `
    return juice
}
const appleJuice = foodProcessor(5,1)
console.log(appleJuice)

*/


//-------------------------------------------

/*
function calcAge1(birthyear){
    return 2023 - birthyear
}
const age1 = calcAge1(1999)

const calcAge2 = function(birthyear){
    return 2023 - birthyear
}
const age2 = calcAge2(1999)
console.log(age1, age2)

*/
//---------------------------Arrow function -----------------

/*
const calcAge3 = birthYear => 2037 - birthYear //what do we need => what do we want to return

const age3 = calcAge3(1998)
console.log(age3)

const yearsUntilRetairment = (birthYear, fristName)=> {
    const age = 2023 - birthYear
    const retairment = 65 - age

    return `${fristName} retires in ${retairment} years`
}

console.log(yearsUntilRetairment(1998, 'Shaon'))
console.log(yearsUntilRetairment(1995, 'Nicki'))
*/
//---------------------------------------------------------------------
/*
const calcAge = function(birthYear){
    return 2023 - birthYear
}

const yearsUntilRetairment = function(birthYear, fristName){
    const age = calcAge(birthYear)
    const retirement = 62 - age
    if(retirement>0){
        console.log(`${fristName} retires in ${retirement} years`)
        return retirement
    }
    else{
        console.log(`${fristName} already retaired!!`)
        return -1
    }

}
console.log(yearsUntilRetairment(1998, 'Shaon'))
console.log(yearsUntilRetairment(1960, 'Nicki'))

*/

//---------------challenge1----------------------
/*
function average(score1, score2, score3){
    return (score1+score2+score3)/3
}
const avgDolphine = average(44,23,71)
const avgKoala = average(85,54,41)

function checkWinner(avgDolphoine, avgKoala){

    if(avgDolphoine> 2*avgKoala){
        console.log(`Dolphines win (${avgDolphoine} vs ${avgKoala})`)
    }
    else if(avgKoala> 2*avgDolphoine){
        console.log(`Koalas win (${avgDolphoine} vs ${avgKoala})`)
    } 
    else
        console.log('Match draw!')
}
checkWinner(avgDolphine,avgKoala)
checkWinner(average(44,23,71), average(85,54,41))

 */
//-------------Arrays----------------------------------
/*
const friends = ['Asif', 'Anam', 'Shaon']
console.log(friends)
console.log(friends.length)
console.log(friends[friends.length-1])
friends[2] = 'Zoo'
console.log(friends)

const me = ['Asif', 'Anam', true, 24]
console.log(me)
function calcAge(birthyear){
    return 2023 - birthyear
}

const years = [1999,1998,2000,2020]
const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length-1])

console.log(age1,age2,age3)
const ages = [age1, age2, age3]
console.log(ages)

 */
//------------Array methods -----------------------
/*
const friends = ['Asif', 'Anam', 'Shaon']
friends.push('Arman') //add new element at the end
friends.push('Zoo')
friends.push('Alex')
console.log(friends)

friends.unshift('Aldo') //add at the begining
console.log(friends)
const popped = friends.pop() // remove last element
console.log(popped)
const removeFirst = friends.shift() //remove first
console.log(removeFirst)
console.log(friends.indexOf('Anam')) //index where element is located
console.log(friends.indexOf('Aldo'))

console.log(friends.includes('Anam')) //includes(true or false)
console.log(friends.includes('Aldo'))

if(friends.includes('Zoo')){
    console.log('You have a friend named Zoo')
}
*/

//----------coding challenge 2(tip calculator) -----------------
/*
let bills = [125,555,44]

function calcTip(bill){
    let tip
    if(bill>=50 && bill<=300 ){
        tip = bill*(15/100)
        return tip
    }
    else{
        tip = bill*(20/100)
        return tip
    }
}
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(tips)
let total = [calcTip(bills[0]+tips[0]), calcTip(bills[1]+tips[1]), calcTip(bills[2]+tips[2]) ]

console.log(total)

 */
//Array for sturctured data, Object for unstructured data
//---------------Object---------------
/*
const anam = {
    firstName: 'Asif',
    lastName: 'Anam',
    age: 2023 - 1999,
    job: 'Software Engineer',
    friends: ['Hi', 'Hello', 'Bello']
}
console.log(anam)
console.log(anam.lastName)
console.log(anam['friends'])

const nameKey = 'Name'
console.log(anam['first' + nameKey])

// const interestedIn = prompt('What do you want to know?')
// if(anam[interestedIn]){
//     console.log(anam[interestedIn])
// }
// else {
//     console.log()
// }
anam.location = 'Bangladesh'
console.log(anam)
console.log(`${anam.firstName} has ${anam.friends.length} friends and the best friend is ${anam.friends[0]}`)

 */
//-------------------object method-----------
/*
const anam = {
    firstName: 'Asif',
    lastName: 'Anam',
    birthYear: 1999,
    job: 'Software Engineer',
    friends: ['Hi', 'Hello', 'Bello'],
    hasDrivingLicense: false,

    // calcAge: function (birthYear) {
    //     console.log(this)
    //     return 2023- this.birthYear
    // }
    calcAge: function (birthYear) {
        this.age = 2023- this.birthYear
        return this.age
    },
    getSummery: function (){
    return `${this.firstName} is ${this.age} years old ${this.job}, and has ${(this.hasDrivingLicense)? 'a' : 'no'} driving license.`
}

}
console.log(anam.calcAge())

console.log(anam.age)
console.log(anam.age)
console.log(anam.age)


console.log(anam.getSummery())

// if(anam.hasDrivingLicense){
//     console.log(`${anam.firstName} is ${anam.age} years old ${anam.job}, and has a driving license.`)
// }
// else{
//     console.log(`${anam.firstName} is ${anam.age} years old ${anam.job}, and has no driving license.`)
// }

 */
//----------------challenge 3 ---------------------
/*
const mark ={
    fullName: 'Mark Miller',
    height: 1.69,
    weight: 78,
    calcBmi: function (){
        return (this.weight/(this.height**2))
    }
}
const john={
    fullName: 'John Smith',
    height: 1.95,
    weight: 92,
    calcBmi: function (){
        return (this.weight/(this.height**2))
    }

}
let str = `John's BMI is (${john.calcBmi()}) is 
${(john.calcBmi()>mark.calcBmi())? 'greater': 'less'} than Mark's BMI
(${mark.calcBmi()})`
console.log(str)

 */

//---------for loop -----------------------------

// for(let rep =1; rep<=10; rep++){
//     console.log(`Lifting weight repetition ${rep} 🏋🏽‍♂️🏋🏽‍♂️🏋`)
// }

//-----------------------------------------------
/*
const anam = [
     'Asif',
     'Anam',
    2023 - 1999,
    'Software Engineer',
    ['Hi', 'Hello', 'Bello']
]
const types= []
for(let i = 0; i<anam.length; i++){
    console.log(anam[i], typeof anam[i])

    // types[i] = typeof anam[i]
    types.push(typeof anam[i])
}
console.log(types)

 */

//------------------------------------------------

const years = [1991,2007,1969,2020]
const  ages = []

// for(let i = 0; i<years.length; i++){
//     ages.push(2023-years[i])
// }
// console.log(ages)

//-------------continue--------------------
const anam = [
    'Asif',
    'Anam',
    2023 - 1999,
    'Software Engineer',
    ['Hi', 'Hello', 'Bello'],
    true,
    401
]
console.log('----------Only strings---------------')
for(let i = 0; i<anam.length; i++){
    if(typeof anam[i]!== "string")
        continue
    else
        console.log(anam[i])
}
console.log('----------break strings---------------')
for(let i = 0; i<anam.length; i++){
    if(typeof anam[i] == "number") {
        break
    }
    else
        console.log(anam[i])
}
//=============while=================

let i =1
while (i<10){
    console.log(i)
    i++
}

let dice = Math.trunc( Math.random()*6+1)

 while(dice !== 6){
    console.log(`You've rolled a ${dice}!`)
    dice = Math.trunc( Math.random()*6+1)

}


