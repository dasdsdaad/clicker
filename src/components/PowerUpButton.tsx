import { motion } from 'framer-motion';
import { PowerUp } from '../types/game';
import { formatNumber } from '../utils/gameData';

interface PowerUpButtonProps {
  powerUp: PowerUp;
  onActivate: () => void;
  canAfford: boolean;
}

export function PowerUpButton({ powerUp, onActivate, canAfford }: PowerUpButtonProps) {
  return (
    <motion.button
      onClick={onActivate}
      disabled={!canAfford || powerUp.active}
      className={`
        relative p-3 rounded-xl text-center transition-all
        ${powerUp.active 
          ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white' 
          : canAfford 
            ? 'bg-white hover:shadow-lg cursor-pointer border-2 border-gray-200' 
            : 'bg-gray-100 opacity-50 cursor-not-allowed border-2 border-gray-200'}
      `}
      whileHover={canAfford && !powerUp.active ? { scale: 1.05 } : {}}
      whileTap={canAfford && !powerUp.active ? { scale: 0.95 } : {}}
    >
      <div className="text-2xl mb-1">{powerUp.icon}</div>
      <div className="text-xs font-bold text-gray-800">{powerUp.name}</div>
      {powerUp.active ? (
        <div className="text-xs text-white font-bold">{powerUp.timeRemaining}s</div>
      ) : (
        <div className="text-xs text-gray-500">💰 {formatNumber(powerUp.cost)}</div>
      )}
      {powerUp.active && (
        <motion.div
          className="absolute inset-0 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)' }}
        />
      )}
    </motion.button>
  );
}