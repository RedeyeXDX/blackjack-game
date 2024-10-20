//global array for the deck
var deck = [
  {
    name: 'ace',
    suit: 'hearts',
    rank: 11,
    img:  "./cards/A-H.png"
  },
  {
    name: '2',
    suit: 'hearts',
    rank: 2,
    img: "./cards/2-H.png"
  },
  {
    name: '3',
    suit: 'hearts',
    rank: 3,
    img: "./cards/3-H.png"
  },
  {
    name: '4',
    suit: 'hearts',
    rank: 4,
    img: "./cards/4-H.png"
  },
  {
    name: '5',
    suit: 'hearts',
    rank: 5,
    img:"./cards/5-H.png"
  },
  {
    name: '6',
    suit: 'hearts',
    rank: 6,
    img: "./cards/6-H.png"
  },
  {
    name: '7',
    suit: 'hearts',
    rank: 7,
    img: "./cards/7-H.png"
  },
  {
    name: '8',
    suit: 'hearts',
    rank: 8,
    img: "./cards/8-H.png"
  },
  {
    name: '9',
    suit: 'hearts',
    rank: 9,
    img: "./cards/9-H.png"
  },
  {
    name: '10',
    suit: 'hearts',
    rank: 10,
    img: "./cards/10-H.png"
  },
  {
    name: 'jack',
    suit: 'hearts',
    rank: 10,
    img: "./cards/J-H.png"
  },
  {
    name: 'queen',
    suit: 'hearts',
    rank: 10,
    img: "./cards/Q-H.png"
  },
  {
    name: 'king',
    suit: 'hearts',
    rank: 10,
    img: "./cards/K-H.png"
  },
  {
    name: 'ace',
    suit: 'diamonds',
    rank: 11,
    img: "./cards/A-D.png"
  },
  {
    name: '2',
    suit: 'diamonds',
    rank: 2,
    img: "./cards/2-D.png"
  },
  {
    name: '3',
    suit: 'diamonds',
    rank: 3,
    img: "./cards/3-D.png"
  },
  {
    name: '4',
    suit: 'diamonds',
    rank: 4,
    img: "./cards/4-D.png"
  },
  {
    name: '5',
    suit: 'diamonds',
    rank: 5,
    img: "./cards/5-D.png"
  },
  {
    name: '6',
    suit: 'diamonds',
    rank: 6,
    img: "./cards/6-D.png"
  },
  {
    name: '7',
    suit: 'diamonds',
    rank: 7,
    img: "./cards/7-D.png"
  },
  {
    name: '8',
    suit: 'diamonds',
    rank: 8,
    img: "./cards/8-D.png"
  },
  {
    name: '9',
    suit: 'diamonds',
    rank: 9,
    img: "./cards/9-D.png"
  },
  {
    name: '10',
    suit: 'diamonds',
    rank: 10,
    img: "./cards/10-D.png"
  },
  {
    name: 'jack',
    suit: 'diamonds',
    rank: 10,
    img: "./cards/J-D.png"
  },
  {
    name: 'queen',
    suit: 'diamonds',
    rank: 10,
    img: "./cards/Q-D.png"
  },
  {
    name: 'king',
    suit: 'diamonds',
    rank: 10,
    img: "./cards/K-D.png"
  },
  {
    name: 'ace',
    suit: 'clubs',
    rank: 11,
    img: "./cards/A-D.png"
  },
  {
    name: '2',
    suit: 'clubs',
    rank: 2,
    img: "./cards/2-C.png"
  },
  {
    name: '3',
    suit: 'clubs',
    rank: 3,
    img: "./cards/3-C.png"
  },
  {
    name: '4',
    suit: 'clubs',
    rank: 4,
    img: "./cards/4-C.png"
  },
  {
    name: '5',
    suit: 'clubs',
    rank: 5,
    img: "./cards/5-C.png"
  },
  {
    name: '6',
    suit: 'clubs',
    rank: 6,
    img: "./cards/6-C.png"
  },
  {
    name: '7',
    suit: 'clubs',
    rank: 7,
    img: "./cards/7-C.png"
  },
  {
    name: '8',
    suit: 'clubs',
    rank: 8,
    img: "./cards/8-C.png"
  },
  {
    name: '9',
    suit: 'clubs',
    rank: 9,
    img: "./cards/9-C.png"
  },
  {
    name: '10',
    suit: 'clubs',
    rank: 10,
    img: "./cards/10-C.png"
  },
  {
    name: 'jack',
    suit: 'clubs',
    rank: 10,
    img: "./cards/J-C.png"
  },
  {
    name: 'queen',
    suit: 'clubs',
    rank: 10,
    img: "./cards/Q-C.png"
  },
  {
    name: 'king',
    suit: 'clubs',
    rank: 10,
    img: "./cards/K-C.png"
  },
  {
    name: 'ace',
    suit: 'spades',
    rank: 11,
    img: "./cards/A-S.png"
  },
  {
    name: '2',
    suit: 'spades',
    rank: 2,
    img: "./cards/2-S.png"
  },
  {
    name: '3',
    suit: 'spades',
    rank: 3,
    img: "./cards/3-S.png"
  },
  {
    name: '4',
    suit: 'spades',
    rank: 4,
    img: "./cards/4-S.png"
  },
  {
    name: '5',
    suit: 'spades',
    rank: 5,
    img: "./cards/5-S.png"
  },
  {
    name: '6',
    suit: 'spades',
    rank: 6,
    img: "./cards/6-S.png"
  },
  {
    name: '7',
    suit: 'spades',
    rank: 7,
    img: "./cards/7-S.png"
  },
  {
    name: '8',
    suit: 'spades',
    rank: 8,
    img: "./cards/8-S.png"
  },
  {
    name: '9',
    suit: 'spades',
    rank: 9,
    img: "./cards/9-S.png"
  },
  {
    name: '10',
    suit: 'spades',
    rank: 10,
    img: "./cards/10-S.png"
  },
  {
    name: 'jack',
    suit: 'spades',
    rank: 10,
    img: "./cards/J-S.png"
  },
  {
    name: 'queen',
    suit: 'spades',
    rank: 10,
    img: "./cards/Q-S.png"
  },
  {
    name: 'king',
    suit: 'spades',
    rank: 10,
    img: "./cards/K-S.png"
  },
];

