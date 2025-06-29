import React, { useState } from 'react';
import './App.css';

const moods = [
  { value: 'happy', label: 'Happy' },
  { value: 'sad', label: 'Sad' },
  { value: 'angry', label: 'Angry' },
  { value: 'calm', label: 'Calm' },
];

export default function MoodLauncher() {
  const [selectedMood, setSelectedMood] = useState('happy');
  const [showBox, setShowBox] = useState(false);

  const handleOpenBox = () => setShowBox(true);
  const handleCloseBox = () => setShowBox(false);

  return (
    <div className="modern-app-container">
      <div className="modern-card" style={{ maxWidth: 400, textAlign: 'center' }}>
        <h2 className="modern-title">Open Storyteller by Mood</h2>
        <label className="modern-label" htmlFor="mood-launcher">Select Mood</label>
        <select
          id="mood-launcher"
          className="modern-select"
          value={selectedMood}
          onChange={e => setSelectedMood(e.target.value)}
        >
          {moods.map(mood => (
            <option key={mood.value} value={mood.value}>{mood.label}</option>
          ))}
        </select>
        <button className="modern-btn" onClick={handleOpenBox} style={{ marginTop: 24 }}>
          Open Storyteller
        </button>
      </div>
      {showBox && (
        <div className="modal-overlay" onClick={handleCloseBox}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseBox}>&times;</button>
            <iframe
              title="Storyteller"
              src={`/?mood=${selectedMood}`}
              style={{ width: 600, height: 600, border: 'none', borderRadius: 18, background: 'transparent' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
