import { useState } from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

export default function ContactSection() {
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const fieldStyle = (name: string): React.CSSProperties => ({
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focused === name ? '#1C2B3A' : '#1C2B3A22'}`,
    padding: '12px 0',
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 19,
    color: '#1C2B3A',
    outline: 'none',
    transition: 'border-color 250ms',
    display: 'block',
    resize: 'none',
  });

  const labelStyle = (name: string): React.CSSProperties => ({
    fontFamily: "'Inter', sans-serif",
    fontSize: 8, fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.25em',
    color: focused === name ? '#1C2B3A' : '#1C2B3A44',
    display: 'block', marginBottom: 6,
    transition: 'color 250ms',
  });

  return (
    <section
      id="contato"
      style={{ background: '#FAFAF8', padding: '100px 24px 72px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ghost text decoration */}
      <div style={{
        position: 'absolute', bottom: -16, right: -8,
        fontFamily: "'Anton', sans-serif",
        fontSize: 'clamp(80px, 16vw, 240px)',
        fontWeight: 900, color: '#1C2B3A', opacity: 0.03,
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        letterSpacing: '-0.02em',
      }}>
        CONTATO
      </div>

      <div
        style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 100, alignItems: 'start',
        }}
        className="contact-grid"
      >
        {/* Left info */}
        <div>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 9, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.3em',
            color: '#B8965A', marginBottom: 20,
          }}>
            Entre em Contato
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(38px, 5vw, 64px)',
            fontWeight: 600, lineHeight: 1.0,
            color: '#1C2B3A', letterSpacing: '-0.01em',
            margin: '0 0 6px',
          }}>
            Agende uma
          </h2>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(38px, 5vw, 64px)',
            fontWeight: 300, fontStyle: 'italic', lineHeight: 1.0,
            color: '#1C2B3A', letterSpacing: '-0.01em',
            margin: '0 0 36px',
          }}>
            Visita Exclusiva
          </h2>

          <div style={{ width: 48, height: 1, background: '#1C2B3A', opacity: 0.12, marginBottom: 36 }} />

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 20, lineHeight: 1.65,
            color: '#1C2B3A', opacity: 0.65,
            marginBottom: 48,
          }}>
            Atendimento personalizado, visitas agendadas e consultoria imobiliária de alto padrão.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { Icon: Phone, label: 'Telefone', text: '(73) 99905-0295',              href: 'tel:+5573999050295' },
              { Icon: Mail,  label: 'E-mail',   text: 'randrade@bossanovasir.com.br', href: 'mailto:randrade@bossanovasir.com.br' },
              { Icon: Globe, label: 'Site',      text: 'bnsir.com.br',                href: 'https://bnsir.com.br' },
            ].map(({ Icon, label, text, href }) => (
              <a key={label} href={href} style={{
                display: 'flex', alignItems: 'center', gap: 16,
                textDecoration: 'none',
                padding: '16px 0',
                borderBottom: '1px solid #1C2B3A0C',
                color: '#1C2B3A',
                transition: 'opacity 200ms',
                opacity: 0.6,
              }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.6'}
              >
                <Icon size={14} strokeWidth={1.5} style={{ flexShrink: 0, opacity: 0.5 }} />
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.4, marginBottom: 2 }}>{label}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13 }}>{text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div style={{ paddingTop: 4 }}>
          {sent ? (
            <div style={{ paddingTop: 60, textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, border: '1px solid #1C2B3A22', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <span style={{ fontSize: 20 }}>â</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, color: '#1C2B3A', marginBottom: 12 }}>
                Mensagem Enviada
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#1C2B3A66' }}>
                Rodolfo entrará em contato em breve.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              style={{ display: 'flex', flexDirection: 'column', gap: 28 }}
            >
              {[
                { name: 'nome',      label: 'Seu nome',  type: 'text'  },
                { name: 'email',     label: 'E-mail',    type: 'email' },
                { name: 'telefone',  label: 'Telefone',  type: 'tel'   },
              ].map(({ name, label, type }) => (
                <div key={name}>
                  <label style={labelStyle(name)}>{label}</label>
                  <input
                    type={type} required
                    style={fieldStyle(name)}
                    onFocus={() => setFocused(name)}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              ))}

              <div>
                <label style={labelStyle('mensagem')}>Mensagem</label>
                <textarea
                  rows={3} required
                  style={fieldStyle('mensagem')}
                  onFocus={() => setFocused('mensagem')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <button
                type="submit"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  background: '#1C2B3A', color: '#FAFAF8',
                  border: 'none', padding: '18px 32px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 10, fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.22em',
                  cursor: 'pointer',
                  transition: 'background 200ms, transform 150ms',
                  marginTop: 8,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#2a3f54';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#1C2B3A';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                }}
              >
                Enviar Mensagem â
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        maxWidth: 1100, margin: '80px auto 0',
        borderTop: '1px solid #1C2B3A0C',
        paddingTop: 36,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 12,
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 15, color: '#1C2B3A', opacity: 0.3,
        }}>
          Â© 2024 Rodolfo Andrade Â· Bossa Nova Sotheby's International Realty
        </p>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 8, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.22em',
          color: '#B8965A', opacity: 0.5,
        }}>
          CRECI Â· Alto Padrão
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
}
