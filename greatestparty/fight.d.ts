interface Fighter {
    health: number;
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
    weapon: Equipment;
    armor: Equipment;
}
declare function fightCalculatePhysicalDamage(attacker: Fighter, defender: Fighter): number;
declare function fightCalculateMagicalDamage(attacker: Fighter, defender: Fighter): number;
declare function fightCalculateElementalDamage(attacker: Fighter, defender: Fighter): number;
declare function fightCalculateAttack(attacker: Fighter, defender: Fighter): number;
