// WARNING: Here be Dragons
// This file is generated by Creer, do not modify it
// It basically sets up all the classes, interfaces, types, and what-not that
// we need for TypeScript to know the base classes, while allowing for minimal
// code for developers to be forced to fill out.

// tslint:disable:max-classes-per-file
// ^ because we need to build a bunch of base class wrappers here

// base game classes
import { BaseAI, BaseGame, BaseGameManager, BaseGameObject,
         BaseGameObjectFactory, BaseGameSettingsManager, IBasePlayer,
         makeNamespace } from "~/core/game";

// mixins
import { ITiledPlayer, ITurnBasedPlayer, ITwoPlayerPlayer, mixTiled,
         mixTurnBased, mixTwoPlayer } from "~/core/game/mixins";

// extract game object constructor args
import { FirstArgumentFromConstructor } from "~/utils";

/**
 * The interface the Player for the Newtonian game
 * must implement from mixed in game logic.
 */
export interface IBaseNewtonianPlayer extends
    IBasePlayer,
    ITwoPlayerPlayer,
    ITurnBasedPlayer,
    ITiledPlayer {
}

const base0 = {
    AI: BaseAI,
    Game: BaseGame,
    GameManager: BaseGameManager,
    GameObject: BaseGameObject,
    GameSettings: BaseGameSettingsManager,
};

const base1 = mixTwoPlayer(base0);
const base2 = mixTurnBased(base1);
const base3 = mixTiled(base2);

const mixed = base3;

/** The base AI class for the Newtonian game will mixin logic. */
class BaseNewtonianAI extends mixed.AI {}

/** The base Game class for the Newtonian game will mixin logic. */
class BaseNewtonianGame extends mixed.Game {}

/** The base GameManager class for the Newtonian game will mixin logic. */
class BaseNewtonianGameManager extends mixed.GameManager {}

/** The base GameObject class for the Newtonian game will mixin logic. */
class BaseNewtonianGameObject extends mixed.GameObject {}

/** The base GameSettings class for the Newtonian game will mixin logic. */
class BaseNewtonianGameSettings extends mixed.GameSettings {}

/** The Base classes that game classes build off of. */
export const BaseClasses = {
    AI: BaseNewtonianAI,
    Game: BaseNewtonianGame,
    GameManager: BaseNewtonianGameManager,
    GameObject: BaseNewtonianGameObject,
    GameSettings: BaseNewtonianGameSettings,
};

// Now all the base classes are created;
// so we can start importing/exporting the classes that need them.

/** All the possible properties for an GameObject. */
export interface IGameObjectProperties {
}

/** All the possible properties for an Job. */
export interface IJobProperties {
    /**
     * How many combined resources a beaver with this Job can hold at once.
     */
    carryLimit?: number;

    /**
     * The amount of damage this Job does per attack.
     */
    damage?: number;

    /**
     * The amount of starting health this Job has.
     */
    health?: number;

    /**
     * The number of moves this Job can make per turn.
     */
    moves?: number;

    /**
     * The Job title.
     */
    title?: string;

}

/** All the possible properties for an Machine. */
export interface IMachineProperties {
    /**
     * What type of ore the machine takes it, also determins the type of
     * material it outputs.
     */
    oreType?: "redium" | "blueium";

    /**
     * The amount of ore that needs to be inputted into the machine.
     */
    refineInput?: number;

    /**
     * The amount of material that out of the machine after running.
     */
    refineOutput?: number;

    /**
     * The amount of turns this machine takes to refine the ore.
     */
    refineTime?: number;

    /**
     * The Tile this Machine is on.
     */
    tile?: Tile;

    /**
     * Time till the machine finishes running.
     */
    timeLeft?: number;

    /**
     * Tracks how many times this machine has been worked.
     */
    worked?: number;

}

/** All the possible properties for an Player. */
export interface IPlayerProperties {
    /**
     * What type of client this is, e.g. 'Python', 'JavaScript', or some other
     * language. For potential data mining purposes.
     */
    clientType?: string;

    /**
     * The amount of heat this Player has.
     */
    heat?: number;

    /**
     * Time left till a intern spawns.
     */
    internSpawn?: number;

    /**
     * If the player lost the game or not.
     */
    lost?: boolean;

