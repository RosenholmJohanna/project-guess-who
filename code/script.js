// TO DO 
// add function playAgain & reset
// add filled "guess" button & add audio to it
// add info "other" and where's missing
// create if else to selections category
//Create filter, to filter out stored values depending on choosen option

// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const playAgainButton = document.getElementById('playAgain')
const findOutButton = document.getElementById('filter')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]



// Global variables
let secret;
let currentQuestion;
let charactersInPlay;

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array and set as the value of the global variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
}

// Function to start (and restart) the game
const start = () => {
charactersInPlay = CHARACTERS // Here we're setting charactersInPlay array to be all the characters to start with
  generateBoard();  // J: set the board whit all characters 
  setSecret(); // random secret person
  selectQuestion();//  
} //;

console.log((setSecret)) 

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label //category
  const value = questions.options[questions.selectedIndex].value; // value
  currentQuestion = {
    category: category, 
    value: value, 
  };

  console.log(category, value)
};

  
//value: value
//currentQuestion = {
//category: category, }

// Function to be invoked when click on 'FIND OUT' button. 
const checkQuestion = () =>  {
  const { category, value } = currentQuestion

  if (category === 'hair' || category === 'eyes') {
      if (value === secret[category]) {
        keep = true
      } else {
        keep = false
      }

  } else if (category === 'accessories' || category === 'other') 
    { if (secret[category](value)) {
    keep = true
  } else {
    keep = false
  }
  } 
  filterCharacters (keep)
} 
  
// Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
// See if we should keep or remove people based on that
// Then invoke filterCharacters
// FILTER the characters array and REDRAW the game board.

// create tenarry below to shorten the code 

const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'hair') {
    if (keep) {
      alert( `YES,  ${value} hair! Keep all people that have ${value} hair`
      )
    } else  {
      alert(`NO,  ${value}! Remove all people that wears ${value}`
      )
    }

  } else if (category === 'eyes') {
    if (keep) {
      alert(`YES, the person does not ${value}`)
    } else {
      alert(`NO, the person does not ${value}`)
    }

  } else if (category === 'accessories') {
    if (keep) {
      alert( `YES, the person wears ${value}! Keep all people that wears ${value}`)
    } else {
      alert(`NO ${value}! Remove all people that wears ${value}`)
    }

  } else if (category === 'other') {

    if (keep) {
      alert(`YES, the person have ${value}`)
   
    } else {
      alert(`NO, remove all with ${value}`)
    }
  
} 

if (category === 'hair' || category === 'eyes') {
  if (keep) {
  charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
} else {
  charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
}

generateBoard();
}}
  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  /* 
    for hair and eyes :
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      or
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

    for accessories and other
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      or
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  */

  // Invoke a function to redraw the board with the remaining people.


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded  
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)  // J: dropdown with selections 
findOutButton.addEventListener('click', checkQuestion) 

