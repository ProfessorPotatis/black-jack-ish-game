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
    let copyOfHand = this.hand.slice();

    this.hand = [].concat.apply([], copyOfHand);
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
 * Returns sum of players hand.
 *
 * @returns <String>
 */
Player.prototype.sumCards = function() {
    let copyOfHand = this.hand.slice();
    let sum = 0;

    for (let i = 0; i < copyOfHand.length; i += 1) {
        let current = copyOfHand[i];
        for (let x = 0; x < current.length; x += 1) {
            if (typeof current[x] === 'number') {
                sum += current[x];
            }
        }
    }
    return sum;
};


/**
*  Exports.
*/
module.exports = Player;
