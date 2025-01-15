"use client"

import * as React from "react"
import { ImageIcon } from "lucide-react"

import { JsonComponentPreview } from "@/components/json-component-preview"
import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"

export default function ExperimentPage() {
  const [prompt, setPrompt] = React.useState("")
  const [code, setCode] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [image, setImage] = React.useState<File | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("prompt", prompt)
      if (image) {
        formData.append("image", image)
      }

      const response = await fetch("/api/generate", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate code")
      }

      setCode(data.code)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <Label
            htmlFor="prompt"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Describe your component
          </Label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="A button that..."
            rows={4}
          />
        </div>
        <div>
          <Label
            htmlFor="image"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Upload a reference image (optional)
          </Label>
          <div className="flex items-center gap-2">
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="flex-1"
            />
            {image && (
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setImage(null)}
              >
                <ImageIcon className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        <Button
          type="submit"
          disabled={isLoading || !prompt}
          className="w-full"
        >
          {isLoading ? "Generating..." : "Generate Component"}
        </Button>
      </form>

      {error && (
        <div className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800">
          {error}
        </div>
      )}

      {code && (
        <JsonComponentPreview
          data={{
            content: code,
          }}
        />
      )}
    </div>
  )
}
