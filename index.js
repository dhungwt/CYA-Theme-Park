//create your chatbot here!
//food: cotton candy, fried oreos, corndog, funnel cake
// rides: roller coaster, carousel, gravitron, ferris wheel
// clown, child crying, funhouse mirror
//Get the name of the person who is doing Journey 

let name = prompt("Hey! Whats your name?")
//Possible have the inputs set from the start?
// let input_1
// let input_2
// let input_3
// let input_4
// This code can also be erased if uneeded


console.log(name + "! Welcome to Univerial 6 Moons Park")

console.log("                       __  __             ")
console.log("                   __ [_|]'_|] __         ")
console.log("                  [_|].-'-_-_'-._]        ")
console.log("                _.'.'-.-''   '-.-'__      ")
console.log("               [_|]-.'.  '   ' .'.-_]     ")
console.log("              _/ /_/ '.'. ' ' .  .' -_    ")
console.log("             [_|]_'    '.'_'_. .'  '._]   ")
console.log("              |_|_| = = (.-_o) = = :-_'   ")
console.log("             [_|] _    .//\/_\.    .-_]   ")
console.log("               \_\_\ .'//_//_\\'. .-.     ")
console.log("               [_|]_`./.-/.-.-.\_'-_]     ")
console.log("                 '.'.-'-//__.\.\\.'       ")
console.log("                  [_|]-/.-_ .-[_\\        ")
console.log("                   // // [_|]  \.\\       ")
console.log("             _____//_//_________\.\\_____ ")


console.log("Maybe you should eat now before you get hungry exploring or waiting in line for rides. let's get a snack! What would you like?")
let food=prompt("Please enter A for cotton candy or B for fried oreos")
if (food === "A") {
  console.log("You inhale a wand of cotton candy. Ok! You're running on a sugar high now and you're ready to go!!")
 console.log("You find youself all the way at the end of the park and see two forks in the road.")
let section=prompt("Choose A to enter the House of Illusions and B to go into The Wild West.")
  
  if (section === "A") {
    console.log("You frantically try to escape then see an exit. But the exit is fake it's just a circe of corners. You begin to feel sick then throw up inside the House of Illusions. GAME OVER")
  }
  else {
   console.log("You enter the Wild West and are overcome with joy. There are so many fun rides, and you feel your insides squriming with excitement.")
   let ride=prompt("Choose A to ride the Wild Ridin' Carousel and B to ride the Swashbuckler Gravitron")
    if (ride === "A") {
      console.log("You hop on a horsey and the ride starts, but you see a little kid throwing up and start to feel sick. You throw up on the horsey. GAME OVER")
    }
    else {
      console.log("You stap yourself into the gravitron and have an amazing time as it spins you around. GAME WON")
    }
  }
  }
else if(food==="B") {
    console.log("You scarf down some fried oreos and a mother and child glare at you disapprovingly. You're kind of embarassed but you're full enough to last a few hours. \n You wander the park to see what you should do first. You turn the corner and a clown appears before you. He smiles at you and  You throw up :( Maybe its time to go home GAME OVER")
  }

