import { Scene } from './scene.js';
import * as lenuve from './world/lenuve.js';
export function getZoneNoFromRoomNo(roomNo) {
    return Math.floor(roomNo / 1000);
}
export class World {
    constructor() {
        this.zones = new Map();
        lenuve.init(this);
    }
    registerZone(zoneNo, roomGenerator) {
        this.zones.set(zoneNo, roomGenerator);
    }
    getOpeningScene() {
        return new Scene([
            `It is already light as you open your heavy eye lids for the first time today.`,
            `You push yourself up and out of the bed you fought against the night before,
      where the thoughts of the day prior and the uncertainty of what today and the next
      will bring occupied your mind.`,
        ]);
    }
    getStartingRoomNo() {
        return 1000;
    }
    getRoom(progress, roomNo) {
        const zoneNo = getZoneNoFromRoomNo(roomNo);
        const roomGenerator = this.zones.get(zoneNo);
        if (roomGenerator == null) {
            throw new Error(`Room generator for zone ${zoneNo} for room ${roomNo} not found.`);
        }
        return roomGenerator(progress, roomNo);
    }
}
