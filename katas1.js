function oneThroughTwenty() {
  let test = []
    for(let i = 1; i <= 20; i++){
      test.push(i)
      
    }
    return test
}
console.log(oneThroughTwenty())

//call function oneThroughTwenty


function evensToTwenty() {
  let test = []
  for (let i = 1; i <= 20; i++){
    if(i % 2 == 0){
      test.push(i)
    }else{
      console.log('')
    }
  }
  return test
}
console.log(evensToTwenty())

//call function evensToTwenty

function oddsToTwenty() {
  let test = []
    for (let i = 1; i <= 20; i++){
      if(i % 2 !== 0){
        test.push(i)
      }else{
        console.log('')
      }
      
    }
  return test
}
console.log(oddsToTwenty())
//call function oddsToTwenty
 

function multiplesOfFive() {
  let test = []
  for (let i = 5; i <= 100; i++){
    if(i % 5 == 0){
      test.push(i)
    }else{
      console.log('')
    }
  }
  return test
}
console.log(multiplesOfFive())

//call function multiplesOfFive
//let limite2 = [10]

function squareNumbers(){
  let test = []
  for(let i=1; i<=10; i++){
    test.push(i*i)
  }
    
return test
}
console.log(squareNumbers())
//call function squareNumbers
let limite3 = [1]
function countingBackwards(){
  let test = []
  for (let i = 20; i >= 1; i--){
    test.push(i)
  }
    
 return test
}
console.log(countingBackwards())

//call function countingBackwards

function evenNumbersBackwards(){
  let test = []
  for(let i = 20; i >= 1; i--){
    if(i % 2 == 0){
      test.push(i)
    }else{
      console.log('')
    }
  }
    
return test
}
console.log(evenNumbersBackwards())

//call function evenNumbersBackwards

function oddNumbersBackwards() {
  let test = []
  for(let i = 20; i >= 1; i--){
    if(i % 2 !== 0){
      test.push(i)
    }else{
      console.log('')
    }
  }
    
 return test
}
console.log(oddNumbersBackwards())
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  let test = []
  for(let i = 100; i >= 5; i--){
    if(i % 5 ==0){
      test.push(i)
    }else{
      console.log('')
    }
  }
    
 return test
}
console.log(multiplesOfFiveBackwards())
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
  let test = []
  for(let i = 10; i >= 1; i--){
    test.push(i*i)
  }
    
   return test
}
console.log(squareNumbersBackwards())
//call function squareNumbersBackwards
