import { onSnake,expandSnake } from "./snake.js";

export const SNAKE_SPEED = 5 //updates per second
let food = {x:10,y:1}
const EXPANSION_RATE = 1

export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = { x:20,y:10 }
    }
}

export function draw(gameBoard){
    const foodElement = document.createElement('div')

    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x

    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}