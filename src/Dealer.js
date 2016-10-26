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
function Dealer(shuffled, hand = []) {
    let _shuffled, _hand;

    Object.defineProperty(this, 'shuffled', {

        get: function() {
            return _shuffled.slice();
        },

        set: function(cardsArr) {
            let theCards = cardsArr.slice();

            _shuffled = theCards;
        }
    });

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
    this.shuffled = shuffled;
    this.hand = hand;
}

/**
 * Returns array representing instance.
 *
 * @returns {Array}
 */
Dealer.prototype.dealCard = function() {
    let cardDeck = this.shuffled.slice();
    let dealtCard = cardDeck.splice(0, 1);

    this.shuffled = cardDeck;
    return dealtCard;
};


/**
 * Returns array representing instance.
 *
 * @returns {Array}
 */
Dealer.prototype.showHand = function() {
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
 * Returns array representing instance.
 *
 * @returns {Array}
 */
Dealer.prototype.saveCard = function(newCard) {
    let copyOfAlreadyDealtCards = this.hand.slice();
    let theCard = newCard;

    copyOfAlreadyDealtCards.push(theCard);
    let mergedArr = [].concat.apply([], copyOfAlreadyDealtCards);
    let mergeAgain = [].concat.apply([], mergedArr);
    this.hand = mergeAgain;
    return;
};

/**
 * Returns sum of players hand.
 *
 * @returns <String>
 */
Dealer.prototype.sumCards = function() {
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

Dealer.prototype.tossCards = function() {
    this.hand = [];
};


/**
*  Exports.
*/
module.exports = Dealer;
