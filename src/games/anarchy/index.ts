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
import { ITurnBasedPlayer, ITwoPlayerPlayer, mixTurnBased, mixTwoPlayer,
       } from "~/core/game/mixins";

// extract game object constructor args
import { FirstArgumentFromConstructor } from "~/utils";

/**
 * The interface the Player for the Anarchy game
 * must implement from mixed in game logic.
 */
export interface IBaseAnarchyPlayer extends
    IBasePlayer,
    ITwoPlayerPlayer,
    ITurnBasedPlayer {
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

const mixed = base2;

/** The base AI class for the Anarchy game will mixin logic. */
class BaseAnarchyAI extends mixed.AI {}

/** The base Game class for the Anarchy game will mixin logic. */
class BaseAnarchyGame extends mixed.Game {}

/** The base GameManager class for the Anarchy game will mixin logic. */
class BaseAnarchyGameManager extends mixed.GameManager {}

/** The base GameObject class for the Anarchy game will mixin logic. */
class BaseAnarchyGameObject extends mixed.GameObject {}

/** The base GameSettings class for the Anarchy game will mixin logic. */
class BaseAnarchyGameSettings extends mixed.GameSettings {}

/** The Base classes that game classes build off of. */
export const BaseClasses = {
    AI: BaseAnarchyAI,
    Game: BaseAnarchyGame,
    GameManager: BaseAnarchyGameManager,
    GameObject: BaseAnarchyGameObject,
    GameSettings: BaseAnarchyGameSettings,
};

// Now all the base classes are created;
// so we can start importing/exporting the classes that need them.

/** All the possible properties for an Building. */
export interface IBuildingProperties {
    /**
     * When true this building has already been bribed this turn and cannot be
     * bribed again this turn.
     */
    bribed?: boolean;

    /**
     * The Building directly to the east of this building, or undefined if not
     * present.
     */
    buildingEast?: Building;

    /**
     * The Building directly to the north of this building, or undefined if not
     * present.
     */
    buildingNorth?: Building;

    /**
     * The Building directly to the south of this building, or undefined if not
     * present.
     */
    buildingSouth?: Building;

    /**
     * The Building directly to the west of this building, or undefined if not
     * present.
     */
    buildingWest?: Building;

    /**
     * How much fire is currently burning the building, and thus how much
     * damage it will take at the end of its owner's turn. 0 means no fire.
     */
    fire?: number;

    /**
     * How much health this building currently has. When this reaches 0 the
     * Building has been burned down.
     */
    health?: number;

    /**
     * True if this is the Headquarters of the owning player, false otherwise.
     * Burning this down wins the game for the other Player.
     */
    isHeadquarters?: boolean;

    /**
     * The player that owns this building. If it burns down (health reaches 0)
     * that player gets an additional bribe(s).
     */
    owner?: Player;

    /**
     * The location of the Building along the x-axis.
     */
    x?: number;

    /**
     * The location of the Building along the y-axis.
     */
    y?: number;

}

/** All the possible properties for an FireDepartment. */
export interface IFireDepartmentProperties {
    /**
     * The amount of fire removed from a building when bribed to extinguish a
     * building.
     */
    fireExtinguished?: number;

}

/**
 * Argument overrides for FireDepartment's extinguish function. If you return
 * an object of this interface from the invalidate functions, the value(s) you
 * set will be used in the actual function.
 */
export interface IFireDepartmentExtinguishArgs {
    /**
     * The Building you want to extinguish.
     */
    building?: Building;
}

/** All the possible properties for an Forecast. */
export interface IForecastProperties {
    /**
     * The Player that can use WeatherStations to control this Forecast when
     * its the nextForecast.
     */
    controllingPlayer?: Player;

    /**
     * The direction the wind will blow fires in. Can be 'north', 'east',
     * 'south', or 'west'.
     */
    direction?: "North" | "East" | "South" | "West";

    /**
     * How much of a Building's fire that can be blown in the direction of this
     * Forecast. Fire is duplicated (copied), not moved (transfered).
     */
    intensity?: number;

}

/** All the possible properties for an GameObject. */
export interface IGameObjectProperties {
}

/** All the possible properties for an Player. */
export interface IPlayerProperties {
    /**
     * How many bribes this player has remaining to use during their turn. Each
     * action a Building does costs 1 bribe. Any unused bribes are lost at the
     * end of the player's turn.
     */
    bribesRemaining?: number;

    /**
     * All the buildings owned by this player.
     */
    buildings?: Building[];

    /**
     * What type of client this is, e.g. 'Python', 'JavaScript', or some other
     * language. For potential data mining purposes.
     */
    clientType?: string;

    /**
     * All the FireDepartments owned by this player.
     */
    fireDepartments?: FireDepartment[];

    /**
     * The Warehouse that serves as this player's headquarters and has extra
     * health. If this gets destroyed they lose.
     */
    headquarters?: Warehouse;

    /**
     * If the player lost the game or not.
     */
    lost?: boolean;

    /**
     * The name of the player.
     */
    name?: string;

    /**
     * This player's opponent in the game.
     */
    opponent?: Player;

    /**
     * All the PoliceDepartments owned by this player.
     */
    policeDepartments?: PoliceDepartment[];

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
     * All the warehouses owned by this player. Includes the Headquarters.
     */
    warehouses?: Warehouse[];

    /**
     * All the WeatherStations owned by this player.
     */
    weatherStations?: WeatherStation[];

    /**
     * If the player won the game or not.
     */
    won?: boolean;

}

/** All the possible properties for an PoliceDepartment. */
export interface IPoliceDepartmentProperties {
}

/**
 * Argument overrides for PoliceDepartment's raid function. If you return an
 * object of this interface from the invalidate functions, the value(s) you set
 * will be used in the actual function.
 */
export interface IPoliceDepartmentRaidArgs {
    /**
     * The warehouse you want to raid.
     */
    warehouse?: Warehouse;
}

/** All the possible properties for an Warehouse. */
export interface IWarehouseProperties {
    /**
     * How exposed the anarchists in this warehouse are to PoliceDepartments.
     * Raises when bribed to ignite buildings, and drops each turn if not
     * bribed.
     */
    exposure?: number;

    /**
     * The amount of fire added to buildings when bribed to ignite a building.
     * Headquarters add more fire than normal Warehouses.
     */
    fireAdded?: number;

}

/**
 * Argument overrides for Warehouse's ignite function. If you return an object
 * of this interface from the invalidate functions, the value(s) you set will
 * be used in the actual function.
 */
export interface IWarehouseIgniteArgs {
    /**
     * The Building you want to light on fire.
     */
    building?: Building;
}

/** All the possible properties for an WeatherStation. */
export interface IWeatherStationProperties {
}

/**
 * Argument overrides for WeatherStation's intensify function. If you return an
 * object of this interface from the invalidate functions, the value(s) you set
 * will be used in the actual function.
 */
export interface IWeatherStationIntensifyArgs {
    /**
     * By default the intensity will be increased by 1, setting this to true
     * decreases the intensity by 1.
     */
    negative?: boolean;
}

/**
 * Argument overrides for WeatherStation's rotate function. If you return an
 * object of this interface from the invalidate functions, the value(s) you set
 * will be used in the actual function.
 */
export interface IWeatherStationRotateArgs {
    /**
     * By default the direction will be rotated clockwise. If you set this to
     * true we will rotate the forecast counterclockwise instead.
     */
    counterclockwise?: boolean;
}

export * from "./building";
export * from "./fire-department";
export * from "./forecast";
export * from "./game-object";
export * from "./player";
export * from "./police-department";
export * from "./warehouse";
export * from "./weather-station";
export * from "./game";
export * from "./game-manager";
export * from "./ai";

import { Building } from "./building";
import { FireDepartment } from "./fire-department";
import { Forecast } from "./forecast";
import { GameObject } from "./game-object";
import { Player } from "./player";
import { PoliceDepartment } from "./police-department";
import { Warehouse } from "./warehouse";
import { WeatherStation } from "./weather-station";

import { AI } from "./ai";
import { AnarchyGame } from "./game";
import { AnarchyGameManager } from "./game-manager";
import { AnarchyGameSettingsManager } from "./game-settings";

/** The arguments used to construct a Building */
export type BuildingArgs = FirstArgumentFromConstructor<typeof Building>;

/** The arguments used to construct a FireDepartment */
export type FireDepartmentArgs = FirstArgumentFromConstructor<typeof FireDepartment>;

/** The arguments used to construct a Forecast */
export type ForecastArgs = FirstArgumentFromConstructor<typeof Forecast>;

/** The arguments used to construct a PoliceDepartment */
export type PoliceDepartmentArgs = FirstArgumentFromConstructor<typeof PoliceDepartment>;

/** The arguments used to construct a Warehouse */
export type WarehouseArgs = FirstArgumentFromConstructor<typeof Warehouse>;

/** The arguments used to construct a WeatherStation */
export type WeatherStationArgs = FirstArgumentFromConstructor<typeof WeatherStation>;

/**
 * The factory that **must** be used to create any game objects in
 * the Anarchy game.
 */
export class AnarchyGameObjectFactory extends BaseGameObjectFactory {
    /**
     * Creates a new Building in the Game and tracks it for all players.
     *
     * @param args - Data about the Building to set. Any keys matching a
     * property in the game object's class will be automatically set for you.
     * @returns A new Building hooked up in the game and ready for you to use.
     */
    public building<T extends BuildingArgs>(args: T): Building & T {
        return this.createGameObject("Building", Building, args);
    }

    /**
     * Creates a new FireDepartment in the Game and tracks it for all players.
     *
     * @param args - Data about the FireDepartment to set. Any keys matching a
     * property in the game object's class will be automatically set for you.
     * @returns A new FireDepartment hooked up in the game and ready for you to
     * use.
     */
    public fireDepartment<T extends FireDepartmentArgs>(args: T): FireDepartment & T {
        return this.createGameObject("FireDepartment", FireDepartment, args);
    }

    /**
     * Creates a new Forecast in the Game and tracks it for all players.
     *
     * @param args - Data about the Forecast to set. Any keys matching a
     * property in the game object's class will be automatically set for you.
     * @returns A new Forecast hooked up in the game and ready for you to use.
     */
    public forecast<T extends ForecastArgs>(args: T): Forecast & T {
        return this.createGameObject("Forecast", Forecast, args);
    }

    /**
     * Creates a new PoliceDepartment in the Game and tracks it for all
     * players.
     *
     * @param args - Data about the PoliceDepartment to set. Any keys matching
     * a property in the game object's class will be automatically set for you.
     * @returns A new PoliceDepartment hooked up in the game and ready for you
     * to use.
     */
    public policeDepartment<T extends PoliceDepartmentArgs>(args: T): PoliceDepartment & T {
        return this.createGameObject("PoliceDepartment", PoliceDepartment, args);
    }

    /**
     * Creates a new Warehouse in the Game and tracks it for all players.
     *
     * @param args - Data about the Warehouse to set. Any keys matching a
     * property in the game object's class will be automatically set for you.
     * @returns A new Warehouse hooked up in the game and ready for you to use.
     */
    public warehouse<T extends WarehouseArgs>(args: T): Warehouse & T {
        return this.createGameObject("Warehouse", Warehouse, args);
    }

    /**
     * Creates a new WeatherStation in the Game and tracks it for all players.
     *
     * @param args - Data about the WeatherStation to set. Any keys matching a
     * property in the game object's class will be automatically set for you.
     * @returns A new WeatherStation hooked up in the game and ready for you to
     * use.
     */
    public weatherStation<T extends WeatherStationArgs>(args: T): WeatherStation & T {
        return this.createGameObject("WeatherStation", WeatherStation, args);
    }

}

/**
 * The shared namespace for Anarchy that is used to
 * initialize each game instance.
 */
export const Namespace = makeNamespace({
    AI,
    Game: AnarchyGame,
    GameManager: AnarchyGameManager,
    GameObjectFactory: AnarchyGameObjectFactory,
    GameSettingsManager: AnarchyGameSettingsManager,
    Player,

    // These are generated metadata that allow delta-merging values from
    // clients.
    // They are never intended to be directly interfaced with outside of the
    // Cerveau core developers.
    gameName: "Anarchy",
    gameSettingsManager: new AnarchyGameSettingsManager(),
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
                baseBribesPerTurn: {
                    typeName: "int",
                },
                buildings: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Building,
                        nullable: false,
                    },
                },
                currentForecast: {
                    typeName: "gameObject",
                    gameObjectClass: Forecast,
                    nullable: false,
                },
                currentPlayer: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: false,
                },
                currentTurn: {
                    typeName: "int",
                },
                forecasts: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Forecast,
                        nullable: false,
                    },
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
                mapHeight: {
                    typeName: "int",
                },
                mapWidth: {
                    typeName: "int",
                },
                maxFire: {
                    typeName: "int",
                },
                maxForecastIntensity: {
                    typeName: "int",
                },
                maxTurns: {
                    typeName: "int",
                },
                nextForecast: {
                    typeName: "gameObject",
                    gameObjectClass: Forecast,
                    nullable: true,
                },
                players: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Player,
                        nullable: false,
                    },
                },
                session: {
                    typeName: "string",
                },
                timeAddedPerTurn: {
                    typeName: "int",
                },
            },
            functions: {
            },
        },
        Building: {
            parentClassName: "GameObject",
            attributes: {
                bribed: {
                    typeName: "boolean",
                },
                buildingEast: {
                    typeName: "gameObject",
                    gameObjectClass: Building,
                    nullable: true,
                },
                buildingNorth: {
                    typeName: "gameObject",
                    gameObjectClass: Building,
                    nullable: true,
                },
                buildingSouth: {
                    typeName: "gameObject",
                    gameObjectClass: Building,
                    nullable: true,
                },
                buildingWest: {
                    typeName: "gameObject",
                    gameObjectClass: Building,
                    nullable: true,
                },
                fire: {
                    typeName: "int",
                },
                health: {
                    typeName: "int",
                },
                isHeadquarters: {
                    typeName: "boolean",
                },
                owner: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: false,
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
        FireDepartment: {
            parentClassName: "Building",
            attributes: {
                fireExtinguished: {
                    typeName: "int",
                },
            },
            functions: {
                extinguish: {
                    args: [
                        {
                            argName: "building",
                            typeName: "gameObject",
                            gameObjectClass: Building,
                            nullable: false,
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
            },
        },
        Forecast: {
            parentClassName: "GameObject",
            attributes: {
                controllingPlayer: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: false,
                },
                direction: {
                    typeName: "string",
                    defaultValue: "North",
                    literals: ["North", "East", "South", "West"],
                },
                intensity: {
                    typeName: "int",
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
        Player: {
            parentClassName: "GameObject",
            attributes: {
                bribesRemaining: {
                    typeName: "int",
                },
                buildings: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Building,
                        nullable: false,
                    },
                },
                clientType: {
                    typeName: "string",
                },
                fireDepartments: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: FireDepartment,
                        nullable: false,
                    },
                },
                headquarters: {
                    typeName: "gameObject",
                    gameObjectClass: Warehouse,
                    nullable: false,
                },
                lost: {
                    typeName: "boolean",
                },
                name: {
                    typeName: "string",
                },
                opponent: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: false,
                },
                policeDepartments: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: PoliceDepartment,
                        nullable: false,
                    },
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
                warehouses: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Warehouse,
                        nullable: false,
                    },
                },
                weatherStations: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: WeatherStation,
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
        PoliceDepartment: {
            parentClassName: "Building",
            attributes: {
            },
            functions: {
                raid: {
                    args: [
                        {
                            argName: "warehouse",
                            typeName: "gameObject",
                            gameObjectClass: Warehouse,
                            nullable: false,
                        },
                    ],
                    invalidValue: -1,
                    returns: {
                        typeName: "int",
                    },
                },
            },
        },
        Warehouse: {
            parentClassName: "Building",
            attributes: {
                exposure: {
                    typeName: "int",
                },
                fireAdded: {
                    typeName: "int",
                },
            },
            functions: {
                ignite: {
                    args: [
                        {
                            argName: "building",
                            typeName: "gameObject",
                            gameObjectClass: Building,
                            nullable: false,
                        },
                    ],
                    invalidValue: -1,
                    returns: {
                        typeName: "int",
                    },
                },
            },
        },
        WeatherStation: {
            parentClassName: "Building",
            attributes: {
            },
            functions: {
                intensify: {
                    args: [
                        {
                            argName: "negative",
                            typeName: "boolean",
                            defaultValue: false,
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
                rotate: {
                    args: [
                        {
                            argName: "counterclockwise",
                            typeName: "boolean",
                            defaultValue: false,
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