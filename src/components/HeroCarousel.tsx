import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const IMAGES = [
  { src: `${import.meta.env.BASE_URL}images/IMG_0254.jpg`, label: 'Sala de Estar' },
  { src: `${import.meta.env.BASE_URL}images/IMG_0267.jpg`, label: 'Living Integrado' },
  { src: `${import.meta.env.BASE_URL}images/IMG_0232.jpg`, label: 'Cozinha Gourmet' },
  { src: `${import.meta.env.BASE_URL}images/IMG_0325.jpg`, label: 'SuÃÂÃÂ­te Master' },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const lockRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    IMAGES.forEach(({ src }) => { const img = new Image(); img.src = src; });
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navigate = useCallback((dir: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(prev => dir === 'next' ? (prev + 1) % 4 : (prev + 3) % 4);
    lockRef.current = setTimeout(() => setIsAnimating(false), 650);
  }, [isAnimating]);

  useEffect(() => () => { if (lockRef.current) clearTimeout(lockRef.current); }, []);

  const center = activeIndex;
  const left   = (activeIndex + 3) % 4;
  const right  = (activeIndex + 1) % 4;
  const back   = (activeIndex + 2) % 4;

  function getRoleStyle(idx: number): React.CSSProperties {
    const T = 'transform 650ms cubic-bezier(0.4,0,0.2,1), filter 650ms cubic-bezier(0.4,0,0.2,1), opacity 650ms cubic-bezier(0.4,0,0.2,1), left 650ms cubic-bezier(0.4,0,0.2,1), bottom 650ms cubic-bezier(0.4,0,0.2,1)';
    const base: React.CSSProperties = { position: 'absolute', aspectRatio: '16/10', willChange: 'transform, filter, opacity', transition: T };

    if (idx === center) return {
      ...base,
      left: '50%', bottom: 0,
      height: isMobile ? '58%' : '90%',
      transform: 'translateX(-50%) scale(1)',
      filter: 'none', opacity: 1, zIndex: 20,
      borderRadius: '3px 3px 0 0',
      overflow: 'hidden',
      boxShadow: '0 -24px 80px rgba(28,43,58,0.18)',
    };
    if (idx === left) return {
      ...base,
      left: isMobile ? '8%' : '14%',
      bottom: isMobile ? '5%' : '8%',
      height: isMobile ? '38%' : '52%',
      transform: 'translateX(-50%) scale(1)',
      filter: 'blur(2px) brightness(0.75) saturate(0.8)', opacity: 0.85, zIndex: 10,
      borderRadius: '3px', overflow: 'hidden',
    };
    if (idx === right) return {
      ...base,
      left: isMobile ? '92%' : '86%',
      bottom: isMobile ? '5%' : '8%',
      height: isMobile ? '38%' : '52%',
      transform: 'translateX(-50%) scale(1)',
      filter: 'blur(2px) brightness(0.75) saturate(0.8)', opacity: 0.85, zIndex: 10,
      borderRadius: '3px', overflow: 'hidden',
    };
    // back
    return {
      ...base,
      left: '50%', bottom: isMobile ? '5%' : '8%',
      height: isMobile ? '28%' : '38%',
      transform: 'translateX(-50%) scale(1)',
      filter: 'blur(4px) brightness(0.5) saturate(0.5)', opacity: 0.6, zIndex: 5,
      borderRadius: '3px', overflow: 'hidden',
    };
  }

  return (
    <div style={{ background: '#1C2B3A', position: 'relative', width: '100%', overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>

        {/* Subtle top fog ÃÂ¢ÃÂÃÂ blends into white sections below */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 120,
          background: 'linear-gradient(rgba(28,43,58,0.6), transparent)',
          pointerEvents: 'none', zIndex: 6,
        }} />

        {/* Bottom fade ÃÂ¢ÃÂÃÂ transitions to white */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
          background: 'linear-gradient(transparent, #1C2B3A)',
          pointerEvents: 'none', zIndex: 4,
        }} />

        {/* Giant ghost text */}
        <div style={{
          position: 'absolute', top: '14%', insetInline: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none', userSelect: 'none', zIndex: 2,
        }}>
          <span style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(80px, 24vw, 340px)',
            fontWeight: 900,
            color: 'white',
            opacity: 0.05,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
          }}>
            EXCLUSIVIDADE
          </span>
        </div>

        {/* Navbar */}
        <nav style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          zIndex: 60, padding: isMobile ? '20px 20px' : '28px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo / brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 32, border: '1.5px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 12, color: 'white', letterSpacing: '0.05em' }}>RA</span>
            </div>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 10, fontWeight: 600, textTransform: 'uppercase',
              letterSpacing: '0.22em', color: 'rgba(255,255,255,0.7)',
            }}>
              Rodolfo Andrade
            </span>
          </div>

          {/* Nav links ÃÂ¢ÃÂÃÂ desktop only */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: 36 }}>
              {[['#detalhes', 'O ImÃÂÃÂ³vel'], ['#localizacao', 'LocalizaÃÂÃÂ§ÃÂÃÂ£o'], ['#sobre', 'Corretor'], ['#contato', 'Contato']].map(([href, label]) => (
                <a key={href} href={href} style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 10, fontWeight: 600, textTransform: 'uppercase',
                  letterSpacing: '0.18em', color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none', transition: 'color 200ms',
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'white'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'}
                >
                  {label}
                </a>
              ))}
            </div>
          )}

          {/* Slide counter */}
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10, fontWeight: 500,
            color: 'rgba(255,255,255,0.45)', letterSpacing: '0.14em',
          }}>
            {String(activeIndex + 1).padStart(2, '0')} ÃÂÃÂ· {String(IMAGES.length).padStart(2, '0')}
          </span>
        </nav>

        {/* Carousel images */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 3 }}>
          {IMAGES.map((img, idx) => (
            <div key={img.src} style={getRoleStyle(idx)}>
              <img
                src={img.src}
                alt={img.label}
                draggable={false}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
            </div>
          ))}
        </div>

        {/* Bottom UI bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          zIndex: 60,
          padding: isMobile ? '0 20px 32px' : '0 48px 48px',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        }}>
          {/* Left copy + nav */}
          <div style={{ maxWidth: 400 }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 9, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.28em',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: 10,
            }}>
              Bossa Nova Sotheby's ÃÂÃÂ· ImÃÂÃÂ³vel de Alto PadrÃÂÃÂ£o
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? 32 : 56,
              fontWeight: 600, lineHeight: 1.0,
              color: 'white',
              letterSpacing: '-0.01em',
              marginBottom: isMobile ? 18 : 24,
            }}>
              {IMAGES[activeIndex].label}
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {(['prev', 'next'] as const).map(dir => (
                <button
                  key={dir}
                  onClick={() => navigate(dir)}
                  aria-label={dir === 'prev' ? 'Anterior' : 'PrÃÂÃÂ³ximo'}
                  style={{
                    width: isMobile ? 40 : 48, height: isMobile ? 40 : 48,
                    borderRadius: '50%',
                    background: dir === 'next' ? 'white' : 'transparent',
                    border: `1.5px solid ${dir === 'next' ? 'white' : 'rgba(255,255,255,0.3)'}`,
                    color: dir === 'next' ? '#1C2B3A' : 'white',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'transform 150ms, background 200ms, border-color 200ms',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)'}
                  onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'}
                >
                  {dir === 'prev'
                    ? <ArrowLeft size={18} strokeWidth={2} />
                    : <ArrowRight size={18} strokeWidth={2} />
                  }
                </button>
              ))}
            </div>
          </div>

          {/* Right CTA */}
          <a
            href="#contato"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: `clamp(16px, 3vw, 44px)`,
              fontWeight: 400,
              color: 'white',
              opacity: 0.9,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: 8,
              transition: 'opacity 200ms',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.9'}
          >
            Agende Visita
            <ArrowRight size={isMobile ? 16 : 26} strokeWidth={2} />
          </a>
        </div>

        {/* Progress dots */}
        <div style={{
          position: 'absolute', bottom: isMobile ? 100 : 120, left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 60, display: 'flex', gap: 6,
        }}>
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => { if (!isAnimating) { setActiveIndex(i); setIsAnimating(true); setTimeout(() => setIsAnimating(false), 650); } }}
              style={{
                width: i === activeIndex ? 24 : 6,
                height: 2,
                background: i === activeIndex ? 'white' : 'rgba(255,255,255,0.3)',
                border: 'none', padding: 0, cursor: 'pointer',
                transition: 'width 400ms cubic-bezier(0.4,0,0.2,1), background 400ms',
                borderRadius: 1,
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
