/**
 * Module for Dealer.
 *
 * @author: ProfessorPotatis
 * @version 1.0.0
 */

'use strict';


/**
 * Creates a JavaScript Dealer instance.
 *
 * @constructor
 *
 */
function Dealer() {
    const CardDeck = require('./CardDeck.js');
    let carddeck = new CardDeck();

    return carddeck.shuffle();

// TODO: Array of cards, shuffle cards, draw cards, sum cards...

}

console.log(Dealer());


/**
*  Exports.
*/
module.exports = Dealer;