    /**
     * Time left till a manager spawns.
     */
    managerSpawn?: number;

    /**
     * The name of the player.
     */
    name?: string;

    /**
     * This player's opponent in the game.
     */
    opponent?: Player;

    /**
     * Time left till a physicist spawns.
     */
    physicistSpawn?: number;

    /**
     * The amount of pressure this Player has.
     */
    pressure?: number;

    /**
     * The reason why the player lost the game.
     */
    reasonLost?: string;

    /**
     * The reason why the player won the game.
     */
    reasonWon?: string;

    /**
     * The amount of time (in ns) remaining for this AI to send commands.
     */
    timeRemaining?: number;

    /**
     * Every Unit owned by this Player.
     */
    units?: Unit[];

    /**
     * If the player won the game or not.
     */
    won?: boolean;

}

/** All the possible properties for an Tile. */
export interface ITileProperties {
    /**
     * The amount of blueium on this tile.
     */
    blueium?: number;

    /**
     * The amount of blueium ore on this tile.
     */
    blueiumOre?: number;

    /**
     * (Visualizer only) Different tile tipes, cracked, slightly dirty, ect.
     * This has no effect on gameplay, but feel free to use it if you want.
     */
    decoration?: number;

    /**
     * The direction of a conveyor belt ('blank', 'north', 'east', 'south', or
     * 'west'). blank mean no conveyor.
     */
    direction?: "blank" | "north" | "east" | "south" | "west";

    /**
     * Weither or not the tile is a wall.
     */
    isWall?: boolean;

    /**
     * The machine on this Tile if present, otherwise undefined.
     */
    machine?: Machine;

    /**
     * The owner of this Tile, or undefined if owned by no-one. Only for
     * generators and spawn areas.
     */
    owner?: Player;

    /**
     * The amount of redium on this tile.
     */
    redium?: number;

    /**
     * The amount of redium ore on this tile.
     */
    rediumOre?: number;

    /**
     * The Tile to the 'East' of this one (x+1, y). Undefined if out of bounds
     * of the map.
     */
    tileEast?: Tile;

    /**
     * The Tile to the 'North' of this one (x, y-1). Undefined if out of bounds
     * of the map.
     */
    tileNorth?: Tile;

    /**
     * The Tile to the 'South' of this one (x, y+1). Undefined if out of bounds
     * of the map.
     */
    tileSouth?: Tile;

    /**
     * The Tile to the 'West' of this one (x-1, y). Undefined if out of bounds
     * of the map.
     */
    tileWest?: Tile;

    /**
     * The type of Tile this is ('normal', 'generator', 'conveyor', or
     * 'spawn').
     */
    type?: "normal" | "generator" | "conveyor" | "spawn";

    /**
     * The Unit on this Tile if present, otherwise undefined.
     */
    unit?: Unit;

    /**
     * The x (horizontal) position of this Tile.
     */
    x?: number;

    /**
     * The y (vertical) position of this Tile.
     */
    y?: number;

}

/** All the possible properties for an Unit. */
export interface IUnitProperties {
    /**
     * Whether this Unit has performed its action this turn.
     */
    acted?: boolean;

    /**
     * The amount of blueium carried by this unit.
     */
    blueium?: number;

    /**
     * The amount of blueium ore carried by this unit.
     */
    blueiumOre?: number;

    /**
     * The remaining health of a unit.
     */
    health?: number;

    /**
     * The Job this Unit does.
     */
    job?: Job;

    /**
     * How many more times this Unit may move this turn.
     */
    moves?: number;

    /**
     * The Player that owns and can control this Unit.
     */
    owner?: Player;

    /**
     * The amount of redium carried by this unit.
     */
    redium?: number;

    /**
     * The amount of redium ore carried by this unit.
     */
    rediumOre?: number;

    /**
     * Duration of stun immunity.
     */
    stunImmune?: number;

    /**
     * Duration the unit is stunned.
     */
    stunTime?: number;

    /**
     * The Tile this Unit is on.
     */
    tile?: Tile;

}

/**
 * Argument overrides for Unit's act function. If you return an object of this
 * interface from the invalidate functions, the value(s) you set will be used
 * in the actual function.
 */
