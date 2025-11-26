import { NextResponse } from "next/server"

const API_KEY = process.env.HYPER3D_API_KEY
const BASE_URL = process.env.HYPER3D_BASE_URL || "https://hyperhuman.deemos.com/api/v2"

if (!API_KEY) {
  throw new Error("HYPER3D_API_KEY environment variable is required")
}

export async function POST(request: Request) {
  try {
    // Get the form data from the request
    const formData = await request.formData()

    // Forward the request to the Hyper3D API
    const response = await fetch(`${BASE_URL}/rodin`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      body: formData,
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        { error: `API request failed: ${response.status}`, details: errorText },
        { status: response.status },
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in Rodin API route:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}

