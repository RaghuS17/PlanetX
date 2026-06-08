import React from 'react'
import logoImg from '../assets/Logo.png'

/**
 * Reusable Brand component — uses the user's custom logo PNG.
 * Variants:
 *   - "default"  : 28px logo + "PlanetX" wordmark, used in top nav
 *   - "logo-only": just the logo, used in the loading screen and tight spots
 *   - "large"    : bigger, used in standalone headers
 */
export default function Brand({ variant = 'default', showText = true, height = 28 }) {
  if (variant === 'logo-only') {
    return (
      <img
        src={logoImg}
        alt="PlanetX"
        style={{ height, width: 'auto', display: 'block' }}
      />
    )
  }

  return (
    <div
      className="brand"
      style={{ display: 'flex', alignItems: 'center', gap: 8 }}
    >
      <img
        src={logoImg}
        alt="PlanetX"
        style={{ height, width: 'auto', display: 'block' }}
      />
      {showText && (
        <span
          style={{
            fontWeight: 800,
            fontSize: 19,
            letterSpacing: '-0.02em',
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            color: 'var(--primary)',
          }}
        >
          PlanetX
        </span>
      )}
    </div>
  )
}
