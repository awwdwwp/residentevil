const PLATFORM_COLORS: Record<string, string> = {
  PC: '#1E90FF',
  PS5: '#0A2FFF',
  PS4: '#1B4BFF',
  Xbox: '#006129',
  XboxOne: '#2ECC71',
  Switch: '#d50500'
}

export function getPlatformColor(platform: string): string {
  const color = PLATFORM_COLORS[platform]
  if (color) return color

  const fallback = ['#FF9800', '#9C27B0', '#00BCD4', '#5da904']
  const index = platform.length % fallback.length

  return fallback[index] ?? '#FF9800'
}