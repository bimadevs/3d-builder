import { NextResponse } from "next/server"

const API_KEY = process.env.HYPER3D_API_KEY
const BASE_URL = process.env.HYPER3D_BASE_URL || "https://hyperhuman.deemos.com/api/v2"

if (!API_KEY) {
  throw new Error("HYPER3D_API_KEY environment variable is required")
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { subscription_key } = body

    if (!subscription_key) {
      return NextResponse.json({ error: "Missing subscription_key" }, { status: 400 })
    }

    const response = await fetch(`${BASE_URL}/status`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subscription_key }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        { error: `Status check failed: ${response.status}`, details: errorText },
        { status: response.status },
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in Status API route:", error)
    return NextResponse.json({ error: "Failed to check status" }, { status: 500 })
  }
}

