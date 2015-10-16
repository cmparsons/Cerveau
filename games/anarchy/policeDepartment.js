// Generated by Creer at 10:54PM on October 16, 2015 UTC, git hash: '98604e3773d1933864742cb78acbf6ea0b4ecd7b'

var Class = require(__basedir + "/utilities/class");
var serializer = require(__basedir + "/gameplay/serializer");
var log = require(__basedir + "/gameplay/log");
var Building = require("./building");

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

// any additional requires you want can be required here safely between cree runs
//<<-- /Creer-Merge: requires -->>

// @class PoliceDepartment: Used to keep cities under control and raid Warehouses.
var PoliceDepartment = Class(Building, {
    /**
     * Initializes PoliceDepartments.
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

    gameObjectName: "PoliceDepartment",


    /**
     * Bribe the police to raid a Warehouse, dealing damage equal based on the Warehouse's current exposure, and then resetting it to 0.
     *
     * @param {Player} player - the player that called this.
     * @param {Warehouse} warehouse - The warehouse you want to raid.
     * @param {function} asyncReturn - if you nest orders in this function you must return that value via this function in the order's callback.
     * @returns {number} The amount of damage dealt to the warehouse, or -1 if there was an error.
     */
    raid: function(player, warehouse, asyncReturn) {
        // <<-- Creer-Merge: raid -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

        // Developer: Put your game logic for the PoliceDepartment's raid function here
        return 0;

        // <<-- /Creer-Merge: raid -->>
    },

    //<<-- Creer-Merge: added-functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

    // You can add additional functions here. These functions will not be directly callable by client AIs

    //<<-- /Creer-Merge: added-functions -->>

});

module.exports = PoliceDepartment;
