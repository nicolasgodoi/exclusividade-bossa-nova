import { useEffect, useRef, useState } from 'react';

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);

  const [progress,  setProgress]  = useState(0);   // 0Ã¢ÂÂ1
  const [muted,     setMuted]     = useState(true);
  const [playing,   setPlaying]   = useState(false);
  const [entered,   setEntered]   = useState(false);

  /* Ã¢ÂÂÃ¢ÂÂ rAF scroll tracker Ã¢ÂÂÃ¢ÂÂ */
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const el = sectionRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const vh   = window.innerHeight;
        // 0 when section top enters bottom of screen Ã¢ÂÂ 1 when section bottom exits top
        const p = 1 - (rect.bottom / (vh + rect.height));
        const clamped = Math.min(1, Math.max(0, p));
        setProgress(clamped);

        if (clamped > 0.05 && !entered) setEntered(true);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [entered]);

  /* Ã¢ÂÂÃ¢ÂÂ autoplay when in view Ã¢ÂÂÃ¢ÂÂ */
  useEffect(() => {
    if (!entered) return;
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play()
      .then(() => setPlaying(true))
      .catch(() => {});
  }, [entered]);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else          { v.pause(); setPlaying(false); }
  };

  /* Ã¢ÂÂÃ¢ÂÂ Derived values from progress Ã¢ÂÂÃ¢ÂÂ */
  // Clip: starts fully closed (inset 50% each side), opens to 0 by progress=0.5
  const clipProgress = Math.min(1, progress / 0.5);
  const insetH = (1 - clipProgress) * 5;   // horizontal inset % (0Ã¢ÂÂ5%)
  const insetV = (1 - clipProgress) * 12;  // vertical inset %   (0Ã¢ÂÂ12%)
  const clip = `inset(${insetV}% ${insetH}% ${insetV}% ${insetH}% round 3px)`;

  // Scale: 0.92 Ã¢ÂÂ 1.0
  const scale = 0.92 + clipProgress * 0.08;

  // Parallax: video drifts up as user scrolls past
  const parallaxY = progress > 0.5 ? (progress - 0.5) * -80 : 0;

  // Fade-in elements
  const fade1 = Math.min(1, progress / 0.2);           // label above
  const fade2 = Math.min(1, Math.max(0, (progress - 0.45) / 0.2)); // text below
  const fade3 = Math.min(1, Math.max(0, (progress - 0.35) / 0.2)); // HUD elements

  // SVG arc
  const RADIUS = 20;
  const CIRCUM = 2 * Math.PI * RADIUS;
  const arcOffset = CIRCUM * (1 - Math.min(1, progress * 1.8));

  return (
    <section
      ref={sectionRef}
      id="video"
      style={{
        background: '#0E1A24',
        position: 'relative',
        minHeight: '260vh',
      }}
    >
      {/* Sticky viewport */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>

        {/* Background radial */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'radial-gradient(ellipse 100% 70% at 50% 50%, #1C2B3A 0%, #080D11 100%)',
        }} />

        {/* Scanlines */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.025) 3px, rgba(255,255,255,0.025) 4px)',
        }} />

        {/* Orbital particles */}
        {[...Array(10)].map((_, i) => {
          const angle = (i / 10) * 360;
          const rx = 44 + (i % 2) * 8;
          const ry = 36 + (i % 3) * 6;
          const cx = 50 + Math.cos((angle * Math.PI) / 180) * rx;
          const cy = 50 + Math.sin((angle * Math.PI) / 180) * ry;
          const s  = 1.5 + (i % 3) * 1;
          const op = fade1 * (0.12 + (i % 4) * 0.07);
          return (
            <div key={i} style={{
              position: 'absolute',
              left: `${cx}%`, top: `${cy}%`,
              width: s, height: s, borderRadius: '50%',
              background: i % 3 === 0 ? '#B8965A' : 'rgba(255,255,255,0.7)',
              opacity: op,
              zIndex: 2, pointerEvents: 'none',
              transition: 'opacity 600ms',
            }} />
          );
        })}

        {/* Label above video */}
        <div style={{
          position: 'relative', zIndex: 10,
          marginBottom: 20,
          opacity: fade1,
          transform: `translateY(${(1 - fade1) * 16}px)`,
          transition: 'opacity 400ms, transform 400ms',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 9, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.32em',
            color: '#B8965A',
          }}>
            Tour pelo ImÃÂ³vel
          </p>
        </div>

        {/* Ã¢ÂÂÃ¢ÂÂ Video container Ã¢ÂÂÃ¢ÂÂ */}
        <div style={{
          position: 'relative', zIndex: 10,
          width: '90vw', maxWidth: 1160,
          aspectRatio: '16/9',
          clipPath: clip,
          transform: `scale(${scale}) translateY(${parallaxY}px)`,
          transition: 'clip-path 600ms cubic-bezier(0.16,1,0.3,1)',
          willChange: 'clip-path, transform',
          background: '#080D11',
          overflow: 'hidden',
        }}>
          <video
            ref={videoRef}
            src={`${import.meta.env.BASE_URL}images/video.mp4"
            loop
            muted
            playsInline
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />

          {/* Gloss overlay */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 40%, rgba(0,0,0,0.2) 100%)',
          }} />

          {/* Corner brackets */}
          {([
            { top: 14, left: 14,    borderTop: '1.5px solid rgba(255,255,255,0.35)', borderLeft:  '1.5px solid rgba(255,255,255,0.35)' },
            { top: 14, right: 14,   borderTop: '1.5px solid rgba(255,255,255,0.35)', borderRight: '1.5px solid rgba(255,255,255,0.35)' },
            { bottom: 14, left: 14, borderBottom: '1.5px solid rgba(255,255,255,0.35)', borderLeft: '1.5px solid rgba(255,255,255,0.35)' },
            { bottom: 14, right: 14,borderBottom: '1.5px solid rgba(255,255,255,0.35)', borderRight:'1.5px solid rgba(255,255,255,0.35)' },
          ] as React.CSSProperties[]).map((s, i) => (
            <div key={i} style={{
              position: 'absolute', width: 18, height: 18,
              opacity: fade3, transition: 'opacity 500ms',
              ...s,
            }} />
          ))}

          {/* HUD Ã¢ÂÂ top left */}
          <div style={{
            position: 'absolute', top: 18, left: 18,
            opacity: fade3, transition: 'opacity 500ms',
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 8, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.22em',
              color: 'rgba(255,255,255,0.45)', lineHeight: 1.9,
            }}>
              Exclusividade 28778<br />
              <span style={{ color: '#B8965A' }}>TOUR ÃÂ· 4K</span>
            </p>
          </div>

          {/* Arc progress Ã¢ÂÂ top right */}
          <div style={{
            position: 'absolute', top: 14, right: 14,
            opacity: fade3, transition: 'opacity 500ms',
          }}>
            <svg width={48} height={48} style={{ transform: 'rotate(-90deg)' }}>
              <circle cx={24} cy={24} r={RADIUS} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={1.5} />
              <circle
                cx={24} cy={24} r={RADIUS} fill="none"
                stroke="#B8965A" strokeWidth={1.5}
                strokeDasharray={CIRCUM}
                strokeDashoffset={arcOffset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 80ms linear' }}
              />
            </svg>
            <span style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Inter', sans-serif",
              fontSize: 8, fontWeight: 700,
              color: 'rgba(255,255,255,0.55)',
              transform: 'rotate(90deg)',
            }}>
              {Math.round(Math.min(100, progress * 180))}%
            </span>
          </div>

          {/* Controls bar */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '40px 18px 18px',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            opacity: fade3, transition: 'opacity 500ms',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <button onClick={togglePlay} style={{
                width: 34, height: 34, borderRadius: '50%',
                background: 'rgba(255,255,255,0.14)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.22)',
                color: 'white', cursor: 'pointer', fontSize: 11,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 150ms',
              }}>
                {playing ? 'Ã¢ÂÂ¸' : 'Ã¢ÂÂ¶'}
              </button>
              <button onClick={toggleMute} style={{
                width: 34, height: 34, borderRadius: '50%',
                background: 'rgba(255,255,255,0.09)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.14)',
                color: 'white', cursor: 'pointer', fontSize: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 150ms',
              }}>
                {muted ? 'Ã°ÂÂÂ' : 'Ã°ÂÂÂ'}
              </button>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 9, fontWeight: 600, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)',
              }}>
                {muted ? 'Ativar som' : 'Som ativo'}
              </span>
            </div>
            <a href="#contato" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 9, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.18em',
              color: '#B8965A', textDecoration: 'none',
              border: '1px solid #B8965A55', padding: '7px 13px',
              backdropFilter: 'blur(8px)',
              transition: 'border-color 200ms',
            }}>
              Agendar Visita Ã¢ÂÂ
            </a>
          </div>
        </div>

        {/* Text below video */}
        <div style={{
          position: 'relative', zIndex: 10,
          textAlign: 'center', marginTop: 32,
          opacity: fade2,
          transform: `}translateY(${(1 - fade2) * 24}px)`,
          transition: 'opacity 400ms, transform 400ms',
        }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(26px, 3.5vw, 48px)',
            fontWeight: 600, color: 'white', lineHeight: 1.1,
            letterSpacing: '-0.01em', margin: '0 0 10px',
          }}>
            Experimente o imÃÂ³vel{' '}
            <em style={{ fontWeight: 300 }}>antes da visita</em>
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11, color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.06em',
          }}>
            Role para continuar explorando
          </p>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: 24, left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10, opacity: Math.max(0, 1 - progress * 8),
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
          transition: 'opacity 300ms',
        }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 8, fontWeight: 700, letterSpacing: '0.26em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)',
          }}>Role</span>
          <div style={{
            width: 1, height: 32,
            background: 'linear-gradient(rgba(255,255,255,0.28), transparent)',
            animation: 'scrollpulse 1.8s ease-in-out infinite',
          }} />
        </div>

      </div>

      <style>{`
        @keyframes scrollpulse {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 0.9; }
        }
      `}</style>
    </section>
  );
}
