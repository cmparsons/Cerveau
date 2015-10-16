// Generated by Creer at 10:54PM on October 16, 2015 UTC, git hash: '98604e3773d1933864742cb78acbf6ea0b4ecd7b'

var Class = require(__basedir + "/utilities/class");
var serializer = require(__basedir + "/gameplay/serializer");
var log = require(__basedir + "/gameplay/log");
var Building = require("./building");

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

// any additional requires you want can be required here safely between cree runs
//<<-- /Creer-Merge: requires -->>

// @class WeatherStation: Can be bribed to change the next Forecast in some way.
var WeatherStation = Class(Building, {
    /**
     * Initializes WeatherStations.
     *
     * @param {Object} a simple mapping passsed in to the constructor with whatever you sent with it.
     */
    init: function(data) {
        Building.init.apply(this, arguments);


        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

        // put any initialization logic here. the base variables should be set from 'data' above
        // NOTE: no players are connected (nor created) at this point. For that logic use 'begin()'

        //<<-- /Creer-Merge: init -->>
    },

    gameObjectName: "WeatherStation",


    /**
     * Bribe the weathermen to intensity the next Forecast by 1 or -1
     *
     * @param {Player} player - the player that called this.
     * @param {boolean} negative - By default the intensity will be increased by 1, setting this to true decreases the intensity by 1.
     * @param {function} asyncReturn - if you nest orders in this function you must return that value via this function in the order's callback.
     * @returns {boolean} true if the intensity was changed, false otherwise
     */
    intensify: function(player, negative, asyncReturn) {
        // <<-- Creer-Merge: intensify -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

        // Developer: Put your game logic for the WeatherStation's intensify function here
        return false;

        // <<-- /Creer-Merge: intensify -->>
    },

    /**
     * Bribe the weathermen to change the direction of the next Forecast by rotating it clockwise or counterclockwise.
     *
     * @param {Player} player - the player that called this.
     * @param {boolean} counterclockwise - By default the direction will be rotated clockwise. If you set this to true we will rotate the forecast counterclockwise instead.
     * @param {function} asyncReturn - if you nest orders in this function you must return that value via this function in the order's callback.
     * @returns {boolean} true if the rotation worked, false otherwise.
     */
    rotate: function(player, counterclockwise, asyncReturn) {
        // <<-- Creer-Merge: rotate -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

        // Developer: Put your game logic for the WeatherStation's rotate function here
        return false;

        // <<-- /Creer-Merge: rotate -->>
    },

    //<<-- Creer-Merge: added-functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

    // You can add additional functions here. These functions will not be directly callable by client AIs

    //<<-- /Creer-Merge: added-functions -->>

});

module.exports = WeatherStation;
