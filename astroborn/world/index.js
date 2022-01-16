import { stateAddItem } from '../game.js';
import { strings } from '../strings.js';
export { LangMap, langmap, } from '../lang.js';
export { Scene, } from '../scene.js';
import * as Lenuve from './lenuve/index.js';
import * as Void from './void/index.js';
export const rooms = [
    ...Lenuve.rooms,
    ...Void.rooms,
];
export function getRoom(roomNo) {
    for (const room of rooms) {
        if (room.roomNo == roomNo) {
            return room;
        }
    }
    return null;
}
export const items = [
    ...Lenuve.items,
    ...Void.items,
];
export function getItem(itemNo) {
    for (const item of items) {
        if (item.itemNo == itemNo) {
            return item;
        }
    }
    return null;
}
// Use this function to create an initial game state. Implicit return type is intentional. It helps
// define the GameState interface.
export function state() {
    return {
        lenuve: Lenuve.state(),
        void: Void.state(),
    };
}
export const startRoomNo = Lenuve.rooms[0].roomNo;
export function makePickupItem(item, items, stateItemsKey) {
    if (items[stateItemsKey]) {
        return [];
    }
    return [{
            name: item.name,
            description: item.description,
            get: {
                text: item.name,
                action: (state) => {
                    items[stateItemsKey] = true;
                    stateAddItem(state, item.itemNo);
                    return strings.actions.youPickUpItem(item);
                },
            },
        }];
}
//# sourceMappingURL=index.js.map