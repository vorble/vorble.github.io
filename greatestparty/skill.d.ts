declare type SkillIdentifier = 'initiative' | 'inspire' | 'sacrifice' | 'conscript' | 'animate' | 'sabotage' | 'acclaim' | 'rationing';
declare const SKILLS: Array<SkillIdentifier>;
interface Skill extends ClockActions {
    level: number;
    name: string;
    levelMax: number;
    costTier: number;
    unlockAtCompletedQuests: number;
    doBuyActions?: (game: Game) => void;
}
declare class Skills {
    initiative: Skill;
    inspire: Skill;
    sacrifice: Skill;
    conscript: Skill;
    animate: Skill;
    sabotage: Skill;
    acclaim: Skill;
    rationing: Skill;
    constructor();
}
