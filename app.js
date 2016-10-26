/**
 * Starting point of the application.
 *
 * @author ProfessorPotatis
 * @version 1.0.0
 */

'use strict';

try {
    const CardDeck = require('./src/CardDeck.js');
    const Dealer = require('./src/Dealer.js');
    const Player = require('./src/Player.js');
    const GamePlay = require('./src/GamePlay.js');
    const CardTable = require('./src/CardTable.js');

    // A game of 21 (1 player against the dealer)
    {
    let carddeck = new CardDeck();
    let shuffledCards = carddeck.shuffle();

    let dealer = new Dealer(shuffledCards);

    let player1 = new Player();
    let player2 = new Player();
    let player3 = new Player();
    let cardtableTest = new CardTable();

    let gameplay = new GamePlay(dealer, player1, cardtableTest);
    let gameplay2 = new GamePlay(dealer, player2, cardtableTest);
    let gameplay3 = new GamePlay(dealer, player3, cardtableTest);

    console.log('First player:');
    gameplay.play();
    dealer.tossCards();
    console.log('---------------------------');
    console.log('Second player:');
    gameplay2.play();
    dealer.tossCards();
    console.log('---------------------------');
    console.log('Third player:');
    gameplay3.play();
    }
} catch (e) {
    console.error('ERROR: ', e.message);
}
