import React from 'react';

// Simple SVG logo for TaleTone
export default function TaleToneLogo({ size = 54 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="27" cy="27" r="27" fill="#a084e8" />
      <path d="M18 36C18 36 18 18 27 18C36 18 36 36 36 36" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"/>
      <ellipse cx="27" cy="27" rx="6" ry="8" fill="#fff" fillOpacity="0.7"/>
      <circle cx="27" cy="27" r="3" fill="#7c3aed" />
    </svg>
  );
}
