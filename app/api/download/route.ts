import { NextResponse } from "next/server"

const API_KEY = process.env.HYPER3D_API_KEY
const BASE_URL = process.env.HYPER3D_BASE_URL || "https://hyperhuman.deemos.com/api/v2"

if (!API_KEY) {
  throw new Error("HYPER3D_API_KEY environment variable is required")
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { task_uuid } = body

    if (!task_uuid) {
      return NextResponse.json({ error: "Missing task_uuid" }, { status: 400 })
    }

    const response = await fetch(`${BASE_URL}/download`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task_uuid }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        { error: `Download failed: ${response.status}`, details: errorText },
        { status: response.status },
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in Download API route:", error)
    return NextResponse.json({ error: "Failed to download model" }, { status: 500 })
  }
}

