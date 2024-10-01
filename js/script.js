document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'gatolaranja',
            img: './img/gato-laranja.jfif'
        },
        {
            name: 'gatopreto',
            img: './img/gato-preto.png'
        },
        {
            name: 'siames',
            img: './img/siames.jfif'
        },
        {
            name: 'frajola',
            img: './img/frajola.jfif'
        },
        {
            name: 'gatocinza',
            img: './img/gato-cinza.jfif'
        },
        {
            name: 'gatolistrado',
            img: './img/gato-listrado.jfif'
        },
        {
            name: 'gatolaranja',
            img: './img/gato-laranja.jfif'
        },
        {
            name: 'gatopreto',
            img: './img/gato-preto.png'
        },
        {
            name: 'siames',
            img: './img/siames.jfif'
        },
        {
            name: 'frajola',
            img: './img/frajola.jfif'
        },
        {
            name: 'gatocinza',
            img: './img/gato-cinza.jfif'
        },
        {
            name: 'gatolistrado',
            img: './img/gato-listrado.jfif'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())
    
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#acertos')
    const errorDisplay = document.querySelector('#erros')
    const errorTitle = document.querySelector('#erro')
    const acertoTitle = document.querySelector('#acerto')
    const btnreiniciar = document.querySelector('.reiniciar')
    let erro = 0;
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'img/carta.avif')
            card.setAttribute('data-id', i)
            card.setAttribute('class', 'img')
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'img/carta.avif')
            cards[optionTwoId].setAttribute('src', 'img/carta.avif')
            alert('Você clicou na mesma imagem!')
            erro++
            errorDisplay.textContent = " " + erro
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('Você encontrou!')
            cards[optionOneId].setAttribute('src', 'img/certo.png')
            cards[optionTwoId].setAttribute('src', 'img/certo.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/carta.avif')
            cards[optionTwoId].setAttribute('src', 'img/carta.avif')
            alert('Desculpe, tente novamente!')
            erro++
            errorDisplay.textContent = " " + erro
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = " " + cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            acertoTitle.style.textContent = " "
            errorDisplay.style.display = "none"
            errorTitle.style.display = "none"
            resultDisplay.textContent = ' Parabéns! Você encontrou todos eles!'
            btnreiniciar.style.display = "flex"
        };
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    };
   

    createBoard()
});

// função para recarregar a página
function reiniciar() {
    location.reload();
    
}