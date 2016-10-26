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
function Dealer(shuffled) {
    let _shuffled;

    Object.defineProperty(this, 'shuffled', {

        get: function() {
            return _shuffled.slice();
        },

        set: function(cardsArr) {
            let theCards = cardsArr.slice();

            _shuffled = theCards;
        }
    });

    // Initialize the properties through the setters.
    this.shuffled = shuffled;
}

Dealer.prototype.cards = function() {
    return this.shuffled;
};

/**
 * Returns array representing instance.
 *
 * @returns {Array}
 */
Dealer.prototype.dealCard = function() {
    if (this.shuffled.length === 1) {
        let newCardDeck = new CardDeck();
        this.shuffled = newCardDeck.shuffle();
    }

    let cardDeck = this.shuffled.slice();
    let dealtCard = cardDeck.splice(0, 1);

    this.shuffled = cardDeck;
    return dealtCard;
};

/**
*  Imports.
*/
const CardDeck = require('./CardDeck.js');

/**
*  Exports.
*/
module.exports = Dealer;
