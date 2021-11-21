document.addEventListener('DOMContentLoaded',() => {

    //card options
    const cardArray = [
        {
            name: 'wolf',
            img: 'images/Wolf.jpg'
        },
        {
            name: 'bison',
            img: 'images/Wolf.jpg'
        },
        {
            name: 'bear',
            img: 'images/Bear.jpg'
        },
        {
            name: 'eagle',
            img: 'images/Bear.jpg'
        },
        {
            name: 'owl',
            img: 'images/Bison.jpg'
        },
        {
            name: 'squirrel',
            img: 'images/Bison.jpg'
        },
        {
            name: 'wolf',
            img: 'images/Eagle.jpg'
        },
        {
            name: 'bison',
            img: 'images/Eagles.jpg'
        },
        {
            name: 'bear',
            img: 'images/Owl.jpg'
        },
        {
            name: 'eagle',
            img: 'images/Owl.jpg'
        },
        {
            name: 'owl',
            img: 'images/Squirrel.jpg'
        },
        {
            name: 'squirrel',
            img: 'images/Squirrel.jpg'
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
        card.setAttribute('src', 'images/Day.jpg')
        card.setAttribute('date-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/Day.jpg')
        cards[optionTwoId].setAttribute('src', 'images/Day.jpg')
        alert('You have clicked the same image')
    }else if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/Night.jpg')
        cards[optionTwoId].setAttribute('src', 'images/Night.jpg')
        cards[optionOneId].removeEventListener('click', flipcard)
        cards[optionTwoId].removeEventListener('click', flipcard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/Day.jpg')
        cards[optionTwoId].setAttribute('src', 'images/Day.jpg')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations! You found them all!!!'
    }
}

function flipcard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray(cardId).img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}

createBoard()


})
