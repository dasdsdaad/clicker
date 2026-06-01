import { GameState } from '../types/game';
import { formatNumber, formatTime } from '../utils/gameData';

interface StatsPanelProps {
  stats: GameState;
  totalUpgrades: number;
  unlockedAchievements: number;
  totalAchievements: number;
}

export function StatsPanel({ stats, totalUpgrades, unlockedAchievements, totalAchievements }: StatsPanelProps) {
  const playTime = Math.floor((Date.now() - stats.startTime) / 1000);

  return (
    <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
      <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
        📊 Statistics
      </h3>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-slate-50 p-2 rounded-lg">
          <div className="text-gray-500">Total Clicks</div>
          <div className="font-bold text-slate-800">{formatNumber(stats.totalClicks)}</div>
        </div>
        <div className="bg-slate-50 p-2 rounded-lg">
          <div className="text-gray-500">Total Earned</div>
          <div className="font-bold text-emerald-600">{formatNumber(stats.totalScore)}</div>
        </div>
        <div className="bg-slate-50 p-2 rounded-lg">
          <div className="text-gray-500">Click Power</div>
          <div className="font-bold text-blue-600">{formatNumber(stats.pointsPerClick)}</div>
        </div>
        <div className="bg-slate-50 p-2 rounded-lg">
          <div className="text-gray-500">Passive Income</div>
          <div className="font-bold text-purple-600">{formatNumber(stats.pointsPerSecond)}/s</div>
        </div>
        <div className="bg-slate-50 p-2 rounded-lg">
          <div className="text-gray-500">Upgrades</div>
          <div className="font-bold text-orange-600">{totalUpgrades}</div>
        </div>
        <div className="bg-slate-50 p-2 rounded-lg">
          <div className="text-gray-500">Achievements</div>
          <div className="font-bold text-amber-600">{unlockedAchievements}/{totalAchievements}</div>
        </div>
        <div className="bg-slate-50 p-2 rounded-lg col-span-2">
          <div className="text-gray-500">Play Time</div>
          <div className="font-bold text-slate-800">{formatTime(playTime)}</div>
        </div>
      </div>
    </div>
  );
}