//begin of the game only the deal button will availabe to start the game
document.getElementById("Hit-button").disabled = true
document.getElementById("Stand-button").disabled = true
//global var for both the dealer total and the player total
let playerTotal = 0;
let dealerTotal = 0;

//global var for the gamestate to start game
let startGame = "startGame"
let gamestate = startGame;

//global array for both the dealer and player
let playerHand = [];
let dealerHand = [];

//a var for acecount to check with player or dealer has any ace in the array
let playeraceCount = 0;
let dealeraceCount = 0;


// this function will shuffle the deck making it random
let shuffleDeck = function (){
  for(let i = 0; i <deck.length; i++){
    let j = Math.floor(Math.random()*deck.length);
    let temp = deck[i];
    deck[i]= deck[j];
    deck[j]= temp;
  }
  console.log(deck)
}

// Function to create an image element for a card
const createCardImage = function (card) {
  const cardImage = document.createElement('img');
  cardImage.src = card.img;
  return cardImage;
};

//once deal button press will start the game and both hit and stand button will be able
//player will draw two card first and check if any draw card is a ace
//dealer will get one card and check if the card is a ace

function main (){
if (gamestate === startGame){
  document.getElementById("Deal-button").disabled = true;
  shuffleDeck();
  document.getElementById("Hit-button").disabled = false
  document.getElementById("Stand-button").disabled = false
  //player starting gets two cards
  for (i = 0; i < 2; i++){
    let playerDraw = deck.pop()
    playerHand.push(playerDraw);
    playerTotal += playerDraw.rank;
    if (playerDraw.name === "ace"){
      playeraceCount ++
    }
  }
  //dealer get one visible card
  for (i=0; i<1;i++){
    let dealerDraw = deck.pop()
    dealerHand.push(dealerDraw);
    dealerTotal += dealerDraw.rank;
    if (dealerDraw.name === "ace"){
      dealeraceCount++
    }
  }

    // Append the player cards to the player card div
    const playerCardHeader = document.createElement('h3');
    playerCardHeader.innerText = "Player Card:";
    playerCardDiv.appendChild(playerCardHeader);
    playerHand.forEach(card => {
      playerCardDiv.appendChild(createCardImage(card));
    });

    // appendChild the dealer visible card to the dealer card div
    const dealerCardHeader = document.createElement('h3');
    dealerCardHeader.innerText = "Dealer Card:";
    dealerCardDiv.appendChild(dealerCardHeader);
    dealerHand.forEach(card => {
    dealerCardDiv.appendChild(createCardImage(card));
    });

    //check if player card has 21 in the beginning of the game if have then player win
    if (playerTotal === 21 || playerTotal > 21){
      let result = document.createElement('h2');
      result.innerText = `Winning Winning Chicken Dinner!!`
      outputDiv.appendChild(result);
      document.getElementById("Hit-button").disabled = true
      document.getElementById("Stand-button").disabled = true
    }
}};