export interface IUnitActArgs {
    /**
     * The tile the unit acts on.
     */
    tile?: Tile;
}

/**
 * Argument overrides for Unit's attack function. If you return an object of
 * this interface from the invalidate functions, the value(s) you set will be
 * used in the actual function.
 */
export interface IUnitAttackArgs {
    /**
     * The Tile to attack.
     */
    tile?: Tile;
}

/**
 * Argument overrides for Unit's drop function. If you return an object of this
 * interface from the invalidate functions, the value(s) you set will be used
 * in the actual function.
 */
export interface IUnitDropArgs {
    /**
     * The tile the materials will be dropped on.
     */
    tile?: Tile;
    /**
     * The amount of materials to dropped. Amounts <= 0 will drop all the
     * materials on the Unit.
     */
    amount?: number;
    /**
     * The material the unit will drop.
     */
    material?: "redium ore" | "redium" | "blueium" | "blueium ore";
}

/**
 * Argument overrides for Unit's move function. If you return an object of this
 * interface from the invalidate functions, the value(s) you set will be used
 * in the actual function.
 */
export interface IUnitMoveArgs {
    /**
     * The Tile this Unit should move to.
     */
    tile?: Tile;
}

/**
 * Argument overrides for Unit's pickup function. If you return an object of
 * this interface from the invalidate functions, the value(s) you set will be
 * used in the actual function.
 */
export interface IUnitPickupArgs {
    /**
     * The tile the materials will be dropped on.
     */
    tile?: Tile;
    /**
     * The amount of materials to pick up. Amounts <= 0 will pick up all the
     * materials on the Unit.
     */
    amount?: number;
    /**
     * The material the unit will pick up.
     */
    material?: "redium ore" | "redium" | "blueium" | "blueium ore";
}

export * from "./game-object";
export * from "./job";
export * from "./machine";
export * from "./player";
export * from "./tile";
export * from "./unit";
export * from "./game";
export * from "./game-manager";
export * from "./ai";

import { GameObject } from "./game-object";
import { Job } from "./job";
import { Machine } from "./machine";
import { Player } from "./player";
import { Tile } from "./tile";
import { Unit } from "./unit";

import { AI } from "./ai";
import { NewtonianGame } from "./game";
import { NewtonianGameManager } from "./game-manager";
import { NewtonianGameSettingsManager } from "./game-settings";

/** The arguments used to construct a Job */
export type JobArgs = FirstArgumentFromConstructor<typeof Job>;

/** The arguments used to construct a Machine */
export type MachineArgs = FirstArgumentFromConstructor<typeof Machine>;

/** The arguments used to construct a Tile */
export type TileArgs = FirstArgumentFromConstructor<typeof Tile>;

/** The arguments used to construct a Unit */
export type UnitArgs = FirstArgumentFromConstructor<typeof Unit>;

/**
 * The factory that **must** be used to create any game objects in
 * the Newtonian game.
 */
export class NewtonianGameObjectFactory extends BaseGameObjectFactory {
    /**
     * Creates a new Job in the Game and tracks it for all players.
     *
     * @param args - Data about the Job to set. Any keys matching a property in
     * the game object's class will be automatically set for you.
     * @returns A new Job hooked up in the game and ready for you to use.
     */
    public job<T extends JobArgs>(args: T): Job & T {
        return this.createGameObject("Job", Job, args);
    }

    /**
     * Creates a new Machine in the Game and tracks it for all players.
     *
     * @param args - Data about the Machine to set. Any keys matching a
     * property in the game object's class will be automatically set for you.
     * @returns A new Machine hooked up in the game and ready for you to use.
     */
    public machine<T extends MachineArgs>(args: T): Machine & T {
        return this.createGameObject("Machine", Machine, args);
    }

    /**
     * Creates a new Tile in the Game and tracks it for all players.
     *
     * @param args - Data about the Tile to set. Any keys matching a property
     * in the game object's class will be automatically set for you.
     * @returns A new Tile hooked up in the game and ready for you to use.
     */
    public tile<T extends TileArgs>(args: T): Tile & T {
        return this.createGameObject("Tile", Tile, args);
    }

