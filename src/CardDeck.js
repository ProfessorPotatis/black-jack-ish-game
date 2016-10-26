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
            return _cards.slice();
        },

        set: function(cardsArr) {
            let theCards = cardsArr.slice();

            if (Object.prototype.toString.call(theCards) !== '[object Array]') {
                throw new TypeError('cards must be an array.');
            } else {
                let names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
                let suits = ['♥', '♦', '♠', '♣'];

                for (let i = 0; i < suits.length; i += 1) {
                    for (let x = 0; x < names.length; x += 1) {
                        theCards.push([x + 1, names[x] + suits[i]]);
                    }
                }
                _cards = theCards;
            }
        }
    });

    // Initialize the properties through the setters.
    this.cards = cards;
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
 * Returns shuffled array representing instance.
 *
 * @returns {Array}
 */
CardDeck.prototype.shuffle = function() {
    let shuffled = this.cards.slice(), i = 0, j = 0, temp = null;

    // Durstenfeld shuffle from http://stackoverflow.com/a/12646864
    for (i = shuffled.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
};


/**
*  Exports.
*/
module.exports = CardDeck;
