import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5 //updates per second
const snakeBody = [
    {x:11,y:11}
]
let newSegments = 0

export function update(){
    addSegments()

    const inputDirection = getInputDirection()
    for(let i = snakeBody.length - 2; i>=0;i--){
        snakeBody[i +1] = { ...snakeBody[i]}
    }
    snakeBody[0].x +=inputDirection.x
    snakeBody[0].y +=inputDirection.y

    // snakeBody[0].x +=1 // hard coded movements
    // snakeBody[0].y +=0 // hard coded movements
}

export function draw(gameBoard){
    snakeBody.forEach(segment =>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount){
    newSegments += amount
}

export function onSnake(position){
    //some will check every object in the body ,instead of doing a loop
    return snakeBody.some(segment => {
        return equalPosition(segment, position)
    })
}

function equalPosition(pos1,pos2){
    return (
        pos1.x === pos2.x && pos1.y === pos2.y
    )
}

function addSegments() {
    for(let i = 0; i < newSegments; i++){
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    }

    newSegments = 0
}