    /**
     * Creates a new Unit in the Game and tracks it for all players.
     *
     * @param args - Data about the Unit to set. Any keys matching a property
     * in the game object's class will be automatically set for you.
     * @returns A new Unit hooked up in the game and ready for you to use.
     */
    public unit<T extends UnitArgs>(args: T): Unit & T {
        return this.createGameObject("Unit", Unit, args);
    }

}

/**
 * The shared namespace for Newtonian that is used to
 * initialize each game instance.
 */
export const Namespace = makeNamespace({
    AI,
    Game: NewtonianGame,
    GameManager: NewtonianGameManager,
    GameObjectFactory: NewtonianGameObjectFactory,
    GameSettingsManager: NewtonianGameSettingsManager,
    Player,

    // These are generated metadata that allow delta-merging values from
    // clients.
    // They are never intended to be directly interfaced with outside of the
    // Cerveau core developers.
    gameName: "Newtonian",
    gameSettingsManager: new NewtonianGameSettingsManager(),
    gameObjectsSchema: {
        AI: {
            attributes: {
            },
            functions: {
                runTurn: {
                    args: [
                    ],
                    returns: {
                        typeName: "boolean",
                    },
                },
            },
        },
        Game: {
            attributes: {
                currentPlayer: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: false,
                },
                currentTurn: {
                    typeName: "int",
                },
                degradeRate: {
                    typeName: "float",
                },
                gameObjects: {
                    typeName: "dictionary",
                    keyType: {
                        typeName: "string",
                    },
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: GameObject,
                        nullable: false,
                    },
                },
                internCap: {
                    typeName: "int",
                },
                jobs: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Job,
                        nullable: false,
                    },
                },
                machines: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Machine,
                        nullable: false,
                    },
                },
                managerCap: {
                    typeName: "int",
                },
                mapHeight: {
                    typeName: "int",
                },
                mapWidth: {
                    typeName: "int",
                },
                maxTurns: {
                    typeName: "int",
                },
                physicistCap: {
                    typeName: "int",
                },
                players: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Player,
                        nullable: false,
                    },
                },
                refinedValue: {
                    typeName: "int",
                },
                session: {
                    typeName: "string",
                },
                spawnTime: {
                    typeName: "int",
                },
                stunTime: {
                    typeName: "int",
                },
                tiles: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Tile,
                        nullable: false,
                    },
                },
                timeAddedPerTurn: {
                    typeName: "int",
                },
                timeImmune: {
                    typeName: "int",
                },
                units: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Unit,
                        nullable: false,
                    },
                },
            },
            functions: {
            },
        },
        GameObject: {
            attributes: {
                gameObjectName: {
                    typeName: "string",
                },
                id: {
                    typeName: "string",
                },
                logs: {
                    typeName: "list",
                    valueType: {
                        typeName: "string",
                    },
                },
            },
            functions: {
                log: {
                    args: [
                        {
                            argName: "message",
                            typeName: "string",
                        },
                    ],
                    returns: {
                        typeName: "void",
                    },
                },
            },
        },
        Job: {
            parentClassName: "GameObject",
            attributes: {
                carryLimit: {
                    typeName: "int",
                },
                damage: {
                    typeName: "int",
                },
                health: {
                    typeName: "int",
                },
                moves: {
                    typeName: "int",
                },
                title: {
                    typeName: "string",
                },
            },
            functions: {
            },
        },
        Machine: {
            parentClassName: "GameObject",
            attributes: {
                oreType: {
                    typeName: "string",
                    defaultValue: "redium",
                    literals: ["redium", "blueium"],
                },
                refineInput: {
                    typeName: "int",
                },
                refineOutput: {
                    typeName: "int",
                },
                refineTime: {
                    typeName: "int",
                },
                tile: {
                    typeName: "gameObject",
                    gameObjectClass: Tile,
                    nullable: false,
                },
                timeLeft: {
                    typeName: "int",
                },
                worked: {
                    typeName: "int",
                },
            },
            functions: {
            },
        },
        Player: {
            parentClassName: "GameObject",
            attributes: {
                clientType: {
                    typeName: "string",
                },
                heat: {
                    typeName: "int",
                },
                internSpawn: {
                    typeName: "int",
                },
                lost: {
                    typeName: "boolean",
                },
                managerSpawn: {
                    typeName: "int",
                },
                name: {
                    typeName: "string",
                },
                opponent: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: false,
                },
                physicistSpawn: {
                    typeName: "int",
                },
                pressure: {
                    typeName: "int",
                },
                reasonLost: {
                    typeName: "string",
                },
                reasonWon: {
                    typeName: "string",
                },
                timeRemaining: {
                    typeName: "float",
                },
                units: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Unit,
                        nullable: false,
                    },
                },
                won: {
                    typeName: "boolean",
                },
            },
            functions: {
            },
        },
        Tile: {
            parentClassName: "GameObject",
            attributes: {
                blueium: {
                    typeName: "int",
                },
                blueiumOre: {
                    typeName: "int",
                },
                decoration: {
                    typeName: "int",
                },
                direction: {
                    typeName: "string",
                    defaultValue: "blank",
                    literals: ["blank", "north", "east", "south", "west"],
                },
                isWall: {
                    typeName: "boolean",
                },
                machine: {
                    typeName: "gameObject",
                    gameObjectClass: Machine,
                    nullable: true,
                },
                owner: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: true,
                },
                redium: {
                    typeName: "int",
                },
                rediumOre: {
                    typeName: "int",
                },
                tileEast: {
                    typeName: "gameObject",
                    gameObjectClass: Tile,
                    nullable: true,
                },
                tileNorth: {
                    typeName: "gameObject",
                    gameObjectClass: Tile,
                    nullable: true,
                },
                tileSouth: {
                    typeName: "gameObject",
                    gameObjectClass: Tile,
                    nullable: true,
                },
                tileWest: {
                    typeName: "gameObject",
                    gameObjectClass: Tile,
                    nullable: true,
                },
                type: {
                    typeName: "string",
                    defaultValue: "normal",
                    literals: ["normal", "generator", "conveyor", "spawn"],
                },
                unit: {
                    typeName: "gameObject",
                    gameObjectClass: Unit,
                    nullable: true,
                },
                x: {
                    typeName: "int",
                },
                y: {
                    typeName: "int",
                },
            },
            functions: {
            },
        },
        Unit: {
            parentClassName: "GameObject",
            attributes: {
                acted: {
                    typeName: "boolean",
                },
                blueium: {
                    typeName: "int",
                },
                blueiumOre: {
                    typeName: "int",
                },
                health: {
                    typeName: "int",
                },
                job: {
                    typeName: "gameObject",
                    gameObjectClass: Job,
                    nullable: false,
                },
                moves: {
                    typeName: "int",
                },
                owner: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: true,
                },
                redium: {
                    typeName: "int",
                },
                rediumOre: {
                    typeName: "int",
                },
                stunImmune: {
                    typeName: "int",
                },
                stunTime: {
                    typeName: "int",
                },
                tile: {
                    typeName: "gameObject",
                    gameObjectClass: Tile,
                    nullable: true,
                },
            },
            functions: {
                act: {
                    args: [
                        {
                            argName: "tile",
                            typeName: "gameObject",
                            gameObjectClass: Tile,
                            nullable: false,
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
                attack: {
                    args: [
                        {
                            argName: "tile",
                            typeName: "gameObject",
                            gameObjectClass: Tile,
                            nullable: false,
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
                drop: {
                    args: [
                        {
                            argName: "tile",
                            typeName: "gameObject",
                            gameObjectClass: Tile,
                            nullable: false,
                        },
                        {
                            argName: "amount",
                            typeName: "int",
                        },
                        {
                            argName: "material",
                            typeName: "string",
                            defaultValue: "redium ore",
                            literals: ["redium ore", "redium", "blueium", "blueium ore"],
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
                move: {
                    args: [
                        {
                            argName: "tile",
                            typeName: "gameObject",
                            gameObjectClass: Tile,
                            nullable: false,
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
                pickup: {
                    args: [
                        {
                            argName: "tile",
                            typeName: "gameObject",
                            gameObjectClass: Tile,
                            nullable: false,
                        },
                        {
                            argName: "amount",
                            typeName: "int",
                        },
                        {
                            argName: "material",
                            typeName: "string",
                            defaultValue: "redium ore",
                            literals: ["redium ore", "redium", "blueium", "blueium ore"],
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
            },
        },
    },
});
