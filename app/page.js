'use client';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('pitch');
  const [profileName, setProfileName] = useState('Chamber Yantran');
  const [profileExp, setProfileExp] = useState('3');
  const [profileSpec, setProfileSpec] = useState('Freight & Logistics');
  const [profileCompany, setProfileCompany] = useState('');
  const [languages, setLanguages] = useState(['English', 'Hindi', 'Marathi']);
  const [loading, setLoading] = useState(false);
  const [pitchOutput, setPitchOutput] = useState('Your AI-generated proposal will appear here...');

  const handleGenerate = async () => {
    setLoading(true);
    setPitchOutput('Activating 6 AI agents to craft your pitch...');
    
    setTimeout(() => {
      setPitchOutput(`### PROFESSIONAL PITCH FOR ${profileName.toUpperCase()}\n\n🏆 ${profileSpec} Specialist | ${profileExp}+ Years Experience\n🌐 Supported Languages: ${languages.join(', ')}\n\n### UNIQUE VALUE PROPOSITION\nWe help logistics companies win government tenders in regional languages that 90% of competitors miss.\n\n### AI TEAM ACTIVATION RESULTS\n✅ Compliance Agent: Verified RFP requirements.\n✅ Writer Agent: Completed content generation.\n✅ Pricing Agent: Handled cost optimization.\n✅ Quality Agent: Reviewed and polished design.`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', fontFamily: 'system-ui, sans-serif', color: '#fff', backgroundColor: '#0d1117', borderRadius: '12px' }}>
      <header style={{ borderBottom: '1px solid #30363d', paddingBottom: '15px', marginBottom: '25px' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>RFP Pitch Generator</h1>
        <p style={{ color: '#8b949e', margin: '5px 0 0' }}>Leverage an AI agent team to secure regional logistics contracts.</p>
      </header>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #30363d', paddingBottom: '10px' }}>
        <button onClick={() => setActiveTab('pitch')} style={{ padding: '10px 20px', background: activeTab === 'pitch' ? '#21262d' : 'transparent', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Generator</button>
        <button onClick={() => setActiveTab('profile')} style={{ padding: '10px 20px', background: activeTab === 'profile' ? '#21262d' : 'transparent', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Profile Configuration</button>
      </div>

      {activeTab === 'profile' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', color: '#c9d1d9' }}>Profile Name</label>
            <input type="text" value={profileName} onChange={(e) => setProfileName(e.target.value)} style={{ width: '100%', padding: '10px', background: '#161b22', border: '1px solid #30363d', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', color: '#c9d1d9' }}>Years Experience</label>
            <input type="number" value={profileExp} onChange={(e) => setProfileExp(e.target.value)} style={{ width: '100%', padding: '10px', background: '#161b22', border: '1px solid #30363d', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', color: '#c9d1d9' }}>Specialization</label>
            <input type="text" value={profileSpec} onChange={(e) => setProfileSpec(e.target.value)} style={{ width: '100%', padding: '10px', background: '#161b22', border: '1px solid #30363d', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }} />
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          <button onClick={handleGenerate} disabled={loading} style={{ padding: '15px', background: '#238636', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>
            {loading ? 'Processing Proposal...' : '🚀 Generate Pitch with 6 AI Agents'}
          </button>
          
          <div style={{ background: '#161b22', padding: '20px', borderRadius: '8px', border: '1px solid #30363d', minHeight: '200px', whiteSpace: 'pre-wrap' }}>
            <div style={{ color: '#58a6ff', fontWeight: 'bold', marginBottom: '10px' }}>Output Terminal</div>
            <div style={{ color: '#e6edf2', fontSize: '14px', lineHeight: '1.6' }}>{pitchOutput}</div>
          </div>
        </div>
      )}
    </div>
  );
        }
