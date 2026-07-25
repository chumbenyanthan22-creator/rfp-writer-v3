import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { rfpContent, language, industry } = await request.json()

    if (!rfpContent) {
      return NextResponse.json(
        { success: false, message: 'RFP content is required' },
        { status: 400 }
      )
    }

    const proposal = `
📄 PROPOSAL GENERATED

Industry: ${industry || 'General'}
Language: ${language || 'English'}

Based on your RFP:
${rfpContent.substring(0, 300)}${rfpContent.length > 300 ? '...' : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━

EXECUTIVE SUMMARY:
We are pleased to submit our proposal. Our team brings extensive expertise in ${industry || 'this industry'} with a proven track record of success.

TECHNICAL APPROACH:
Our methodology combines industry best practices with innovative solutions.

PRICING:
Competitive pricing structure optimized for value delivery.

━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Ready for submission!
    `

    return NextResponse.json({
      success: true,
      proposal: {
        id: Date.now(),
        content: proposal,
        language: language || 'English',
        industry: industry || 'General',
        created_at: new Date().toISOString()
      },
      creditsRemaining: 4
    })

  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    )
  }
}
