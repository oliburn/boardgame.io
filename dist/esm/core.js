export { C as ActivePlayers, h as GameMethod, w as INVALID_MOVE, k as Stage, T as TurnOrder } from './turn-order-376d315e.js';
import 'immer';
import './plugin-random-087f861e.js';
import 'lodash.isplainobject';

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
/**
 * PlayerView reducers.
 */
const PlayerView = {
    /**
     * STRIP_SECRETS
     *
     * Reducer which removes a key named `secret` and
     * removes all the keys in `players`, except for the one
     * corresponding to the current playerID.
     */
    STRIP_SECRETS: ({ G, playerID }) => {
        const r = { ...G };
        if (r.secret !== undefined) {
            delete r.secret;
        }
        if (r.players) {
            r.players = playerID
                ? {
                    [playerID]: r.players[playerID],
                }
                : {};
        }
        return r;
    },
};

export { PlayerView };
