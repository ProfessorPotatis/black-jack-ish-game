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
    let hand = '';
    let mergedArr = [].concat.apply([], copyOfHand);

    for (let i = 0; i < mergedArr.length; i += 1) {
        let current = mergedArr[i];
        for (let x = 0; x < current.length; x += 1) {
            if (typeof current[x] === 'string') {
                hand += ' ' + current[x];
            }
        }
    }

    this.hand = mergedArr;

    return hand;
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
    let sum = [];

    for (let i = 0; i < copyOfHand.length; i += 1) {
        let current = copyOfHand[i];
        for (let x = 0; x < current.length; x += 1) {
            if (typeof current[x] === 'number') {
                sum.push(current[x]);
            }
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
