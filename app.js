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


    {
    let carddeck = new CardDeck();
    let shuffledCards = carddeck.shuffle();

    let dealer = new Dealer(shuffledCards);
    console.log(dealer.printCardDeck());
    }
} catch (e) {
    console.error('ERROR: ', e.message);
}
