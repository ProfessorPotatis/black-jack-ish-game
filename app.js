/**
 * Starting point of the application.
 *
 * @author ProfessorPotatis
 * @version 1.0.0
 */

'use strict';

try {
    const Dealer = require('./src/Dealer.js');
    const Player = require('./src/Player.js');
    const CardTable = require('./src/CardTable.js');
    const CardDeck = require('./src/CardDeck.js');

    // A game of 21
    {
    let carddeck = new CardDeck();
    let shuffledCards = carddeck.shuffle();

    let dealer = new Dealer(shuffledCards);

    let dealtCard = dealer.dealCard();
    console.log('First element in shuffledCards: ' + shuffledCards[0]);
    console.log('The dealtCard: ' + dealtCard);

    let player1 = new Player();
    player1.saveCard(dealer.dealCard());
    player1.saveCard(dealer.dealCard());
    player1.saveCard(dealer.dealCard());
    console.log('Player #1:' + player1.showHand() + ' (' + player1.sumCards() + ')');

    dealer.saveCard(dealer.dealCard());
    dealer.saveCard(dealer.dealCard());
    dealer.saveCard(dealer.dealCard());
    console.log('Dealer:' + dealer.showHand() + ' (' + dealer.sumCards() + ')');
    }
} catch (e) {
    console.error('ERROR: ', e.message);
}
