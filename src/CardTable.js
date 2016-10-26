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
            return _pShowHand.slice();
        },

        set: function(pHand) {
            let theHand = pHand.slice();

            _pShowHand = theHand;
        }
    });

    Object.defineProperty(this, 'pSumCards', {

        get: function() {
            return _pSumCards.slice();
        },

        set: function(pSum) {
            let theSum = pSum.slice();

            _pSumCards = theSum;
        }
    });

    Object.defineProperty(this, 'dShowHand', {

        get: function() {
            return _dShowHand.slice();
        },

        set: function(dHand) {
            let theHand = dHand.slice();

            _dShowHand = theHand;
        }
    });

    Object.defineProperty(this, 'dSumCards', {

        get: function() {
            return _dSumCards.slice();
        },

        set: function(dSum) {
            let theSum = dSum.slice();

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
*  Exports.
*/
module.exports = CardTable;
