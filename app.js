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

    // A game of 21 (15 players against the dealer)
    {
    let carddeck = new CardDeck();
    let shuffledCards = carddeck.shuffle();

    let dealer = new Dealer(shuffledCards);

    let cardtable = new CardTable();

    for (let i = 0; i < 15; i += 1) {
        let player = new Player();
        let dplayer = new Player();
        let gameplay = new GamePlay(dealer, player, dplayer, cardtable);

        console.log('Player #' + (i + 1) + ':');
        gameplay.play();
        console.log('---------------------------');
    }
    }
} catch (e) {
    console.error('ERROR: ', e.message);
}
