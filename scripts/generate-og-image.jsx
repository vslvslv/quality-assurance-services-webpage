import { ImageResponse } from 'next/og';

// Generator for the social-share card (public/og.png). Kept OUT of app/ so Next
// does not auto-inject an extensionless /opengraph-image route (GitHub Pages
// serves it with the wrong content-type, and metadataBase + basePath would
// double-prefix its URL). The committed public/og.png is what metadata points to.
//
// To regenerate after editing this design:
//   1. cp scripts/generate-og-image.jsx app/opengraph-image.js
//   2. npm run build
//   3. cp out/opengraph-image public/og.png
//   4. rm app/opengraph-image.js
//
// Uses an inline SVG (no emoji glyph) so generation never needs a network font.

export const alt = 'Vasil Vasilev — QA Services & Test Automation';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0f172a 0%, #581c87 55%, #0f172a 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '88px',
              height: '88px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
            }}
          >
            <svg width="52" height="52" viewBox="0 0 40 40" fill="none">
              <path
                d="M12 20L17 25L28 14"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            style={{
              fontSize: '26px',
              letterSpacing: '6px',
              textTransform: 'uppercase',
              color: '#c4b5fd',
              fontWeight: 700,
            }}
          >
            Quality Assurance Expert
          </div>
        </div>

        <div
          style={{
            fontSize: '92px',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.05,
            marginBottom: '24px',
          }}
        >
          Vasil Vasilev
        </div>

        <div style={{ fontSize: '38px', color: '#cbd5e1', maxWidth: '900px', lineHeight: 1.3 }}>
          15+ years of QA excellence — test automation, performance &amp; API testing, and QA leadership.
        </div>
      </div>
    ),
    { ...size }
  );
}
