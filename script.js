document.addEventListener("DOMContentLoaded", () => {
  renderScoreJSonBin();
});

//a var to record score
let score = {
  wins: 0,
  lose: 0,
  ties: 0,
};

const updateScore = function () {
  document.querySelector(
    ".recordScore"
  ).innerHTML = `Wins: ${score.wins} Lose: ${score.lose} Ties: ${score.ties}`;
};

updateScore();

//begin of the game only the deal button will availabe to start the game
document.getElementById("Hit-button").disabled = true;
document.getElementById("Stand-button").disabled = true;
document.getElementById("reset-button").disabled = true;
//global var for both the dealer total and the player total
let playerTotal = 0;
let dealerTotal = 0;

//global var for the gamestate to start game
let startGame = "startGame";
let gameOver = "GameOver";
let gamestate = startGame;

//global array for both the dealer and player
let playerHand = [];
let dealerHand = [];

//a var for acecount to check with player or dealer has any ace in the array
let playeraceCount = 0;
let dealeraceCount = 0;

//a var to record result
let result = "";

// Function to create an image element for a card
const createCardImage = function (card) {
  const cardImage = document.createElement("img");
  cardImage.src = card.img;
  return cardImage;
};

//once deal button press will start the game and both hit and stand button will be able
//player will draw two card first and check if any draw card is a ace
//dealer will get one card and check if the card is a ace

function main() {
  if (gamestate === startGame) {
    document.getElementById("Deal-button").disabled = true;
    shuffleDeck();
    document.getElementById("Hit-button").disabled = false;
    document.getElementById("Stand-button").disabled = false;
    document.getElementById("reset-button").disabled = true;
    //player starting gets two cards
    for (let i = 0; i < 2; i++) {
      let playerDraw = deck.pop();
      playerHand.push(playerDraw);
      playerTotal += playerDraw.rank;
      if (playerDraw.name === "ace") {
        playeraceCount++;
      }
    }
    //dealer get one visible card
    for (let i = 0; i < 1; i++) {
      let dealerDraw = deck.pop();
      dealerHand.push(dealerDraw);
      dealerTotal += dealerDraw.rank;
      if (dealerDraw.name === "ace") {
        dealeraceCount++;
      }
    }

    // Append the player cards to the player card div
    const playerCardHeader = document.createElement("h3");
    playerCardHeader.innerText = "Player Card:";
    playerCardDiv.appendChild(playerCardHeader);
    playerHand.forEach((card) => {
      playerCardDiv.appendChild(createCardImage(card));
    });

    // appendChild the dealer visible card to the dealer card div
    const dealerCardHeader = document.createElement("h3");
    dealerCardHeader.innerText = "Dealer Card:";
    dealerCardDiv.appendChild(dealerCardHeader);
    dealerHand.forEach((card) => {
      dealerCardDiv.appendChild(createCardImage(card));
    });

    //check if player card has 21 in the beginning of the game if have then player win
    if (playerTotal === 21 || playerTotal > 21) {
      let showResult = document.createElement("h2");
      result = "Player Wins";
      showResult.innerText = `Winning Winning Chicken Dinner!!`;
      outputDiv.appendChild(showResult);
      document.getElementById("Hit-button").disabled = true;
      document.getElementById("Stand-button").disabled = true;
      gamestate = gameOver;
      document.getElementById("reset-button").disabled = false;
    }
  }
  addScore();
  updateScore();
}

// if hit button is click player will draw one card and append the image of drawn card to the player card div
//check if player has any ace and if the player total is over 21 if true total will reduce by 10
function hit() {
  let playerDraw = deck.pop();
  playerCardDiv.appendChild(createCardImage(playerDraw));
  playerTotal += playerDraw.rank;
  if (playerDraw.name === "ace") {
    playeraceCount++;
  }
  if (playerTotal > 21 && playeraceCount > 0) {
    playerTotal -= 10;
    playeraceCount -= 1;
  }
  if (playerTotal > 21) {
    let showResult = document.createElement("h2");
    result = "Dealer Wins";
    showResult.innerText = `YOU BUSTED!!! Player: ${playerTotal} Dealer: ${dealerTotal}`;
    outputDiv.appendChild(showResult);
    document.getElementById("Hit-button").disabled = true;
    document.getElementById("Stand-button").disabled = true;
    gamestate = gameOver;
    document.getElementById("reset-button").disabled = false;
  }
  addScore();
  updateScore();
}

