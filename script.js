document.addEventListener('DOMContentLoaded',() => {

    //card options
    const cardArray = [
        {
            name: 'wolf',
            img: 'images/wolf.jpg'
        },
        {
            name: 'bison',
            img: 'images/bison.jpg'
        },
        {
            name: 'bear',
            img: 'images/bear.jpg'
        },
        {
            name: 'eagle',
            img: 'images/eagle.jpg'
        },
        {
            name: 'owl',
            img: 'images/owl.jpg'
        },
        {
            name: 'squirrel',
            img: 'images/squirrel.jpg'
        },
        {
            name: 'wolf',
            img: 'images/wolf.jpg'
        },
        {
            name: 'bison',
            img: 'images/bison.jpg'
        },
        {
            name: 'bear',
            img: 'images/bear.jpg'
        },
        {
            name: 'eagle',
            img: 'images/eagle.jpg'
        },
        {
            name: 'owl',
            img: 'images/owl.jpg'
        },
        {
            name: 'squirrel',
            img: 'images/squirrel.jpg'
        }
    ]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/day.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/day.jpg')
        cards[optionTwoId].setAttribute('src', 'images/day.jpg')
        alert('You have clicked the same image')
    }else if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/night.jpg')
        cards[optionTwoId].setAttribute('src', 'images/night.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/day.jpg')
        cards[optionTwoId].setAttribute('src', 'images/day.jpg')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations! You found them all!!!'
    }
}

function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length ===2){
        setTimeout(checkForMatch, 500)
    }
}

createBoard()


})
