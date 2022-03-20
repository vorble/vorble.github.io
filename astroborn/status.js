import { playerStatsInput } from './player.js';
export const statusPoison = Object.freeze({
    playerStatsMod: Object.freeze({
        addPercent: Object.freeze(playerStatsInput({
            off: -15,
        })),
    }),
});