//if stand button click dealer card if less than 17 will draw till >=17
//check if dealer has any ace and if the dealer total is over 21 if true total will reduce by 10
function stand() {
  while (dealerTotal < 17) {
    let dealerDraw = deck.pop();
    dealerHand.push(dealerDraw);
    dealerTotal += dealerDraw.rank;
    dealerCardDiv.appendChild(createCardImage(dealerDraw));
    if (dealerDraw.name === "ace") {
      dealeraceCount++;
      if (dealerTotal > 21 && dealeraceCount > 0) {
        dealerTotal -= 10;
        dealeraceCount -= 1;
      }
    }
  }
  if (dealerTotal > 21) {
    let showResult = document.createElement("h2");
    result = "Player Wins";
    showResult.innerText = `YOU WIN!!! DEALER BUSTED!!! player: ${playerTotal} Dealer: ${dealerTotal}`;
    outputDiv.appendChild(showResult);
    document.getElementById("Hit-button").disabled = true;
    document.getElementById("Stand-button").disabled = true;
  } else if (playerTotal > dealerTotal) {
    let showResult = document.createElement("h2");
    result = "Player Wins";
    showResult.innerText = `YOU WIN!!! player: ${playerTotal} Dealer: ${dealerTotal}`;
    outputDiv.appendChild(showResult);
    document.getElementById("Hit-button").disabled = true;
    document.getElementById("Stand-button").disabled = true;
  } else if (playerTotal < dealerTotal) {
    let showResult = document.createElement("h2");
    result = "Dealer Wins";
    showResult.innerText = `YOU LOSE!!! player: ${playerTotal} Dealer: ${dealerTotal}`;
    outputDiv.appendChild(showResult);
    document.getElementById("Hit-button").disabled = true;
    document.getElementById("Stand-button").disabled = true;
  } else if (playerTotal === dealerTotal) {
    let showResult = document.createElement("h2");
    result = "Push";
    showResult.innerText = `IT A PUSH!!! player: ${playerTotal} Dealer: ${dealerTotal}`;
    outputDiv.appendChild(showResult);
    document.getElementById("Hit-button").disabled = true;
    document.getElementById("Stand-button").disabled = true;
  }
  gamestate = gameOver;
  document.getElementById("reset-button").disabled = false;
  addScore();
  updateScore();
}

const addScore = async () => {
  if (result === "Player Wins") {
    score.wins += 1;
  } else if (result === "Dealer Wins") {
    score.lose += 1;
  } else if (result === "Push") {
    score.ties += 1;
  }
  try {
    await axios.put(`${BASE_JSON_BIN_URL}/${BIN_ID}`, score, {
      headers: {
        "X-MASTER-KEY": MASTER_KEY,
      },
    });
    console.log("Score updated succesfully in JSON Bin");
  } catch (error) {
    console.error("Error updating JSONbin", error);
  }
  updateScore();
};

let resetGame = function () {
  if (gamestate === gameOver) {
    playerHand = [];
    dealerHand = [];
    gamestate = startGame;
    playerTotal = 0;
    dealerTotal = 0;
    result = "";
    deck = [...originalDeck];
    shuffleDeck();
    document.querySelector("#player-card").innerHTML = "";
    document.querySelector("#dealer-card").innerHTML = "";
    document.querySelector("#output-div").innerHTML = "";
    document.getElementById("Hit-button").disabled = true;
    document.getElementById("Stand-button").disabled = true;
    document.getElementById("Deal-button").disabled = false;
  }
};
