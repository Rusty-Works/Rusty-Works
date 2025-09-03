'use client';

import { cn } from '@/lib/utils';
import { motion, type Transition } from 'framer-motion';

export type GlowEffectProps = {
  className?: string;
  style?: React.CSSProperties;
  colors?: string[];
  mode?: 'rotate' | 'pulse' | 'breathe' | 'colorShift' | 'flowHorizontal' | 'static';
  blur?: number | 'softest' | 'soft' | 'medium' | 'strong' | 'stronger' | 'strongest' | 'none';
  transition?: Transition;
  scale?: number;
  duration?: number;
};

export function GlowEffect({
  className,
  style,
  colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F'],
  mode = 'rotate',
  blur = 'medium',
  transition,
  scale = 1,
  duration = 5,
}: GlowEffectProps) {
  const baseTransition: Transition = {
    repeat: Infinity,
    duration,
    ease: [0.4, 0, 0.2, 1],
  };

  const getAnimationStyles = () => {
    const defaultGradient = `linear-gradient(to right, ${colors.join(', ')})`;
    const commonTransition = {
      ...baseTransition,
      ...(transition || {}),
    };

    switch (mode) {
      case 'rotate':
        return {
          animate: {
            background: [
              `conic-gradient(from 0deg at 50% 50%, ${colors.join(', ')})`,
              `conic-gradient(from 360deg at 50% 50%, ${colors.join(', ')})`,
            ],
            transition: commonTransition,
          },
        };

      case 'pulse':
        return {
          animate: {
            scale: [1 * scale, 1.1 * scale, 1 * scale],
            opacity: [0.5, 0.8, 0.5],
            transition: commonTransition,
          },
        };

      case 'breathe':
        return {
          animate: {
            scale: [1 * scale, 1.05 * scale, 1 * scale],
            opacity: [0.6, 0.8, 0.6],
            transition: commonTransition,
          },
        };

      case 'colorShift':
        return {
          animate: {
            background: colors.map((color, index) => {
              const nextColor = colors[(index + 1) % colors.length];
              return `linear-gradient(to right, ${color}, ${nextColor})`;
            }),
            transition: commonTransition,
          },
        };

      case 'flowHorizontal':
        return {
          animate: {
            background: colors.map((color) => {
              const nextColor = colors[(colors.indexOf(color) + 1) % colors.length];
              return `linear-gradient(to right, ${color}, ${nextColor})`;
            }),
            transition: commonTransition,
          },
        };

      case 'static':
      default:
        return {
          animate: {
            background: defaultGradient,
          },
        };
    }
  };

  const getBlurClass = (blur: GlowEffectProps['blur']) => {
    if (typeof blur === 'number') {
      return `blur-[${blur}px]`;
    }

    const presets = {
      softest: 'blur-sm',
      soft: 'blur',
      medium: 'blur-md',
      strong: 'blur-lg',
      stronger: 'blur-xl',
      strongest: 'blur-2xl',
      none: 'blur-none',
    };

    return presets[blur as keyof typeof presets];
  };

  const animationConfig = getAnimationStyles();

  return (
    <motion.div
      style={{
        ...style,
        ['--tw-scale' as string]: scale,
        scale: 'var(--tw-scale)',
        willChange: 'transform, background',
        backfaceVisibility: 'hidden',
      }}
      {...animationConfig}
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full opacity-75',
        'scale-[var(--scale)] transform-gpu',
        getBlurClass(blur),
        className
      )}
    />
  );
}
