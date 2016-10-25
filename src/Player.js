/**
 * Module for Player.
 *
 * @author: ProfessorPotatis
 * @version 1.0.0
 */

'use strict';


/**
 * Creates a JavaScript Player instance.
 *
 * @constructor
 *
 */
function Player(hand = []) {
    let _hand;

    Object.defineProperty(this, 'hand', {

        get: function() {
            return _hand.slice();
        },

        set: function(cardsHand) {
            let theCards = cardsHand.slice();

            _hand = theCards;
        }
    });

    // Initialize the properties through the setters.
    this.hand = hand;
}

/**
 * Returns array representing instance.
 *
 * @returns {Array}
 */
Player.prototype.showHand = function() {
    return this.hand;
};

/**
 * Returns array representing instance.
 *
 * @returns {Array}
 */
Player.prototype.saveCard = function(newCard) {
    let copyOfAlreadyDealtCards = this.hand.slice();
    let theCard = newCard;

    copyOfAlreadyDealtCards.push(theCard);
    this.hand = copyOfAlreadyDealtCards;
    return;
};


/**
*  Exports.
*/
module.exports = Player;
