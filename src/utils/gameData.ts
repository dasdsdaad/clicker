import { Upgrade, Achievement, PowerUp } from '../types/game';

export const initialUpgrades: Upgrade[] = [
  // Click Upgrades
  { id: 'finger', name: 'Strong Fingers', description: '+1 click power', baseCost: 15, currentCost: 15, value: 1, owned: 0, category: 'click', icon: '👆', costMultiplier: 1.5 },
  { id: 'hand', name: 'Double Hand', description: '+2 click power', baseCost: 100, currentCost: 100, value: 2, owned: 0, category: 'click', icon: '✋', costMultiplier: 1.6 },
  { id: 'arm', name: 'Mighty Arm', description: '+5 click power', baseCost: 500, currentCost: 500, value: 5, owned: 0, category: 'click', icon: '💪', costMultiplier: 1.7 },
  { id: 'robot', name: 'Robot Hand', description: '+10 click power', baseCost: 2500, currentCost: 2500, value: 10, owned: 0, category: 'click', icon: '🤖', costMultiplier: 1.8 },
  { id: 'cyber', name: 'Cybernetic Arm', description: '+25 click power', baseCost: 10000, currentCost: 10000, value: 25, owned: 0, category: 'click', icon: '⚙️', costMultiplier: 1.9 },
  
  // Passive Upgrades
  { id: 'cursor', name: 'Auto Cursor', description: '+0.5 per second', baseCost: 25, currentCost: 25, value: 0.5, owned: 0, category: 'passive', icon: '🖱️', costMultiplier: 1.4 },
  { id: 'assistant', name: 'Click Assistant', description: '+1 per second', baseCost: 75, currentCost: 75, value: 1, owned: 0, category: 'passive', icon: '🧑‍💻', costMultiplier: 1.5 },
  { id: 'bot', name: 'Click Bot', description: '+3 per second', baseCost: 300, currentCost: 300, value: 3, owned: 0, category: 'passive', icon: '🤖', costMultiplier: 1.6 },
  { id: 'factory', name: 'Click Factory', description: '+8 per second', baseCost: 1500, currentCost: 1500, value: 8, owned: 0, category: 'passive', icon: '🏭', costMultiplier: 1.7 },
  { id: 'empire', name: 'Click Empire', description: '+20 per second', baseCost: 7500, currentCost: 7500, value: 20, owned: 0, category: 'passive', icon: '🏰', costMultiplier: 1.8 },
  { id: 'quantum', name: 'Quantum Clicker', description: '+50 per second', baseCost: 30000, currentCost: 30000, value: 50, owned: 0, category: 'passive', icon: '⚛️', costMultiplier: 1.9 },
  
  // Multiplier Upgrades
  { id: 'coffee', name: 'Coffee Boost', description: '+5% multiplier', baseCost: 200, currentCost: 200, value: 0.05, owned: 0, category: 'multiplier', icon: '☕', costMultiplier: 2.0 },
  { id: 'energy', name: 'Energy Drink', description: '+10% multiplier', baseCost: 1000, currentCost: 1000, value: 0.10, owned: 0, category: 'multiplier', icon: '⚡', costMultiplier: 2.2 },
  { id: 'power', name: 'Power Core', description: '+25% multiplier', baseCost: 5000, currentCost: 5000, value: 0.25, owned: 0, category: 'multiplier', icon: '🔋', costMultiplier: 2.5 },
  { id: 'infinity', name: 'Infinity Stone', description: '+50% multiplier', baseCost: 25000, currentCost: 25000, value: 0.50, owned: 0, category: 'multiplier', icon: '💎', costMultiplier: 3.0 },
];

export const initialAchievements: Achievement[] = [
  { id: 'click1', name: 'First Click', description: 'Click for the first time', requirement: 1, type: 'clicks', unlocked: false, reward: 10, icon: '🎯' },
  { id: 'click10', name: 'Getting Started', description: 'Click 10 times', requirement: 10, type: 'clicks', unlocked: false, reward: 25, icon: '🚀' },
  { id: 'click100', name: 'Clicker', description: 'Click 100 times', requirement: 100, type: 'clicks', unlocked: false, reward: 100, icon: '👆' },
  { id: 'click1000', name: 'Dedicated Clicker', description: 'Click 1,000 times', requirement: 1000, type: 'clicks', unlocked: false, reward: 500, icon: '💪' },
  { id: 'click10000', name: 'Click Master', description: 'Click 10,000 times', requirement: 10000, type: 'clicks', unlocked: false, reward: 2500, icon: '👑' },
  
  { id: 'score100', name: 'Pocket Change', description: 'Earn 100 points', requirement: 100, type: 'score', unlocked: false, reward: 50, icon: '💰' },
  { id: 'score1000', name: 'Nice Score', description: 'Earn 1,000 points', requirement: 1000, type: 'score', unlocked: false, reward: 200, icon: '💵' },
  { id: 'score10000', name: 'Getting Rich', description: 'Earn 10,000 points', requirement: 10000, type: 'score', unlocked: false, reward: 1000, icon: '💎' },
  { id: 'score100000', name: 'Wealthy', description: 'Earn 100,000 points', requirement: 100000, type: 'score', unlocked: false, reward: 5000, icon: '🏆' },
  { id: 'score1m', name: 'Millionaire', description: 'Earn 1,000,000 points', requirement: 1000000, type: 'score', unlocked: false, reward: 25000, icon: '🌟' },
  
  { id: 'upgrade1', name: 'First Upgrade', description: 'Buy your first upgrade', requirement: 1, type: 'upgrades', unlocked: false, reward: 25, icon: '🔧' },
  { id: 'upgrade5', name: 'Upgrader', description: 'Buy 5 upgrades', requirement: 5, type: 'upgrades', unlocked: false, reward: 100, icon: '🔨' },
  { id: 'upgrade20', name: 'Upgrade Master', description: 'Buy 20 upgrades', requirement: 20, type: 'upgrades', unlocked: false, reward: 500, icon: '⚙️' },
  { id: 'upgrade50', name: 'Upgrade King', description: 'Buy 50 upgrades', requirement: 50, type: 'upgrades', unlocked: false, reward: 2500, icon: '👑' },
];

export const initialPowerUps: PowerUp[] = [
  { id: 'frenzy', name: 'Click Frenzy', description: '3x click power for 10s', duration: 10, multiplier: 3, cost: 500, active: false, timeRemaining: 0, icon: '🔥' },
  { id: 'golden', name: 'Golden Hour', description: '2x all income for 30s', duration: 30, multiplier: 2, cost: 1000, active: false, timeRemaining: 0, icon: '✨' },
  { id: 'storm', name: 'Click Storm', description: '5x click power for 5s', duration: 5, multiplier: 5, cost: 2000, active: false, timeRemaining: 0, icon: '⛈️' },
  { id: 'timeWarp', name: 'Time Warp', description: '10x passive income for 15s', duration: 15, multiplier: 10, cost: 5000, active: false, timeRemaining: 0, icon: '🌀' },
];

export const formatNumber = (num: number): string => {
  if (num >= 1e15) return (num / 1e15).toFixed(2) + 'Q';
  if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
  if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
  return Math.floor(num).toString();
};

export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};