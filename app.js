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

    let player1 = new Player();

    player1.saveCard(dealer.dealCard());
    let numOfCards = 1;
    while (player1.sumCards() <= 15 && numOfCards <= 5) {
        player1.saveCard(dealer.dealCard());
        numOfCards += 1;
    }

    if (player1.sumCards() === 21 || player1.sumCards() < 21 && numOfCards === 5) {
        let cardtable = new CardTable(player1.showHand(), player1.sumCards());
        console.log(cardtable.printResult());
    } else if (player1.sumCards() > 21) {
        let cardtable1 = new CardTable(player1.showHand(), player1.sumCards());
        console.log(cardtable1.printResult());
    } else if (player1.sumCards() < 21) {
        dealer.saveCard(dealer.dealCard());
        while (dealer.sumCards() < player1.sumCards() && dealer.sumCards() !== player1.sumCards()) {
            dealer.saveCard(dealer.dealCard());
        }
        let cardtable2 = new CardTable(player1.showHand(), player1.sumCards(), dealer.showHand(), dealer.sumCards());
        console.log(cardtable2.printResult());
    }
    }
} catch (e) {
    console.error('ERROR: ', e.message);
}
