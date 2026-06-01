import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatNumber } from '../utils/gameData';

interface ClickButtonProps {
  onClick: () => void;
  pointsPerClick: number;
  multiplier: number;
  criticalChance: number;
  criticalMultiplier: number;
  isPoweredUp: boolean;
}

interface ClickEffect {
  id: number;
  x: number;
  y: number;
  value: number;
  isCritical: boolean;
}

export function ClickButton({ 
  onClick, 
  pointsPerClick, 
  multiplier, 
  criticalChance, 
  criticalMultiplier,
  isPoweredUp 
}: ClickButtonProps) {
  const [effects, setEffects] = useState<ClickEffect[]>([]);
  const [isClicking, setIsClicking] = useState(false);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const isCritical = Math.random() < criticalChance;
    const baseValue = pointsPerClick * multiplier;
    const value = isCritical ? baseValue * criticalMultiplier : baseValue;
    
    onClick();
    
    const newEffect: ClickEffect = {
      id: Date.now(),
      x,
      y,
      value: Math.floor(value),
      isCritical
    };
    
    setEffects(prev => [...prev, newEffect]);
    setTimeout(() => {
      setEffects(prev => prev.filter(e => e.id !== newEffect.id));
    }, 1000);
    
    setIsClicking(true);
    setTimeout(() => setIsClicking(false), 100);
  }, [onClick, pointsPerClick, multiplier, criticalChance, criticalMultiplier]);

  return (
    <div className="relative">
      <motion.button
        onClick={handleClick}
        className={`
          relative w-48 h-48 rounded-full text-white font-bold text-xl
          shadow-2xl transition-all duration-100
          ${isPoweredUp 
            ? 'bg-gradient-to-br from-amber-400 via-orange-500 to-red-500' 
            : 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'}
          ${isClicking ? 'scale-95' : 'scale-100'}
          hover:shadow-pink-500/50 hover:shadow-2xl
          active:scale-90
          border-4 border-white/30
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={isPoweredUp ? {
          boxShadow: [
            '0 0 20px rgba(251, 191, 36, 0.5)',
            '0 0 40px rgba(251, 191, 36, 0.8)',
            '0 0 20px rgba(251, 191, 36, 0.5)',
          ]
        } : {}}
        transition={isPoweredUp ? { duration: 0.5, repeat: Infinity } : {}}
      >
        <span className="text-4xl mb-2 block">👆</span>
        <span className="text-sm opacity-80">+{formatNumber(pointsPerClick * multiplier)}</span>
      </motion.button>
      
      <AnimatePresence>
        {effects.map(effect => (
          <motion.div
            key={effect.id}
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={{ opacity: 0, y: -80, scale: effect.isCritical ? 1.5 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`absolute pointer-events-none font-bold text-xl
              ${effect.isCritical ? 'text-amber-400 text-3xl' : 'text-white'}`}
            style={{ left: effect.x - 20, top: effect.y - 20 }}
          >
            +{formatNumber(effect.value)}
            {effect.isCritical && <span className="ml-1">⚡</span>}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}