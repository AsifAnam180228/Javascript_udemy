'use strict';

//---------------------------------------------------------
let hasDriversLicesce = false
const passTest = true
if (passTest) hasDriversLicesce = true
if (hasDriversLicesce) console.log('I can drive a car!')

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

let average = (score1, score2, score3)=>(score1+score2+score3)/3


function teamAverage(dolphine, koala){
    return (dolphine+koala)/2
}

function checkWinner(avgDolphoine, avgKoala){

    const avgDolphoine = average(44,23,71)

    const avgKoala = average(65,54,49)

    if(avgDolphoine> 2*avgKoala){
        console.log(`Dolphines win (${avgDolphoine} vs ${avgKoala})`)
    }
    else if(avgKoala> 2*avgDolphoine){
        console.log(`Koalas win (${avgDolphoine} vs ${avgKoala})`)
    } 
    else
        console.log('Match draw!')
}