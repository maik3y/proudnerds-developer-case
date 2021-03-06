# Proudnerds developer case - Maikey Sip

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Assignment developers

Develop a web application in which 4 players play a simple version of the game “Mau Mau”.
The application should work in the following way:

- The game starts with 4 players;
- Shuffle 52 playing cards (no jokers) randomly;
- Deal each player 7 playing cards, the remainder of the cards is the drawing pile;
- Take a card from the drawing pile and place it on the discard pile. This is the starting card.
- The players place a card on the discard pile in turn. This card must be the same suit (♥ ♣ ♦ ♠)
  or number (2 to king) as the one on the top of the discard pile.
- If a player does not have the appropriate card to discard, he/she takes a card from the drawing
  pile.
- When a player has only 2 cards, it’s their turn to play and he/she can discard his/her secondlast card. This player must warn the other players.
- When a player has no more cards, the game is over and the winner is announced

## Outcome

I'd like to think I've met all the requirements above, and maybe even some more (responsiveness, form validation etc.). I tried to make the application as scalable as possible. For instance, it should be very trivial to add more rules to the game by making use of the RulesController.

## Getting started

1. Install the project dependancies with yarn:

```
yarn
```

2. Start the application:

```
yarn start
```

### Preview of some of the packages and tools used to create this project:

- Typescript
- Mobx (state manangement)
- Formik & Yup (form builder and complimentary validation package, respectively)
- SASS
- MATERIAL-UI
- Styled Components
- React Spring
