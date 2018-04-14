// Player: A player in this game. Every AI controls one player.

const Class = require("classe");
const log = require(`${__basedir}/gameplay/log`);
const GameObject = require("./gameObject");

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

// any additional requires you want can be required here safely between Creer re-runs

//<<-- /Creer-Merge: requires -->>

// @class Player: A player in this game. Every AI controls one player.
let Player = Class(GameObject, {
    /**
     * Initializes Players.
     *
     * @param {Object} data - a simple mapping passed in to the constructor with whatever you sent with it. GameSettings are in here by key/value as well.
     */
    init: function(data) {
        GameObject.init.apply(this, arguments);

        /**
         * What type of client this is, e.g. 'Python', 'JavaScript', or some other language. For potential data mining purposes.
         *
         * @type {string}
         */
        this.clientType = this.clientType || "";

        /**
         * The amount of gold this Player has in reserve.
         *
         * @type {number}
         */
        this.gold = this.gold || 0;

        /**
         * The amount of infamy this Player has.
         *
         * @type {number}
         */
        this.infamy = this.infamy || 0;

        /**
         * If the player lost the game or not.
         *
         * @type {boolean}
         */
        this.lost = this.lost || false;

        /**
         * The name of the player.
         *
         * @type {string}
         */
        this.name = this.name || "";

        /**
         * This player's opponent in the game.
         *
         * @type {Player}
         */
        this.opponent = this.opponent || null;

        /**
         * The Port owned by this Player.
         *
         * @type {Port}
         */
        this.port = this.port || null;

        /**
         * The reason why the player lost the game.
         *
         * @type {string}
         */
        this.reasonLost = this.reasonLost || "";

        /**
         * The reason why the player won the game.
         *
         * @type {string}
         */
        this.reasonWon = this.reasonWon || "";

        /**
         * The amount of time (in ns) remaining for this AI to send commands.
         *
         * @type {number}
         */
        this.timeRemaining = this.timeRemaining || 0;

        /**
         * Every Unit owned by this Player.
         *
         * @type {Array.<Unit>}
         */
        this.units = this.units || [];

        /**
         * If the player won the game or not.
         *
         * @type {boolean}
         */
        this.won = this.won || false;


        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

        // put any initialization logic here. the base variables should be set from 'data' above

        //<<-- /Creer-Merge: init -->>
    },

    gameObjectName: "Player",


    //<<-- Creer-Merge: added-functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

    netWorth: function() {
        let worth = this.gold;
        for(let unit of this.units) {
            // Ignore dead units
            if(!unit.tile) {
                continue;
            }

            // Calculate net worth of unit
            if(unit.shipHealth > 0) {
                worth += this.game.shipCost;
            }

            worth += unit.crew * this.game.crewCost + unit.gold;
        }
        return worth;
    },

    //<<-- /Creer-Merge: added-functions -->>

});

module.exports = Player;