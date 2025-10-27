import { GoogleGenerativeAI } from '@google/generative-ai'
import { BusinessModelCanvas } from './database.types'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

export async function generateBusinessCanvas(
  businessIdea: string,
  industry: string
): Promise<BusinessModelCanvas> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

    const prompt = `You are a business strategy expert.
Given this business idea/description, generate a structured Business Model Canvas as valid JSON with the following fields:
key_partners, key_activities, value_propositions, customer_relationships, customer_segments, key_resources, channels, cost_structure, revenue_streams.

Business Idea: ${businessIdea}
Industry: ${industry}

Use clear, professional language for each section.
Each field should be an array of 3-5 concise bullet points.
Return ONLY valid JSON data with no markdown, no code blocks, and no extra text.

Example format:
{
  "key_partners": ["Partner 1", "Partner 2", "Partner 3"],
  "key_activities": ["Activity 1", "Activity 2", "Activity 3"],
  "value_propositions": ["Value 1", "Value 2", "Value 3"],
  "customer_relationships": ["Relationship 1", "Relationship 2"],
  "customer_segments": ["Segment 1", "Segment 2"],
  "key_resources": ["Resource 1", "Resource 2", "Resource 3"],
  "channels": ["Channel 1", "Channel 2", "Channel 3"],
  "cost_structure": ["Cost 1", "Cost 2", "Cost 3"],
  "revenue_streams": ["Revenue 1", "Revenue 2"]
}`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    // Clean up the response - remove markdown code blocks if present
    let cleanedText = text.trim()
    if (cleanedText.startsWith('```json')) {
      cleanedText = cleanedText.replace(/```json\n?/, '').replace(/\n?```$/, '')
    } else if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.replace(/```\n?/, '').replace(/\n?```$/, '')
    }

    const canvas: BusinessModelCanvas = JSON.parse(cleanedText)

    // Validate the structure
    const requiredFields = [
      'key_partners',
      'key_activities',
      'value_propositions',
      'customer_relationships',
      'customer_segments',
      'key_resources',
      'channels',
      'cost_structure',
      'revenue_streams',
    ]

    for (const field of requiredFields) {
      if (!canvas[field as keyof BusinessModelCanvas]) {
        throw new Error(`Missing required field: ${field}`)
      }
    }

    return canvas
  } catch (error: any) {
    console.error('Gemini API Error:', error)
    throw new Error(`Failed to generate business canvas: ${error.message}`)
  }
}
