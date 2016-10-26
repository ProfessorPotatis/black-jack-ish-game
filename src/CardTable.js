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
function CardTable(pShowHand, pSumCards, dShowHand, dSumCards) {
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

// TODO: This is where players and dealers hand are presented and compared to figure out the winner.

}

/**
 * Returns array representing instance.
 *
 * @returns {Array}
 */
CardTable.prototype.printResult = function() {
    let str = '';
    str += 'Player #1:' + this.pShowHand + ' (' + this.pSumCards + ')\n';
    str += 'Dealer:' + this.dShowHand + ' (' + this.dSumCards + ')';

    return str;
};


/**
*  Exports.
*/
module.exports = CardTable;
