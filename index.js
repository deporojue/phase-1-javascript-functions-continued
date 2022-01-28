function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun("play basketball"))

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

console.log(mondayWork("sleep all day long"))


const wrapAdjective=function(flair="*") {
    return function inner(adjective="special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

console.log(wrapAdjective("%")("a dedicated programmer"))

