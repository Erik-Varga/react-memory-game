import './App.css'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import SingleCard from './components/SingleCard'

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false }
]

function App() {
  const [numbers, setNumbers] = useState([]);
  const arr = [
    "/img/cover1.png", 
    "/img/cover2.png", 
    "/img/cover3.png", 
    "/img/cover4.png",
    "/img/cover5.png",
    "/img/cover6.png",
    "/img/cover7.png",
    "/img/cover8.png",
    "/img/cover9.png",
    "/img/cover10.png",
    "/img/cover11.png",
  ];

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  
  // shuffle cards
  const shuffleCards = () => {
    resetNumber();
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

  }

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        console.log('match')
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src)  {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
        
      }
    }
  }, [choiceOne, choiceTwo])

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  const resetNumber = () => {
    const randomNumbers = [];
    while (randomNumbers.length < 1) {
      const index = Math.floor(Math.random() * arr.length);
      const number = arr[index];
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }
    setNumbers(randomNumbers);
  }

useEffect(() => {
    resetNumber();
    shuffleCards();
  }, []);

  return (
    <div className='App flex flex-col justify-between'>
      <div className='font2 text-2xl text-orange-400 mb-4'>Magic Memory</div>

      <div className="box">
        <div>
          <button onClick={shuffleCards} className='newGameBtn'>New Game</button>
          <div className="card-grid">
            {cards.map(card => (
              <SingleCard 
                key={card.id} 
                card={card} 
                numbers={numbers}
                handleChoice={handleChoice} 
                flipped={card === choiceOne || card === choiceTwo || card.matched}
                disabled={disabled}
              />
            ))}
          </div>
        <p className='mt-5'>Turns: {turns}</p>
        <hr class="w-48 h-1 mx-auto my-2 bg-gray-700 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
        </div>
      </div>




      
      <Footer />
    </div>
  )
}

export default App
