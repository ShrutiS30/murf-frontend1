import React, { useState } from 'react';

import './App.css';
import TaleToneLogo from './TaleToneLogo';


function App() {
  const [story, setStory] = useState("Once upon a time...");
  const [mood, setMood] = useState("happy");
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:5000/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ story, mood })
    });
    const data = await res.json();
    setAudioUrl(data.audioUrl);
    setLoading(false);
  };

  return (
    <div className="modern-app-container" style={{ marginTop: '0.3rem', paddingTop: '0.2rem', fontFamily: 'Ubuntu, Inter, Segoe UI, Arial, Helvetica, sans-serif' }}>
      {/* Header, tagline, and description at the top left, story box below */}
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 0,
        padding: '2.2rem 1.5rem 2.2rem 2.2rem',
        gap: '0.3rem',
        background: 'transparent',
        maxWidth: '100vw',
        boxSizing: 'border-box',
        position: 'relative',
        top: 0,
        left: 0,
        zIndex: 100,
        textShadow: '0 1px 6px #22223b, 0 1px 12px #22223b',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
          <TaleToneLogo size={44} />
        <h1 className="taletone-heading" style={{ fontSize: '2.1rem', margin: 0, color: '#7c3aed', fontWeight: 800, letterSpacing: '0.01em', textShadow: 'inherit' }}>TaleTone</h1>
        </div>
        <div style={{ color: '#6366f1', fontSize: '1.13rem', fontWeight: 600, marginLeft: '0.2rem', letterSpacing: '0.01em', textShadow: 'inherit' }}>
          The Moodful Storytelling Experience
        </div>
        <div style={{ color: '#fff', fontSize: '1.08rem', fontWeight: 500, marginTop: '0.3rem', lineHeight: 1.7, marginLeft: '0.2rem', textShadow: 'inherit' }}>
          Welcome to TaleTone, where your stories come alive with emotion! Select a mood, write your tale, and let our <span style={{ color: '#a855f7', fontWeight: 700 }}>AI narrator</span> bring your words to life with expressive voice. Perfect for bedtime stories, creative writing, or just a little fun.
        </div>
      </div>
      <div style={{ width: '100%', height: '1.2rem' }} />
      <div className="modern-card" style={{ margin: '0 auto', marginTop: 0, background: '#23223a' }}>
        <h2 className="modern-title" style={{ color: '#7c3aed' }}>Tell Your Story</h2>
        <label className="modern-label" htmlFor="story">Your Story</label>
        <textarea
          id="story"
          className="modern-textarea"
          style={{ background: '#2d2756', color: '#fff', fontWeight: 500, fontSize: '1.08rem', fontFamily: 'Ubuntu, Inter, Segoe UI, Arial, Helvetica, sans-serif', transition: 'background 0.3s', caretColor: '#a855f7', border: '2px solid #7c3aed', borderRadius: '0.5rem' }}
          value={story}
          onChange={(e) => setStory(e.target.value)}
          rows={6}
          placeholder="Once upon a time..."
          onFocus={e => {
            if (e.target.value === "Once upon a time...") {
              setStory("");
            }
          }}
        />
        <style>{`
          .modern-textarea::placeholder {
            color: #a855f7;
            opacity: 1;
            font-family: Ubuntu, Inter, Segoe UI, Arial, Helvetica, sans-serif;
            font-size: 1.08rem;
            font-weight: 500;
            letter-spacing: 0.04em;
            animation: typing 2.5s steps(20, end) 1;
            white-space: nowrap;
            overflow: hidden;
            display: block;
          }
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
        `}</style>
        <label className="modern-label" htmlFor="mood">Select Mood</label>
        <select
          id="mood"
          className="modern-select"
          style={{ background: '#2d2756', color: '#fff', fontWeight: 500, fontSize: '1.08rem', fontFamily: 'Ubuntu, Inter, Segoe UI, Arial, Helvetica, sans-serif', border: '2px solid #7c3aed', borderRadius: '0.5rem', padding: '0.5rem 0.8rem', marginTop: '0.3rem', marginBottom: '0.7rem', boxShadow: '0 2px 8px #1a1833' }}
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        >
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="angry">Angry</option>
          <option value="calm">Calm</option>
        </select>
        <button
          className="modern-btn"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? (
            <span className="modern-loader"></span>
          ) : (
            "Generate Voice"
          )}
        </button>
        {audioUrl && (
          <div className="modern-audio-container">
            <audio controls src={audioUrl} autoPlay className="modern-audio" />
          </div>
        )}
      </div>
      <footer className="modern-footer">&copy; {new Date().getFullYear()} Storyteller</footer>
    </div>
  );
}

export default App;
