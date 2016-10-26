/**
 * Module for GamePlay.
 *
 * @author: ProfessorPotatis
 * @version 1.0.0
 */

'use strict';


/**
 * Creates a JavaScript GamePlay instance.
 *
 * @constructor
 *
 */
function GamePlay(dealer, player, dplayer, cardtable) {
    let _dealer, _player, _dplayer, _cardtable;

    Object.defineProperty(this, 'dealer', {

        get: function() {
            return _dealer;
        },

        set: function(theDealer) {
            let zeDealer = theDealer;

            _dealer = zeDealer;
        }
    });

    Object.defineProperty(this, 'player', {

        get: function() {
            return _player;
        },

        set: function(thePlayer) {
            let zePlayer = thePlayer;

            _player = zePlayer;
        }
    });

    Object.defineProperty(this, 'dplayer', {

        get: function() {
            return _dplayer;
        },

        set: function(thePlayer) {
            let zePlayer = thePlayer;

            _dplayer = zePlayer;
        }
    });

    Object.defineProperty(this, 'cardtable', {

        get: function() {
            return _cardtable;
        },

        set: function(theCardTable) {
            let zeCardTable = theCardTable;

            _cardtable = zeCardTable;
        }
    });

    // Initialize the properties through the setters.
    this.dealer = dealer;
    this.player = player;
    this.dplayer = dplayer;
    this.cardtable = cardtable;
}

/**
 * Returns string representing result of game.
 *
 * @returns <String>
 */
GamePlay.prototype.play = function() {
    this.player.saveCard(this.dealer.dealCard());
    let numOfCards = 1;
    while (this.player.sumCards() <= 15 && numOfCards <= 5) {
        this.player.saveCard(this.dealer.dealCard());
        numOfCards += 1;
    }

    if (this.player.sumCards() === 21 || this.player.sumCards() < 21 && numOfCards === 5) {
        this.cardtable.clone(this.player.showHand(), this.player.sumCards());
        console.log(this.cardtable.printResult());
    } else if (this.player.sumCards() > 21) {
        this.cardtable.clone(this.player.showHand(), this.player.sumCards());
        console.log(this.cardtable.printResult());
    } else if (this.player.sumCards() < 21) {
        this.dplayer.saveCard(this.dealer.dealCard());
        while (this.dplayer.sumCards() < this.player.sumCards() && this.dplayer.sumCards() !== this.player.sumCards()) {
            this.dplayer.saveCard(this.dealer.dealCard());
        }
        this.cardtable.clone(this.player.showHand(), this.player.sumCards(), this.dplayer.showHand(), this.dplayer.sumCards());
        console.log(this.cardtable.printResult());
    }
};


/**
*  Exports.
*/
module.exports = GamePlay;
