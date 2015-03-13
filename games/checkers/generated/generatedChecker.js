// Generated by Creer, git hash Error: git probably not installed
// Note: this file should never be modified, instead if you want to add game logic modify just the ../Checker.js file. This is to ease merging main.data changes
var Class = require("../../../structures/class");
var GameObject = require("../gameObject")


// @class GeneratedChecker: The generated version of the Checker, that handles basic logic.
module.exports = Class(GameObject, {
	init: function(data) {
		GameObject.init.apply(this, arguments);

		this.gameObjectName = "Checker";

		this.owner = (data.owner === undefined ? null : data.owner);
		this.x = (data.x === undefined ? 0 : data.x);
		this.y = (data.y === undefined ? 0 : data.y);
	},


	command_move: function(player, data) {
		return this.move(player, data.x, data.y);
	},
});