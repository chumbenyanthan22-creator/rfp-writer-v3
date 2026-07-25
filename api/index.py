from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='.')
CORS(app)

@app.route('/api/proposals/generate', methods=['POST'])
def generate_proposal():
    data = request.json
    rfp_content = data.get('rfpContent', '')
    language = data.get('language', 'English')
    industry = data.get('industry', 'General')

    proposal = f"""
📄 PROPOSAL GENERATED

Industry: {industry}
Language: {language}

Based on your RFP:
{rfp_content[:300] + '...' if rfp_content else 'No RFP content provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━

EXECUTIVE SUMMARY:
We are pleased to submit our proposal. Our team brings extensive expertise in {industry} with a proven track record of success.

TECHNICAL APPROACH:
Our methodology combines industry best practices with innovative solutions to deliver exceptional results.

PRICING:
Competitive pricing structure optimized for value delivery.

━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Ready for submission!
"""

    return jsonify({
        'success': True,
        'proposal': {
            'id': int(os.times().elapsed * 1000),
            'content': proposal,
            'language': language,
            'industry': industry
        },
        'creditsRemaining': 4
    })

# Serve HTML files
@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/app')
def serve_app():
    return send_from_directory('app', 'index.html')

# For Vercel serverless
app = app
