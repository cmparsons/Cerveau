import { IAnyObject } from "~/utils";
import { BaseClasses } from "./";

// <<-- Creer-Merge: imports -->>
import * as chessjs from "chess.js";

const chess = new chessjs.Chess();
// <<-- /Creer-Merge: imports -->>

/**
 * The settings manager for the Chess game.
 */
export class ChessGameSettingsManager extends BaseClasses.GameSettings {
    /**
     * This describes the structure of the game settings, and is used to
     * generate the values, as well as basic type and range checking.
     */
    public schema = this.makeSchema({
        ...(super.schema || (this as any).schema), // HACK: super should work. but schema is undefined on it

        // Chess game specific settings
        fen: {
            description: "Forsyth-Edwards Notation (fen), a notation that "
                       + "describes the game board state.",
            // <<-- Creer-Merge: fen -->>
            default: "",
            // <<-- /Creer-Merge: fen -->>
        },
        // <<-- Creer-Merge: schema -->>

        pgn: {
            description: "The starting board state in Portable Game Notation "
                       + "(PGN).",
            default: "",
        },

        // <<-- /Creer-Merge: schema -->>

        // Base settings
        playerStartingTime: {
            // <<-- Creer-Merge: player-starting-time -->>
            default: 6e10, // 1 min in ns
            // <<-- /Creer-Merge: player-starting-time -->>
            min: 0,
            description: "The starting time (in ns) for each player.",
        },

    });

    /**
     * The current values for the game's settings
     */
    public values = this.initialValues(this.schema);

    /**
     * Try to invalidate all the game settings here, so invalid values do not
     * reach the game.
     * @param someSettings A subset of settings that will be tested
     * @returns An error if the settings fail to validate.
     */
    protected invalidate(someSettings: IAnyObject): IAnyObject | Error {
        const invalidated = super.invalidate(someSettings);
        if (invalidated instanceof Error) {
            return invalidated;
        }

        const settings = { ...this.values, ...someSettings, ...invalidated };

        // <<-- Creer-Merge: invalidate -->>

        if (settings.fen && settings.pgn) {
            return new Error(
                "Cannot set FEN and PGN at the same time. "
              + "Use only one for an initial board state.",
            );
        }

        if (settings.fen) {
            // try to validate the FEN string
            const validated = chess.validate_fen(settings.fen);

            if (!validated.valid) {
                return new Error(validated.error);
            }
        }

        if (settings.pgn) {
            const valid = chess.load_pgn(settings.pgn, { sloppy: true });
            chess.reset(); // we just wanted to validate, not actually load.

            if (!valid) {
                return new Error("Could not load PGN.");
            }
        }

        // <<-- /Creer-Merge: invalidate -->>

        return settings;
    }
}
