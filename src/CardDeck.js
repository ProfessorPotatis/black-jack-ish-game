/**
 * Module for CardDeck.
 *
 * @author: ProfessorPotatis
 * @version 1.0.0
 */

'use strict';


/**
 * Creates a JavaScript CardDeck instance.
 *
 * @constructor
 *
 */
function CardDeck(cards = []) {
    let _cards;

    Object.defineProperty(this, 'cards', {

        get: function() {
            return _cards;
        },

        set: function(cardsArr) {
            let theCards = cardsArr.slice();

            let names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
            let suits = ['♥', '♦', '♠', '♣'];

            for (let i = 0; i < suits.length; i += 1) {
                for (let x = 0; x < names.length; x += 1) {
                    theCards.push([x + 1, names[x] + suits[i]]);
                }
            }
            _cards = theCards;
        }
    });

    // Initialize the properties through the setters.
    this.cards = cards;

// TODO: Array of cards, shuffle cards, draw cards, sum cards...
}


/**
 * Returns array representing instance.
 *
 * @returns {Array}
 */
CardDeck.prototype.printCardDeck = function() {
    return this.cards;
};


/**
*  Exports.
*/
module.exports = CardDeck;
