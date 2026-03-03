'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface IconHover3DProps {
  heading?: string;
  text?: string;
  className?: string;
  width?: number;
  height?: number;
}

const cubeSize = 40;
const sliceGap = 6;

const CubeFace: React.FC<{
  transform: string;
  size: number;
  borderColor: string;
}> = ({ transform, size, borderColor }) => (
  <div
    className="absolute border"
    style={{
      width: size,
      height: size,
      transform,
      backfaceVisibility: 'hidden',
      borderColor,
      background: 'rgba(10,10,10,0.9)',
      transition: 'border-color 0.4s ease',
    }}
  />
);

const CubeSlice: React.FC<{
  offset: number;
  size: number;
  isHovered: boolean;
}> = ({ offset, size, isHovered }) => {
  const borderColor = isHovered ? '#fff' : 'rgba(255,255,255,0.15)';
  const half = size / 2;

  return (
    <div
      className="absolute"
      style={{
        width: size,
        height: size,
        transformStyle: 'preserve-3d',
        transform: `translateY(${offset}px)`,
      }}
    >
      {/* Front */}
      <CubeFace transform={`translateZ(${half}px)`} size={size} borderColor={borderColor} />
      {/* Back */}
      <CubeFace transform={`translateZ(-${half}px) rotateY(180deg)`} size={size} borderColor={borderColor} />
      {/* Right */}
      <CubeFace transform={`translateX(${half}px) rotateY(90deg)`} size={size} borderColor={borderColor} />
      {/* Left */}
      <CubeFace transform={`translateX(-${half}px) rotateY(-90deg)`} size={size} borderColor={borderColor} />
      {/* Top */}
      <CubeFace transform={`translateY(-${half}px) rotateX(90deg)`} size={size} borderColor={borderColor} />
      {/* Bottom */}
      <CubeFace transform={`translateY(${half}px) rotateX(-90deg)`} size={size} borderColor={borderColor} />
    </div>
  );
};

export const IconHover3D: React.FC<IconHover3DProps> = ({
  heading = 'Library',
  text = 'A comprehensive collection of digital books and resources for learning and research.',
  className = '',
  width = 600,
  height = 150,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sliceSize = cubeSize * 0.8;
  const totalCubeHeight = sliceSize * 3 + sliceGap * 2;

  return (
    <motion.div
      className={`relative flex items-center gap-8 select-none cursor-pointer ${className}`}
      style={{ width, minHeight: height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={false}
    >
      {/* 3D Cube Icon */}
      <div
        className="relative flex-shrink-0"
        style={{
          width: cubeSize * 1.6,
          height: totalCubeHeight + 20,
          perspective: 400,
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            transformStyle: 'preserve-3d',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          animate={{
            rotateX: isHovered ? -28 : -15,
            rotateY: isHovered ? -43 : -25,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        >
          <CubeSlice offset={-(sliceSize + sliceGap)} size={sliceSize} isHovered={isHovered} />
          <CubeSlice offset={0} size={sliceSize} isHovered={isHovered} />
          <CubeSlice offset={sliceSize + sliceGap} size={sliceSize} isHovered={isHovered} />
        </motion.div>

        {/* Corner dots */}
        {[
          { top: 0, left: 0 },
          { top: 0, right: 0 },
          { bottom: 0, left: 0 },
          { bottom: 0, right: 0 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={pos}
            animate={{ scale: isHovered ? 2.2 : 1, opacity: isHovered ? 1 : 0.3 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
          />
        ))}
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        {/* Heading with fill effect */}
        <div className="relative overflow-hidden inline-block">
          <span
            className="text-2xl sm:text-3xl font-bold uppercase tracking-wider"
            style={{ fontFamily: "'Syne', sans-serif", color: '#fff' }}
          >
            {heading}
          </span>

          {/* White fill overlay */}
          <motion.div
            className="absolute inset-0 flex items-center"
            animate={{ width: isHovered ? '100%' : '0%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden', background: '#fff' }}
          >
            <span
              className="text-2xl sm:text-3xl font-bold uppercase tracking-wider whitespace-nowrap"
              style={{ fontFamily: "'Syne', sans-serif", color: '#000' }}
            >
              {heading}
            </span>
          </motion.div>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'DM Sans', sans-serif" }}
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
};
