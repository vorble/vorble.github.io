declare const PARTY_MEMBER_HP = 100;
interface Level {
    level: number;
    newTown: (game: Game) => Town;
}
interface GameEvent {
    name: string;
    weight: number;
    predicate?: (game: Game) => boolean;
    action: (game: Game) => void;
}
interface GameHooks extends ClockActions {
}
declare class Game {
    party: Party;
    town: Town;
    year: number;
    season: number;
    term: number;
    tock: number;
    tick: number;
    playtime: Clock;
    fightingBoss: boolean;
    running: boolean;
    paused: boolean;
    textLog: Array<string>;
    levels: Array<Level>;
    level: number;
    timeouts: Array<{
        callback: () => void;
        clock: Clock;
    }>;
    boss: null | Enemy;
    enemy: null | Enemy;
    events: Array<GameEvent>;
    hooks: GameHooks;
    constructor();
    registerLevel(level: Level): void;
    newGame(): void;
    rollPartyStats(): {
        str: number;
        dex: number;
        con: number;
        int: number;
        wis: number;
        cha: number;
    };
    startLevel(): void;
    winLevel(): void;
    nextLevel(): void;
    killPartyMembers(count: number): void;
    killTownsfolk(count: number): void;
    killTownsfolkWithMessage(count: number, message: string): void;
    addPartyMembers(count: number): void;
    receiveGold(amount: number): void;
    joinPartyFromTown(count: number): void;
    joinTownFromParty(count: number): void;
    canHire(): boolean;
    hire(): void;
    canConscript(): boolean;
    conscript(): void;
    canSacrifice(): boolean;
    sacrifice(): void;
    canAnimate(): boolean;
    animate(): void;
    useItem(name: ItemNameType): void;
    adjustAlignment(amount: number): void;
    adjustTownNeed(amount: number): void;
    takeQuest(): void;
    fightBoss(): void;
    togglePause(): void;
    buyFood(): void;
    sellFood(): void;
    buyWater(): void;
    sellWater(): void;
    buyEquipment(equipmentType: 'weapon' | 'armor', name: EqFineCategory): void;
    sellEquipment(equipmentType: 'weapon' | 'armor', name: EqFineCategory): void;
    calculateEquipment(): void;
    log(text: string): void;
    fight(): void;
    round(): void;
    pickTownEvent(): null | TownEvent;
    pickGameEvent(): null | GameEvent;
    pickTownQuest(): null | TownQuest;
    pickEnemy(): null | EnemyTemplate;
    pickEnemyEvent(enemy: Enemy): null | EnemyEvent;
    adjustPartyEquipmentRelative(weapon: Equipment, armor: Equipment): void;
    getSkillCost(skill: SkillIdentifier): number;
    canBuySkill(skill: SkillIdentifier): boolean;
    buySkill(skill: SkillIdentifier): void;
    setTimeout(callback: () => void, clock: ClockInput): void;
}
declare let game: Game;
declare function gameStart(): void;
