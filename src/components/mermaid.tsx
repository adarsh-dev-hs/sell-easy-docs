"use client"

import { useEffect, useId, useState } from "react"
import { useTheme } from "next-themes"

/** Renders a Mermaid diagram (```mermaid code blocks are converted to this component). */
export function Mermaid({ chart }: { chart: string }) {
  const id = useId().replace(/:/g, "")
  const { resolvedTheme } = useTheme()
  const [svg, setSvg] = useState<string>("")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    void (async () => {
      try {
        const { default: mermaid } = await import("mermaid")
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          fontFamily: "inherit",
          theme: resolvedTheme === "dark" ? "dark" : "default",
        })
        const { svg } = await mermaid.render(`mermaid-${id}`, chart.replaceAll("\\n", "\n"))
        if (!cancelled) {
          setSvg(svg)
          setError(null)
        }
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : String(err))
      }
    })()
    return () => {
      cancelled = true
    }
  }, [chart, id, resolvedTheme])

  if (error) {
    return (
      <pre className="my-4 overflow-x-auto rounded-lg border border-fd-error/40 p-3 text-xs text-fd-error">
        Mermaid error: {error}
        {"\n\n"}
        {chart}
      </pre>
    )
  }

  return (
    <div
      className="my-6 flex justify-center overflow-x-auto rounded-xl border bg-fd-card p-4 [&_svg]:h-auto [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
