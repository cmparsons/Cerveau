// Generated by Creer at 10:54PM on October 16, 2015 UTC, git hash: '98604e3773d1933864742cb78acbf6ea0b4ecd7b'

var Class = require(__basedir + "/utilities/class");
var serializer = require(__basedir + "/gameplay/serializer");
var log = require(__basedir + "/gameplay/log");
var TurnBasedGame = require(__basedir + "/gameplay/shared/turnBasedGame");

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

// any additional requires you want can be required here safely between cree runs
//<<-- /Creer-Merge: requires -->>

// @class Game: Two player grid based game where each player tries to burn down the other player's buildings. Let it burn!
var Game = Class(TurnBasedGame, {
    /**
     * Initializes Games.
     *
     * @param {Object} a simple mapping passsed in to the constructor with whatever you sent with it.
     */
    init: function(data) {
        TurnBasedGame.init.apply(this, arguments);

        /**
         * How many bribes players get at the beginning of their turn, not counting their burned down Buildings.
         *
         * @type {number}
         */
        this._addProperty("baseBribesPerTurn", serializer.defaultInteger(data.baseBribesPerTurn));

        /**
         * All the buildings in the game.
         *
         * @type {list.<Building>}
         */
        this._addProperty("buildings", serializer.defaultArray(data.buildings));

        /**
         * The current Forecast, which will be applied at the end of the turn.
         *
         * @type {Forecast}
         */
        this._addProperty("currentForecast", serializer.defaultGameObject(data.currentForecast));

        /**
         * All the forecasts in the game, indexed by turn number.
         *
         * @type {list.<Forecast>}
         */
        this._addProperty("forecasts", serializer.defaultArray(data.forecasts));

        /**
         * The width of the entire map along the vertical (y) axis.
         *
         * @type {number}
         */
        this._addProperty("mapHeight", serializer.defaultInteger(data.mapHeight));

        /**
         * The width of the entire map along the horizontal (x) axis.
         *
         * @type {number}
         */
        this._addProperty("mapWidth", serializer.defaultInteger(data.mapWidth));

        /**
         * The maximum amount of fire value for any Building.
         *
         * @type {number}
         */
        this._addProperty("maxFire", serializer.defaultInteger(data.maxFire));

        /**
         * The next Forecast, which will be applied at the end of your opponent's turn. This is also the Forecast WeatherStations can control this turn.
         *
         * @type {Forecast}
         */
        this._addProperty("nextForecast", serializer.defaultGameObject(data.nextForecast));


        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

        // put any initialization logic here. the base variables should be set from 'data' above
        // NOTE: no players are connected (nor created) at this point. For that logic use 'begin()'

        //<<-- /Creer-Merge: init -->>
    },

    name: "Anarchy",
    numberOfPlayers: 2,
    maxInvalidsPerPlayer: 10,

    /**
     * This is called when the game begins, once players are connected and ready to play, and game objects have been initialized. Anything in init() may not have the appropriate game objects created yet..
     */
    begin: function() {
        TurnBasedGame.begin.apply(this, arguments);

        //<<-- Creer-Merge: begin -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

        //<<-- /Creer-Merge: begin -->>
    },

    //<<-- Creer-Merge: added-functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

    //This function will deal with the next turn logic and win conditons
    nextTurn: function() {
        for(var i = 0; i < this.players.length; i++) {
            var player = this.players[i];

            if(player.headquarters.health <= 0) {
                game.declareLoser(player, "Your Headquarters burned down!");
                game.declareWinner(this.getOtherPlayers(player)[0], "You burned down the other players Headquarters.");
            }
        }
        return TurnBasedGame.nextTurn.apply(this, arguments);
   },

   _maxTurnsReached: function(){TurnBasedGame._maxTurnsReached.apply(this, arguments);
        TurnBasedGame._maxTurnsReached.apply(this, arguments);

        for(var i = 0; i < this.players.length; i++) {
            var  player = this.players[i];

            if(player.headquarters.health < this.getOtherPlayers(player)[0]) {
                game.declareLoser(player, "Your Headquarters has less health than the opponents.");
                game.declareWinner(this.getOtherPlayers(player)[0], "You did more damage to the other player's Headquarters.");
            }
        }
   },
    // You can add additional functions here. These functions will not be directly callable by client AIs
    nextTurn: function() {
        var directions = {
            north: "buildingNorth",
            east: "buildingEast",
            south: "buildingSouth",
            west: "buildingWest"
        };

        //locations where fire will spread
        var locations = [];

        //handle fire damage
        this.buildings.forEach(function(building){
            if(building.fire > 0){
                building.burn()

                //building fire will spread to
                var location = building[directions[this.currentForecast.direction]];
                locations.push({
                    building: location,
                    fire: building.fire
                });
            }

            if(building.exposure && !building.bribed){
                building.exposure -= 1; //this.exposureCooldown?
            }
        });

        //spread fire
        locations.forEach(function(location){
            var building = location.building;
            var fireSpread = this.currentForecast.intensity;
            if(fireSpread < building.fire){
                fireSpread = building.fire;
            }

            var newFire = building.fire + fireSpread;
            building.fire = Math.min(this.maxFire, newFire);
        })

        return TurnBasedGame.nextTurn.apply(this, arguments);
    }

    //<<-- /Creer-Merge: added-functions -->>

});

module.exports = Game;
