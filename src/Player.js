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
 * @param {Array} hand - Players cards on hand.
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
 * Returns array representing instance and sets new parameter of object.
 *
 * @returns {Array}
 */
Player.prototype.showHand = function() {
    let copyOfHand = this.hand.slice();
    let hand = '';

    for (let i = 0; i < copyOfHand.length; i += 1) {
        if (typeof copyOfHand[i] === 'string') {
            hand += ' ' + copyOfHand[i];
        }
    }

    this.hand = copyOfHand;

    return hand;
};

/**
 * Saves the dealt card into array and sets the objects hand to new array.
 *
 */
Player.prototype.saveCard = function(newCard) {
    let copyOfAlreadyDealtCards = this.hand.slice();
    let theCard = newCard;

    copyOfAlreadyDealtCards.push(theCard);
    let mergedArr = [].concat.apply([], copyOfAlreadyDealtCards);
    let mergeAgain = [].concat.apply([], mergedArr);
    this.hand = mergeAgain;
    return;
};

/**
 * Returns string representing sum of players hand.
 *
 * @returns <String>
 */
Player.prototype.sumCards = function() {
    let copyOfHand = this.hand.slice();
    let sum = [];

    for (let i = 0; i < copyOfHand.length; i += 1) {
        if (typeof copyOfHand[i] === 'number') {
            sum.push(copyOfHand[i]);
        }
    }

    let totalSum = sum.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    });

    if (sum.includes(1) && totalSum <= 8) {
        sum.splice(sum.indexOf(1), 1, 14);
        totalSum = sum.reduce(function(previousValue, currentValue) {
            return previousValue + currentValue;
        });
    }

    return totalSum;
};

/**
*  Exports.
*/
module.exports = Player;
