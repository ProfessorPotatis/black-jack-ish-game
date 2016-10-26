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
 * Returns string representing result of game.
 *
 * @returns <String>
 */
CardTable.prototype.printResult = function() {
    let str = '';
    str += 'Player #1:' + this.pShowHand + ' (' + this.pSumCards + ')';
    if (this.pSumCards > 21) {
        str += ' BUSTED!\n';
        str += 'Dealer: -\n';
        str += 'Dealer wins!';
    } else if (this.pSumCards === 21 || this.pSumCards < 21 && this.pShowHand.length === 15) {
        str += ' WINNER!\n';
        str += 'Dealer: -\n';
        str += 'Player #1 wins!';
    } else if (this.dSumCards > 21) {
        str += '\nDealer:' + this.dShowHand + ' (' + this.dSumCards + ')';
        str += ' BUSTED!\n';
        str += 'Player #1 wins!';
    } else if (this.dSumCards === 21 || this.dSumCards === this.pSumCards || this.dSumCards > this.pSumCards) {
        str += '\nDealer:' + this.dShowHand + ' (' + this.dSumCards + ')';
        str += ' WINNER!\n';
        str += 'Dealer wins!';
    }

    return str;
};


/**
*  Exports.
*/
module.exports = CardTable;
