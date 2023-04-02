
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