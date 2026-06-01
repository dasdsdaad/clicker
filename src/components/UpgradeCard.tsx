import { motion } from 'framer-motion';
import { Upgrade } from '../types/game';
import { formatNumber } from '../utils/gameData';

interface UpgradeCardProps {
  upgrade: Upgrade;
  onBuy: () => void;
  canAfford: boolean;
}

export function UpgradeCard({ upgrade, onBuy, canAfford }: UpgradeCardProps) {
  const categoryColors = {
    click: 'from-emerald-500 to-teal-600',
    passive: 'from-blue-500 to-indigo-600',
    multiplier: 'from-purple-500 to-pink-600'
  };

  return (
    <motion.button
      onClick={onBuy}
      disabled={!canAfford}
      className={`
        w-full p-4 rounded-xl text-left transition-all
        ${canAfford 
          ? 'bg-white hover:shadow-lg cursor-pointer border-2 border-gray-200 hover:border-gray-300' 
          : 'bg-gray-100 opacity-50 cursor-not-allowed border-2 border-gray-200'}
      `}
      whileHover={canAfford ? { scale: 1.02, y: -2 } : {}}
      whileTap={canAfford ? { scale: 0.98 } : {}}
    >
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${categoryColors[upgrade.category]} flex items-center justify-center text-2xl`}>
          {upgrade.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-800">{upgrade.name}</h3>
            <span className="text-sm bg-gray-200 px-2 py-1 rounded-full text-gray-600">
              x{upgrade.owned}
            </span>
          </div>
          <p className="text-sm text-gray-500">{upgrade.description}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-sm font-bold ${canAfford ? 'text-emerald-600' : 'text-red-500'}`}>
              💰 {formatNumber(upgrade.currentCost)}
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}