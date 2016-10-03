// Game: Use cowboys to have a good time and play some music on a Piano, while brawling with enemy Coyboys.

var Class = require("classe");
var log = require(__basedir + "/gameplay/log");
var TwoPlayerGame = require(__basedir + "/gameplay/shared/twoPlayerGame");
var TurnBasedGame = require(__basedir + "/gameplay/shared/turnBasedGame");
var TiledGame = require(__basedir + "/gameplay/shared/tiledGame");

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

// any additional requires you want can be required here safely between Creer re-runs

//<<-- /Creer-Merge: requires -->>

// @class Game: Use cowboys to have a good time and play some music on a Piano, while brawling with enemy Coyboys.
var Game = Class(TwoPlayerGame, TurnBasedGame, TiledGame, {
    /**
     * Initializes Games.
     *
     * @param {Object} data - a simple mapping passsed in to the constructor with whatever you sent with it. GameSettings are in here by key/value as well.
     */
    init: function(data) {
        TiledGame.init.apply(this, arguments);
        TurnBasedGame.init.apply(this, arguments);
        TwoPlayerGame.init.apply(this, arguments);

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

        this._minFurnishings = 0;
        this._maxFurnishings = 20;
        this._minPianos = 2;
        this._maxPianos = 10;

        this.mapWidth = 40;
        this.mapHeight = 20;

        this.rowdynessToSiesta = 20;
        this.maxCowboys = 6;

        this.jobs.push(
            "Young Gun",
            "Sharpshooter",
            "Bartender",
            "Brawler"
        );

        //<<-- /Creer-Merge: init -->>
    },

    name: "Saloon",

    aliases: [
        //<<-- Creer-Merge: aliases -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        "MegaMinerAI-18-Saloon",
        //<<-- /Creer-Merge: aliases -->>
    ],



    /**
     * This is called when the game begins, once players are connected and ready to play, and game objects have been initialized. Anything in init() may not have the appropriate game objects created yet..
     */
    begin: function() {
        TiledGame.begin.apply(this, arguments);
        TurnBasedGame.begin.apply(this, arguments);
        TwoPlayerGame.begin.apply(this, arguments);

        //<<-- Creer-Merge: begin -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

        TiledGame._initMap.call(this);

        // make top and bottom sides walls
        for(var x = 0; x < this.mapWidth; x++) {
            this.getTile(x, 0).isWall = true;
            this.getTile(x, this.mapHeight - 1).isWall = true;
        }

        // make left and right sides walls
        for(var y = 0; y < this.mapHeight; y++) {
            this.getTile(0, y).isWall = true;
            this.getTile(this.mapWidth - 1, y).isWall = true;
        }

        // spawn some random furnishings
        var numFurnishings = Math.randomInt(this._maxFurnishings, this._minFurnishings);
        var numPianos = Math.randomInt(this._maxPianos, this._minPianos);
        for(var i = 0; i < numPianos+numPianos; i++) {
            var x, y;
            while(true) {
                x = Math.randomInt(this.mapWidth/2 - 1, 1);
                y = Math.randomInt(this.mapHeight - 2, 1);

                if(!this.getTile(x, y).furnishing) {
                    break; // because we found a tile that does not have a furnishing to spawn one on, else we continue our random search
                }
            }

            for(var side = 0; side < 2; side++) {
                if(side === 1) {
                    x = this.mapWidth - x - 1;
                }

                this.create("Furnishing", {
                    tile: this.getTile(x, y),
                    isPiano: i <= numPianos,
                });
            }
        }

        // create the players' Young Guns
        this.players[0].youngGunPrevTile = this.getTile(0, 1);
        this.players[0].youngGunTile = this.getTile(0, 0);
        this.players[1].youngGunTile = this.getTile(this.mapWidth-1, this.mapHeight-1);
        this.players[1].youngGunTile = this.getTile(this.mapWidth-1, this.mapHeight-2);
        this._doYoungGun();

        //<<-- /Creer-Merge: begin -->>
    },

    /**
     * This is called when the game has started, after all the begin()s. This is a good spot to send orders.
     */
    _started: function() {
        TiledGame._started.apply(this, arguments);
        TurnBasedGame._started.apply(this, arguments);
        TwoPlayerGame._started.apply(this, arguments);

        //<<-- Creer-Merge: _started -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any logic for _started can be put here
        //<<-- /Creer-Merge: _started -->>
    },


    //<<-- Creer-Merge: added-functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

    /**
     * @override
     */
    nextTurn: function() {
        // before we go to the next turn, reset variables and do end of turn logic

        this._updateCowboys();

        this._advanceBottles();

        this._damagePianos();

        this._cleanupArray("cowboys");
        this._cleanupArray("furnishings");
        this._cleanupArray("bottles");

        this._doYoungGun();

        if(this._checkForWinner()) {
            return;
        }
        // else continue to the next player (normal next turn logic)
        return TurnBasedGame.nextTurn.apply(this, arguments);
    },

    _updateCowboys: function() {
        for(var i = 0; i < this.currentPlayer.cowboys.length; i++) {
            var cowboy = this.currentPlayer.cowboys[i];

            if(cowboy.isDead) {
                continue;
            }

            if(cowboy.isDrunk) { // move him!
                var next = cowboy.tile.getNeighbor(cowboy.drunkDirection);
                cowboy.tile.cowboy = null;
                cowboy.tile = next;

                cowboy.isDrunk = (cowboy.turnsBusy === 0);
                cowboy.hasMoved = !cowboy.isDrunk;
            }
            else {
                if(cowboy.job === "Sharpshooter" && !cowboy.hasMoved) {
                    cowboy.focus++;
                }

                cowboy.hasMoved = false;
            }

            cowboy.turnsBusy = Math.max(0, cowboy.turnsBusy - 1);

            if(cowboy.job === "Brawler") { // damage surroundings
                var neighbors = cowboy.tile.getNeighbors();
                for(var j = 0; j < neighbors.length; j++) {
                    var neighbor = neighbors[j];
                    if(neighbor.cowboy) {
                        neighbor.cowboy.damage(1);
                    }
                    if(neighbor.furnishing) {
                        neighbor.furnishing.damage(1);
                    }
                }
            }
        }
    },

    _advanceBottles: function() {
        for(var i = 0; i < this.bottles.length; i++) {
            var bottle = this.bottles[i];
            if(bottle.isDestroyed) {
                continue;
            }

            bottle.advance();
        }
    },

    _damagePianos: function() {
        for(var i = 0; i < this.furnishings.length; i++) {
            var furnishing = this.furnishings[i];

            if(furnishing.isDestroyed || !furnishing.isPiano) {
                continue;
            }

            furnishing.damage(1);
        }
    },

    _cleanupArray: function(arrayKey) {
        var list = this[arrayKey];
        var clone = list.clone();
        for(var i = 0; i < clone.length; i++) {
            var item = clone[i];
            if(item.isDestroyed || item.isDead) {
                list.removeElement(item);

                if(item.owner) {
                    item.owner[arrayKey].removeElement(item);
                }
            }
        }
    },

    _doYoungGun: function() {
        for(var i = 0; i < this.players.length; i++) {
            var player = this.players[i];

            player.youngGun = player.youngGun || this.create("Cowboy", {
                owner: player,
                job: "Young Gun",
                tile: player.youngGunTile,
            });

            var tiles = player.youngGun.tile.getNeighbors();
            for(var t = 0; t < tiles.length; t++) {
                var tile = tiles[t];

                if(tile.isWall && player.youngGunPrevTile !== tile) { // this is the tile the young gun needs to talk to
                    player.youngGunPrevTile = player.youngGun.tile;
                    player.youngGun.tile = tile;
                    break;
                }
            }
        }
    },

    _checkForWinner: function() {
        var pianos = 0;
        for(var i = 0; i < this.furnishings.length; i++) {
            if(this.furnishings[i].isPiano) {
                pianos++;
            }
        }

        if(pianos === 0) { // game over
            this._makeSomeoneWin("all pianos destroyed.");
        }
    },

    _makeSomeoneWin: function(reason) {
        var players = this.players.clone();
        if(players[0].score !== players[1].score) { // someone won with a higher score
            players.sortDescending("score");

            this.declareWinner(players.shift(), "Has highest score after " + reason);
            this.declareLosers(players, "Lower score than winner");
            return true;
        }

        if(players[0].kills > players[1].kills) {
            players.sortDescending("kills");

            this.declareWinner(players.shift(), "Has most kills after " + reason);
            this.declareLosers(players, "Less kills than winner");
            return true;
        }

        return this._endGameViaCoinFlip();
    },

    /**
     * @override
     */
    _maxTurnsReached: function() {
        var returned = TurnBasedGame._maxTurnsReached.apply(this, arguments);

        this._makeSomeoneWin("max turns reached ({})".format(this.maxTurns));

        return returned;
    },

    //<<-- /Creer-Merge: added-functions -->>

});

module.exports = Game;