// if hit button is click player will draw one card and append the image of drawn card to the player card div
//check if player has any ace and if the player total is over 21 if true total will reduce by 10
function hit (){
  let playerDraw = deck.pop()
  playerCardDiv.appendChild(createCardImage(playerDraw));
  playerTotal += playerDraw.rank;
  if (playerDraw.name === 'ace'){
    playeraceCount ++
  }
  if (playerTotal >21 && playeraceCount >0){
    playerTotal -= 10;
    playeraceCount -=1;
  }
  if (playerTotal > 21){
      const outputDiv = document.getElementById('output-div')
      let result = document.createElement('h2');
      result.innerText = `YOU BUSTED!!!` 
      outputDiv.appendChild(result);
      document.getElementById("Hit-button").disabled = true
      document.getElementById("Stand-button").disabled = true
  }
  console.log(playeraceCount);
  console.log(playerTotal);
}

//if stand button click dealer card if less than 17 will draw till >=17
//check if dealer has any ace and if the dealer total is over 21 if true total will reduce by 10
function stand(){
  while (dealerTotal < 17){
    let dealerDraw = deck.pop();
    dealerHand.push(dealerDraw);
    dealerTotal += dealerDraw.rank;
    dealerCardDiv.appendChild(createCardImage(dealerDraw));
      if (dealerDraw.name === 'ace'){
    dealeraceCount ++;
    if (dealerTotal > 21 && dealeraceCount > 0){
      dealerTotal -= 10;
      dealeraceCount -=1;
    }
  }};
    if (dealerTotal > 21) {
    let result = document.createElement('h2');
    result.innerText = `YOU WIN!!! DEALER BUSTED!!` 
    outputDiv.appendChild(result);
    document.getElementById("Hit-button").disabled = true
    document.getElementById("Stand-button").disabled = true
  } else if (playerTotal > dealerTotal){
    let result = document.createElement('h2');
    result.innerText = `YOU WIN!!! player: ${playerTotal} Dealer: ${dealerTotal}` 
    outputDiv.appendChild(result);
    document.getElementById("Hit-button").disabled = true
    document.getElementById("Stand-button").disabled = true
  } else if (playerTotal < dealerTotal){
    let result = document.createElement('h2');
    result.innerText = `YOU LOSE!!! player: ${playerTotal} Dealer: ${dealerTotal}` 
    outputDiv.appendChild(result);
    document.getElementById("Hit-button").disabled = true
    document.getElementById("Stand-button").disabled = true
  } else if (playerTotal === dealerTotal){
    let result = document.createElement('h2');
    result.innerText = `IT A PUSH!!! player: ${playerTotal} Dealer: ${dealerTotal}` 
    outputDiv.appendChild(result);
    document.getElementById("Hit-button").disabled = true
    document.getElementById("Stand-button").disabled = true
  }
  console.log(dealerTotal);
  console.log(dealeraceCount);
}
