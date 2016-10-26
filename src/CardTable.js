/**
 * Module for CardTable.
 *
 * @author: ProfessorPotatis
 * @version 1.0.0
 */

'use strict';


/**
 * Creates a JavaScript CardTable instance.
 *
 * @constructor
 * @param {string} pShowHand - Players cards on hand.
 * @param {string} pSumCards - Players sum of cards on hand.
 * @param {string} dShowHand - Dealers cards on hand.
 * @param {string} dSumCards - Dealers sum of cards on hand.
 *
 */
function CardTable(pShowHand = '', pSumCards = '', dShowHand = '', dSumCards = '') {
    let _pShowHand, _pSumCards, _dShowHand, _dSumCards;

    Object.defineProperty(this, 'pShowHand', {

        get: function() {
            return _pShowHand;
        },

        set: function(pHand) {
            let theHand = pHand;

            _pShowHand = theHand;
        }
    });

    Object.defineProperty(this, 'pSumCards', {

        get: function() {
            return _pSumCards;
        },

        set: function(pSum) {
            let theSum = pSum;

            _pSumCards = theSum;
        }
    });

    Object.defineProperty(this, 'dShowHand', {

        get: function() {
            return _dShowHand;
        },

        set: function(dHand) {
            let theHand = dHand;

            _dShowHand = theHand;
        }
    });

    Object.defineProperty(this, 'dSumCards', {

        get: function() {
            return _dSumCards;
        },

        set: function(dSum) {
            let theSum = dSum;

            _dSumCards = theSum;
        }
    });

    // Initialize the properties through the setters.
    this.pShowHand = pShowHand;
    this.pSumCards = pSumCards;
    this.dShowHand = dShowHand;
    this.dSumCards = dSumCards;
}

/**
 * Clones new instance object and sets new parameters.
 *
 * @returns {Object} - Copy.
 */
CardTable.prototype.clone = function(p1, p2, p3, p4) {
    let copy = Object.create(CardTable.prototype);

    this.pShowHand = p1;
    this.pSumCards = p2;
    this.dShowHand = p3;
    this.dSumCards = p4;

    return copy;
};

/**
 * Returns string representing result of game.
 *
 * @returns <String>
 */
CardTable.prototype.printResult = function() {
    let str = '';
    str += 'Player:' + this.pShowHand + ' (' + this.pSumCards + ')';
    if (this.pSumCards > 21) {
        str += ' BUSTED!\n';
        str += 'Dealer: -\n';
        str += 'Dealer wins!';
    } else if (this.pSumCards === 21 || this.pSumCards < 21 && this.pShowHand.length === 15) {
        str += '\nDealer: -\n';
        str += 'Player wins!';
    } else if (this.dSumCards > 21) {
        str += '\nDealer:' + this.dShowHand + ' (' + this.dSumCards + ')';
        str += ' BUSTED!\n';
        str += 'Player wins!';
    } else if (this.dSumCards === 21 || this.dSumCards === this.pSumCards || this.dSumCards > this.pSumCards) {
        str += '\nDealer:' + this.dShowHand + ' (' + this.dSumCards + ')\n';
        str += 'Dealer wins!';
    }

    return str;
};


/**
*  Exports.
*/
module.exports = CardTable;
