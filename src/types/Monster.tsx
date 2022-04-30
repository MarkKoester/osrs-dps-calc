export interface MonsterCombat {
  hp: number,
  attack: number,
  strength: number,
  defence: number,
  magic: number,
  ranged: number
}

export interface MonsterOffensive {
  attack: number,
  strength: number,
  magic: number,
  magic_str: number,
  ranged: number,
  ranged_str: number
}

export interface MonsterDefensive {
  stab: number,
  slash: number,
  crush: number,
  magic: number,
  ranged: number
}

export interface Monster {
  combat: MonsterCombat,
  offensive: MonsterOffensive,
  defensive: MonsterDefensive
}