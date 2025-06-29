import React, { useState } from 'react';
import './App.css';

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
    <div className="App">
      <h2>Emotion-Based Story Narrator</h2>

      <textarea value={story} onChange={(e) => setStory(e.target.value)} rows={6} />

      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="angry">Angry</option>
        <option value="calm">Calm</option>
      </select>

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Voice"}
      </button>

      {audioUrl && <audio controls src={audioUrl} autoPlay />}
    </div>
  );
}

export default App;
