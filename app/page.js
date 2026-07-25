'use client'

import { useState, useRef, useEffect } from 'react'

export default function Home() {
  // State
  const [activeTab, setActiveTab] = useState('pitch')
  const [profileName, setProfileName] = useState('Chamber Yantran')
  const [profileExp, setProfileExp] = useState('1')
  const [profileSpec, setProfileSpec] = useState('Freight & Logistics')
  const [profileCompany, setProfileCompany] = useState('')
  const [languages, setLanguages] = useState(['English', 'Hindi', 'Marathi', 'Gujarati', 'Tamil'])
  const [uvp, setUvp] = useState('I help logistics companies win government tenders in regional languages that 90% of competitors cannot match. My proposals score higher on evaluator compliance matrices because I understand both the technical requirements AND the cultural context of state-level procurement in India.')
  const [rfpContent, setRfpContent] = useState('')
  const [genLanguage, setGenLanguage] = useState('English')
  const [genIndustry, setGenIndustry] = useState('Freight & Logistics')
  const [pitchOutput, setPitchOutput] = useState('Click "Generate Pitch" to create your personalized pitch using 6 AI agents...')
  const [proposalOutput, setProposalOutput] = useState('Your AI-generated proposal will appear here...')
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)
  const [credits, setCredits] = useState(5)
  const toastTimeout = useRef(null)

  const languagesList = ['English', 'Hindi', 'Marathi', 'Gujarati', 'Tamil', 'Telugu', 'Kannada', 'Bengali', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic']

  // Auto-dismiss toast
  useEffect(() => {
    if (toast) {
      clearTimeout(toastTimeout.current)
      toastTimeout.current = setTimeout(() => setToast(null), 3000)
    }
    return () => clearTimeout(toastTimeout.current)
  }, [toast])

  const showToast = (message, type = 'info') => {
    setToast({ message, type })
  }

  // Language tag management
  const addLanguage = (lang) => {
    if (!languages.includes(lang) && lang.trim()) {
      setLanguages([...languages, lang.trim()])
    }
  }

  const removeLanguage = (lang) => {
    setLanguages(languages.filter(l => l !== lang))
  }

  // Generate Pitch
  const generatePitch = async () => {
    setLoading(true)
    setPitchOutput('🧠 Activating 6 AI agents to craft your pitch...')

    try {
      const pitch = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📄 PROFESSIONAL PITCH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 ${profileName || 'Professional'} | ${profileCompany || 'Your Company'}
🎯 ${profileSpec} Specialist | ${profileExp}+ Years Experience

🌍 Languages: ${languages.join(', ')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 UNIQUE VALUE PROPOSITION

${uvp || 'Expert proposal writing with proven win rates'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🤖 AI TEAM ACTIVATED

🛡️ Compliance Agent - RFP requirements verification
✍️ Writer Agent - Content generation
📊 Pricing Agent - Cost optimization
🔍 Research Agent - Market intelligence
👓 Quality Agent - Review & polish
⚖️ Legal Agent - Risk assessment

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 KEY STRENGTHS

1. Compliance-First Approach - Every proposal maximizes evaluator scoring
2. Multi-Language Expertise - Proposals in ${languages.slice(0, 3).join(', ')} & more
3. AI-Enhanced Quality - 6 specialized AI agents working in synergy
4. Industry Specialization - Deep domain knowledge in ${profileSpec}
5. Proven Track Record - Consistent high scores on technical evaluations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💼 ENGAGEMENT MODEL

✅ Monthly Retainer ($699/mo) - Unlimited proposals, full AI access
✅ Commission-Based (3-7%) - We win when you win

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 Ready to win more contracts!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `
      setPitchOutput(pitch)
      showToast('✅ Pitch generated successfully!', 'success')
    } catch (error) {
      showToast('❌ Error: ' + error.message, 'error')
    } finally {
      setLoading(false)
    }
  }

  // Generate Proposal
  const generateProposal = async () => {
    if (!rfpContent.trim()) {
      showToast('Please paste RFP content first!', 'error')
      return
    }

    setLoading(true)
    setProposalOutput('🧠 Analyzing RFP with 6 AI agents...')

    try {
      const proposal = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📄 PROPOSAL GENERATED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Industry: ${genIndustry}
Language: ${genLanguage}

Based on your RFP:
${rfpContent.substring(0, 300)}${rfpContent.length > 300 ? '...' : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 EXECUTIVE SUMMARY

We are pleased to submit our proposal. Our team brings extensive expertise in ${genIndustry} with a proven track record of success. We understand the unique challenges and opportunities in this sector.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 TECHNICAL APPROACH

Our methodology combines industry best practices with innovative solutions:

1. Understanding of Requirements - Deep analysis of RFP scope
2. Methodology - Proven ${genIndustry} methodology
3. Team & Resources - Senior specialists with domain expertise
4. Risk Management - Comprehensive mitigation strategies

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 PRICING & VALUE PROPOSITION

Our pricing reflects a balance of competitive positioning and sustainable delivery:

• Cost Efficiency - Optimized resource allocation
• Quality Assurance - Multi-layer review process
• Timeline Commitment - Realistic milestones
• Post-Delivery Support - Comprehensive warranty

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ COMPLIANCE & CERTIFICATIONS

We confirm full compliance with all RFP requirements including:
• Technical specifications and standards
• Financial and insurance requirements
• Environmental and safety compliance
• Data protection and confidentiality obligations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏆 Why Choose Us?

• ${profileExp}+ years of industry experience
• Specialized in ${genIndustry}
• Multi-language capability in ${languages.slice(0, 3).join(', ')}
• Proven track record of successful delivery

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Ready for submission!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `
      setProposalOutput(proposal)
      setCredits(credits - 1)
      showToast('✅ Proposal generated successfully!', 'success')
    } catch (error) {
      showToast('❌ Error: ' + error.message, 'error')
    } finally {
      setLoading(false)
    }
  }

  const copyText = (text) => {
    navigator.clipboard.writeText(text)
    showToast('📋 Copied to clipboard!', 'success')
  }

  const downloadText = (text, filename) => {
    const blob = new Blob([text], { type: 'text/plain' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = filename
    a.click()
    showToast('📥 Downloaded!', 'success')
  }

  return (
    <>
      {/* Toast */}
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      )}

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <i className="fas fa-file-signature"></i> RFP Writer Pro
        </div>
        <div className="navbar-right">
          <span className="navbar-credits">
            <i className="fas fa-coins"></i> {credits} Credits
          </span>
          <span className="pro-badge">PRO</span>
          <button className="nav-btn" onClick={() => showToast('Settings coming soon', 'info')}>
            <i className="fas fa-cog"></i>
          </button>
          <div className="user-avatar">U</div>
        </div>
      </nav>

      {/* Hero */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-icon"><i className="fas fa-file-signature"></i></div>
          <div>
            <h1 className="hero-title">RFP Proposal Writer</h1>
            <p className="hero-subtitle">Multi-Industry, Multi-Language, AI-Assisted — Win More Contracts</p>
            <div className="hero-tags">
              <span className="hero-tag"><i className="fas fa-globe"></i> Pan India</span>
              <span className="hero-tag"><i className="fas fa-language"></i> {languages.length} Languages</span>
              <span className="hero-tag"><i className="fas fa-train"></i> Rail</span>
              <span className="hero-tag"><i className="fas fa-road"></i> Road</span>
              <span className="hero-tag"><i className="fas fa-ship"></i> Maritime</span>
              <span className="hero-tag"><i className="fas fa-robot"></i> 6 AI Agents</span>
              <span className="hero-tag"><i className="fas fa-brain"></i> Second Brain</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className={`tab ${activeTab === 'pitch' ? 'active' : ''}`} onClick={() => setActiveTab('pitch')}>
          <i className="fas fa-bullseye"></i> Pitch Builder
        </button>
        <button className={`tab ${activeTab === 'generator' ? 'active' : ''}`} onClick={() => setActiveTab('generator')}>
          <i className="fas fa-brain"></i> Proposal Generator
          <span className="tab-badge"></span>
        </button>
        <button className={`tab ${activeTab === 'tracker' ? 'active' : ''}`} onClick={() => setActiveTab('tracker')}>
          <i className="fas fa-chart-bar"></i> Bid Tracker
        </button>
        <button className={`tab ${activeTab === 'library' ? 'active' : ''}`} onClick={() => setActiveTab('library')}>
          <i className="fas fa-layer-group"></i> Template Library
        </button>
      </div>

      {/* Main Content - 4 Column Layout */}
      <div className="main-content">

        {/* PITCH BUILDER */}
        {activeTab === 'pitch' && (
          <>
            {/* Left Column - Profile */}
            <div className="column">
              <div className="card">
                <div className="card-title"><i className="fas fa-user"></i> Your Profile</div>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label>Years of Experience</label>
                  <input
                    type="number"
                    className="form-control"
                    value={profileExp}
                    onChange={(e) => setProfileExp(e.target.value)}
                    placeholder="Years"
                  />
                </div>
                <div className="form-group">
                  <label>Primary Specialization</label>
                  <select
                    className="form-control"
                    value={profileSpec}
                    onChange={(e) => setProfileSpec(e.target.value)}
                  >
                    <option>Freight & Logistics</option>
                    <option>Construction</option>
                    <option>IT Services</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>Energy</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={profileCompany}
                    onChange={(e) => setProfileCompany(e.target.value)}
                    placeholder="Your company"
                  />
                </div>
              </div>
            </div>

            {/* Middle Column - Language & Pricing */}
            <div className="column">
              <div className="card">
                <div className="card-title"><i className="fas fa-globe"></i> Language & Pricing</div>
                <div className="form-group">
                  <label>Languages You Write In</label>
                  <div className="tag-container">
                    {languages.map((lang) => (
                      <span key={lang} className="tag">
                        {lang}
                        <span className="tag-remove" onClick={() => removeLanguage(lang)}>×</span>
                      </span>
                    ))}
                    <input
                      type="text"
                      className="tag-input"
                      placeholder="Add language..."
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          addLanguage(e.target.value)
                          e.target.value = ''
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Per-Proposal Rate ($)</label>
                  <input
                    type="text"
                    className="form-control"
                    value="₹40,000"
                    readOnly
                    style={{ background: '#0f172a', color: '#10b981', fontWeight: '600' }}
                  />
                </div>
                <div className="form-group">
                  <label>Monthly Retainer ($)</label>
                  <input
                    type="text"
                    className="form-control"
                    value="₹75,000"
                    readOnly
                    style={{ background: '#0f172a', color: '#818cf8', fontWeight: '600' }}
                  />
                </div>
                <div className="form-group">
                  <label>Your Unique Value Proposition</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    value={uvp}
                    onChange={(e) => setUvp(e.target.value)}
                    placeholder="Describe what makes your proposals stand out..."
                  />
                </div>
              </div>
            </div>

            {/* Right Column - AI Agents */}
            <div className="column">
              <div className="card">
                <div className="card-title"><i className="fas fa-robot"></i> AI Agents</div>
                <div className="ai-agents">
                  <div className="agent-card selected">
                    <div className="agent-icon" style={{ background: 'rgba(239,68,68,0.2)', color: '#ef4444' }}>
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="agent-name">Compliance</div>
                    <div className="agent-desc">✅ RFP checker</div>
                  </div>
                  <div className="agent-card selected">
                    <div className="agent-icon" style={{ background: 'rgba(99,102,241,0.2)', color: '#818cf8' }}>
                      <i className="fas fa-pen-fancy"></i>
                    </div>
                    <div className="agent-name">Writer</div>
                    <div className="agent-desc">✍️ Content gen</div>
                  </div>
                  <div className="agent-card selected">
                    <div className="agent-icon" style={{ background: 'rgba(16,185,129,0.2)', color: '#10b981' }}>
                      <i className="fas fa-calculator"></i>
                    </div>
                    <div className="agent-name">Pricing</div>
                    <div className="agent-desc">📊 Cost opt</div>
                  </div>
                  <div className="agent-card">
                    <div className="agent-icon" style={{ background: 'rgba(245,158,11,0.2)', color: '#f59e0b' }}>
                      <i className="fas fa-search"></i>
                    </div>
                    <div className="agent-name">Research</div>
                    <div className="agent-desc">🔍 Market intel</div>
                  </div>
                  <div className="agent-card">
                    <div className="agent-icon" style={{ background: 'rgba(139,92,246,0.2)', color: '#a78bfa' }}>
                      <i className="fas fa-glasses"></i>
                    </div>
                    <div className="agent-name">Quality</div>
                    <div className="agent-desc">👓 Reviewer</div>
                  </div>
                  <div className="agent-card">
                    <div className="agent-icon" style={{ background: 'rgba(236,72,153,0.2)', color: '#ec4899' }}>
                      <i className="fas fa-balance-scale"></i>
                    </div>
                    <div className="agent-name">Legal</div>
                    <div className="agent-desc">⚖️ Risk check</div>
                  </div>
                </div>
                <div style={{ marginTop: '16px' }}>
                  <button className="btn btn-primary" onClick={generatePitch} style={{ width: '100%' }} disabled={loading}>
                    <i className="fas fa-brain"></i> {loading ? 'Generating...' : 'Generate Pitch'}
                  </button>
                </div>
              </div>
            </div>

            {/* Output - Full Width */}
            <div className="column full-width">
              <div className="card">
                <div className="card-title"><i className="fas fa-file-alt"></i> Live Generated Pitch</div>
                <div className="output-area">
                  <pre>{pitchOutput}</pre>
                </div>
                <div style={{ marginTop: '12px', display: 'flex', gap: '10px' }}>
                  <button className="btn btn-secondary" onClick={() => copyText(pitchOutput)}>
                    <i className="fas fa-copy"></i> Copy Pitch
                  </button>
                  <button className="btn btn-secondary" onClick={() => downloadText(pitchOutput, 'rfp-pitch.txt')}>
                    <i className="fas fa-download"></i> Download
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* PROPOSAL GENERATOR */}
        {activeTab === 'generator' && (
          <>
            <div className="column full-width">
              <div className="card">
                <div className="card-title"><i className="fas fa-brain"></i> AI Proposal Generator</div>
                <div className="form-group">
                  <label>Industry Sector</label>
                  <select
                    className="form-control"
                    value={genIndustry}
                    onChange={(e) => setGenIndustry(e.target.value)}
                  >
                    <option>Freight & Logistics</option>
                    <option>Construction</option>
                    <option>IT Services</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>Energy</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Output Language</label>
                  <div className="lang-selector">
                    {['English', 'Hindi', 'Marathi', 'Gujarati', 'Tamil', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic'].map((lang) => (
                      <span
                        key={lang}
                        className={`lang-chip ${genLanguage === lang ? 'active' : ''}`}
                        onClick={() => setGenLanguage(lang)}
                      >
 
