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
            return _shuffled;
        },

        set: function(cardsArr) {
            let theCards = cardsArr.slice();

            _shuffled = theCards;
        }
    });

    // Initialize the properties through the setters.
    this.shuffled = shuffled;

// TODO: Array of cards, shuffle cards, draw cards, sum cards...

}

/**
 * Returns array representing instance.
 *
 * @returns {Array}
 */
Dealer.prototype.printCardDeck = function() {
    return this.shuffled;
};

//console.log(Dealer());


/**
*  Exports.
*/
module.exports = Dealer;
