from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
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
{rfp_content[:200] + '...' if rfp_content else 'No RFP content provided'}

EXECUTIVE SUMMARY:
We are pleased to submit our proposal. Our team brings extensive expertise in {industry}.

✅ Ready for submission!
"""

    return jsonify({
        'success': True,
        'proposal': {
            'content': proposal,
            'language': language,
            'industry': industry
        }
    })

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    return jsonify({'message': 'RFP Writer Pro API is running!'}), 200

# Vercel needs this
app = app
