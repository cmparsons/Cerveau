// Generated by Creer, git hash 85ea1f696c6b9066cad480281f599d9c78f16d32
// Note: this file should never be modified, instead if you want to add game logic modify just the ../GameObject.js file. This is to ease merging main.data changes
var Class = require("../../../utilities/class");
var BaseGameObject = require("../../baseGameObject")


// @class GeneratedGameObject: The generated version of the GameObject, that handles basic logic.
var GeneratedGameObject = Class(BaseGameObject, {
	init: function(data) {
		BaseGameObject.init.apply(this, arguments);

		this.gameObjectName = "GameObject";


	},

	command_log: function(player, data) {
		return this.log(player, data.message);
	},
});

module.exports = GeneratedGameObject;
