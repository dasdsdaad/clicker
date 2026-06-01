export interface Upgrade {
  id: string;
  name: string;
  description: string;
  baseCost: number;
  currentCost: number;
  value: number;
  owned: number;
  category: 'click' | 'passive' | 'multiplier';
  icon: string;
  costMultiplier: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  requirement: number;
  type: 'score' | 'clicks' | 'upgrades' | 'time';
  unlocked: boolean;
  reward: number;
  icon: string;
}

export interface PowerUp {
  id: string;
  name: string;
  description: string;
  duration: number;
  multiplier: number;
  cost: number;
  active: boolean;
  timeRemaining: number;
  icon: string;
}

export interface GameState {
  score: number;
  totalScore: number;
  clicks: number;
  totalClicks: number;
  pointsPerClick: number;
  pointsPerSecond: number;
  globalMultiplier: number;
  criticalChance: number;
  criticalMultiplier: number;
  startTime: number;
  lastSave: number;
  prestigeLevel: number;
  prestigeMultiplier: number;
}