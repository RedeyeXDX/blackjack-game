//global array for the deck
let deck = [
  {
    name: "ace",
    suit: "hearts",
    rank: 11,
    img: "./cards/A-H.png",
  },
  {
    name: "2",
    suit: "hearts",
    rank: 2,
    img: "./cards/2-H.png",
  },
  {
    name: "3",
    suit: "hearts",
    rank: 3,
    img: "./cards/3-H.png",
  },
  {
    name: "4",
    suit: "hearts",
    rank: 4,
    img: "./cards/4-H.png",
  },
  {
    name: "5",
    suit: "hearts",
    rank: 5,
    img: "./cards/5-H.png",
  },
  {
    name: "6",
    suit: "hearts",
    rank: 6,
    img: "./cards/6-H.png",
  },
  {
    name: "7",
    suit: "hearts",
    rank: 7,
    img: "./cards/7-H.png",
  },
  {
    name: "8",
    suit: "hearts",
    rank: 8,
    img: "./cards/8-H.png",
  },
  {
    name: "9",
    suit: "hearts",
    rank: 9,
    img: "./cards/9-H.png",
  },
  {
    name: "10",
    suit: "hearts",
    rank: 10,
    img: "./cards/10-H.png",
  },
  {
    name: "jack",
    suit: "hearts",
    rank: 10,
    img: "./cards/J-H.png",
  },
  {
    name: "queen",
    suit: "hearts",
    rank: 10,
    img: "./cards/Q-H.png",
  },
  {
    name: "king",
    suit: "hearts",
    rank: 10,
    img: "./cards/K-H.png",
  },
  {
    name: "ace",
    suit: "diamonds",
    rank: 11,
    img: "./cards/A-D.png",
  },
  {
    name: "2",
    suit: "diamonds",
    rank: 2,
    img: "./cards/2-D.png",
  },
  {
    name: "3",
    suit: "diamonds",
    rank: 3,
    img: "./cards/3-D.png",
  },
  {
    name: "4",
    suit: "diamonds",
    rank: 4,
    img: "./cards/4-D.png",
  },
  {
    name: "5",
    suit: "diamonds",
    rank: 5,
    img: "./cards/5-D.png",
  },
  {
    name: "6",
    suit: "diamonds",
    rank: 6,
    img: "./cards/6-D.png",
  },
  {
    name: "7",
    suit: "diamonds",
    rank: 7,
    img: "./cards/7-D.png",
  },
  {
    name: "8",
    suit: "diamonds",
    rank: 8,
    img: "./cards/8-D.png",
  },
  {
    name: "9",
    suit: "diamonds",
    rank: 9,
    img: "./cards/9-D.png",
  },
  {
    name: "10",
    suit: "diamonds",
    rank: 10,
    img: "./cards/10-D.png",
  },
  {
    name: "jack",
    suit: "diamonds",
    rank: 10,
    img: "./cards/J-D.png",
  },
  {
    name: "queen",
    suit: "diamonds",
    rank: 10,
    img: "./cards/Q-D.png",
  },
  {
    name: "king",
    suit: "diamonds",
    rank: 10,
    img: "./cards/K-D.png",
  },
  {
    name: "ace",
    suit: "clubs",
    rank: 11,
    img: "./cards/A-D.png",
  },
  {
    name: "2",
    suit: "clubs",
    rank: 2,
    img: "./cards/2-C.png",
  },
  {
    name: "3",
    suit: "clubs",
    rank: 3,
    img: "./cards/3-C.png",
  },
  {
    name: "4",
    suit: "clubs",
    rank: 4,
    img: "./cards/4-C.png",
  },
  {
    name: "5",
    suit: "clubs",
    rank: 5,
    img: "./cards/5-C.png",
  },
  {
    name: "6",
    suit: "clubs",
    rank: 6,
    img: "./cards/6-C.png",
  },
  {
    name: "7",
    suit: "clubs",
    rank: 7,
    img: "./cards/7-C.png",
  },
  {
    name: "8",
    suit: "clubs",
    rank: 8,
    img: "./cards/8-C.png",
  },
  {
    name: "9",
    suit: "clubs",
    rank: 9,
    img: "./cards/9-C.png",
  },
  {
    name: "10",
    suit: "clubs",
    rank: 10,
    img: "./cards/10-C.png",
  },
  {
    name: "jack",
    suit: "clubs",
    rank: 10,
    img: "./cards/J-C.png",
  },
  {
    name: "queen",
    suit: "clubs",
    rank: 10,
    img: "./cards/Q-C.png",
  },
  {
    name: "king",
    suit: "clubs",
    rank: 10,
    img: "./cards/K-C.png",
  },
  {
    name: "ace",
    suit: "spades",
    rank: 11,
    img: "./cards/A-S.png",
  },
  {
    name: "2",
    suit: "spades",
    rank: 2,
    img: "./cards/2-S.png",
  },
  {
    name: "3",
    suit: "spades",
    rank: 3,
    img: "./cards/3-S.png",
  },
  {
    name: "4",
    suit: "spades",
    rank: 4,
    img: "./cards/4-S.png",
  },
  {
    name: "5",
    suit: "spades",
    rank: 5,
    img: "./cards/5-S.png",
  },
  {
    name: "6",
    suit: "spades",
    rank: 6,
    img: "./cards/6-S.png",
  },
  {
    name: "7",
    suit: "spades",
    rank: 7,
    img: "./cards/7-S.png",
  },
  {
    name: "8",
    suit: "spades",
    rank: 8,
    img: "./cards/8-S.png",
  },
  {
    name: "9",
    suit: "spades",
    rank: 9,
    img: "./cards/9-S.png",
  },
  {
    name: "10",
    suit: "spades",
    rank: 10,
    img: "./cards/10-S.png",
  },
  {
    name: "jack",
    suit: "spades",
    rank: 10,
    img: "./cards/J-S.png",
  },
  {
    name: "queen",
    suit: "spades",
    rank: 10,
    img: "./cards/Q-S.png",
  },
  {
    name: "king",
    suit: "spades",
    rank: 10,
    img: "./cards/K-S.png",
  },
];

const originalDeck = [...deck];

// this function will shuffle the deck making it random
let shuffleDeck = function () {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
};
