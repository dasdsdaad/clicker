import { motion, AnimatePresence } from 'framer-motion';
import { Achievement } from '../types/game';

interface AchievementToastProps {
  achievement: Achievement | null;
}

export function AchievementToast({ achievement }: AchievementToastProps) {
  return (
    <AnimatePresence>
      {achievement && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.5 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-4 rounded-xl shadow-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">{achievement.icon}</span>
            <div>
              <div className="font-bold text-lg">Achievement Unlocked!</div>
              <div className="text-sm opacity-90">{achievement.name}</div>
              <div className="text-xs opacity-75">+{achievement.reward} bonus points!</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}