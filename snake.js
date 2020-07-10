
export const SNAKE_SPEED = 2 //updates per second
const snakeBody = [
    {x:10,y:11},
    {x:11,y:11},
    {x:12,y:11}
]

export function update(){
    for(let i = snakeBody.length - 2; i>=0;i--){
        snakeBody[i +1] = { ...snakeBody[i]}
    }

    snakeBody[0].x +=1
    snakeBody[0].y +=0
}

export function draw(gameBoard){
    snakeBody.forEach(segment =>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}