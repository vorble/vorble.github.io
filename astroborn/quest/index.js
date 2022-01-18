import { langmap } from '../lang.js';
export function state() {
    return {
        testFlag: true,
    };
}
export function getThings(state, roomNo) {
    // This is just some temporary stuff for now. The real implementation should look up the room in
    // some sort of quest table which should have functions for things like this:
    if (state.quest.testFlag) {
        return [];
    }
    else {
        return [{
                name: langmap({
                    enus: `Absence`,
                }),
                isHereText: langmap({
                    enus: `You get a sense that something is there.`,
                }),
                description: langmap({
                    enus: `There is nothing there.`,
                }),
            }];
    }
}
