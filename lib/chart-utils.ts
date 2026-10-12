export type XY = { x: number; y: number }

/**
 * Smooth path through points using Catmull-Rom control points,
 * producing the gentle curves the dashboard chart uses.
 */
export function smoothPath(points: XY[]): string {
  if (points.length < 2) return ''
  const segments = [`M${points[0].x} ${fmt(points[0].y)}`]
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[i + 2] ?? p2
    const cp1x = p1.x + (p2.x - p0.x) / 6
    const cp1y = p1.y + (p2.y - p0.y) / 6
    const cp2x = p2.x - (p3.x - p1.x) / 6
    const cp2y = p2.y - (p3.y - p1.y) / 6
    segments.push(
      `C ${fmt(cp1x)} ${fmt(cp1y)}, ${fmt(cp2x)} ${fmt(cp2y)}, ${p2.x} ${fmt(p2.y)}`,
    )
  }
  return segments.join(' ')
}

/** Linear value→pixel scale anchored on tick rows (index i value ↔ i pixel row). */
export function tickScale(ticks: number[], pixelRows: number[]): (value: number) => number {
  if (ticks.length !== pixelRows.length || ticks.length === 0) {
    throw new Error('tickScale: ticks and pixel rows must be parallel arrays of equal length')
  }
  const anchors = ticks
    .map((value, index) => ({ value, y: pixelRows[index] }))
    .sort((a, b) => a.value - b.value)

  return (value: number) => {
    if (value <= anchors[0].value) return anchors[0].y
    const top = anchors[anchors.length - 1]
    if (value >= top.value) return top.y
    for (let i = 0; i < anchors.length - 1; i++) {
      const low = anchors[i]
      const high = anchors[i + 1]
      if (value >= low.value && value <= high.value) {
        const ratio = (value - low.value) / (high.value - low.value)
        return low.y + ratio * (high.y - low.y)
      }
    }
    return top.y
  }
}

function fmt(n: number) {
  return Number(n.toFixed(1))
}
