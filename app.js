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
    let player4 = new Player();
    let player5 = new Player();
    let player6 = new Player();
    let player7 = new Player();
    let player8 = new Player();
    let player9 = new Player();
    let player10 = new Player();
    let player11 = new Player();
    let player12 = new Player();
    let player13 = new Player();
    let cardtableTest = new CardTable();

    let gameplay = new GamePlay(dealer, player1, cardtableTest);
    let gameplay2 = new GamePlay(dealer, player2, cardtableTest);
    let gameplay3 = new GamePlay(dealer, player3, cardtableTest);
    let gameplay4 = new GamePlay(dealer, player4, cardtableTest);
    let gameplay5 = new GamePlay(dealer, player5, cardtableTest);
    let gameplay6 = new GamePlay(dealer, player6, cardtableTest);
    let gameplay7 = new GamePlay(dealer, player7, cardtableTest);
    let gameplay8 = new GamePlay(dealer, player8, cardtableTest);
    let gameplay9 = new GamePlay(dealer, player9, cardtableTest);
    let gameplay10 = new GamePlay(dealer, player10, cardtableTest);
    let gameplay11 = new GamePlay(dealer, player11, cardtableTest);
    let gameplay12 = new GamePlay(dealer, player12, cardtableTest);
    let gameplay13 = new GamePlay(dealer, player13, cardtableTest);


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
    dealer.tossCards();
    console.log('---------------------------');
    console.log('Fourth player:');
    gameplay4.play();
    dealer.tossCards();
    console.log('---------------------------');
    console.log('Fifth player:');
    gameplay5.play();
    dealer.tossCards();
    console.log('---------------------------');
    console.log('Sixth player:');
    gameplay6.play();
    dealer.tossCards();
    console.log('---------------------------');
    console.log('Seventh player:');
    gameplay7.play();
    dealer.tossCards();
    console.log('---------------------------');
    console.log('Eight player:');
    gameplay8.play();
    dealer.tossCards();
    console.log('---------------------------');
    console.log('Nineth player:');
    gameplay9.play();
    dealer.tossCards();
    console.log('---------------------------');
    console.log('Tenth player:');
    gameplay10.play();
    dealer.tossCards();
    console.log('---------------------------');
    console.log('Eleventh player:');
    gameplay11.play();
    dealer.tossCards();
    console.log('---------------------------');
    console.log('Twelfth player:');
    gameplay12.play();
    dealer.tossCards();
    console.log('---------------------------');
    console.log('Thirteenth player:');
    gameplay13.play();
    }
} catch (e) {
    console.error('ERROR: ', e.message);
}
