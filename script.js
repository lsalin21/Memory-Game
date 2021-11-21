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
        },
    ]


const grid = document.querySelector('.grid')

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/Night.jpg')
        card.setAttribute('date-id', i)
        //card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

createBoard()


})
