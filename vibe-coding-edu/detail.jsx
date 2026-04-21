// Detail page — focused single-column reader.
// Floating mini-TOC on long chapters, drop cap on first paragraph,
// before/after compare, copy-code button, FAQ accordion, prev/next + chapter grid.

const DetailPage = () => {
  const { meta, steps } = window.VIBE_DATA;
  const id = new URLSearchParams(location.search).get('id') || '00';
  const step = steps.find(s => s.id === id) || steps[0];
  const idx = steps.indexOf(step);
  const prev = idx > 0 ? steps[idx - 1] : null;
  const next = idx < steps.length - 1 ? steps[idx + 1] : null;

  const [progress, setProgress] = React.useState(0);
  const [activeSec, setActiveSec] = React.useState(0);

  // Scroll progress
  React.useEffect(() => {
    const h = () => {
      const t = document.documentElement;
      const max = t.scrollHeight - t.clientHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener('scroll', h, { passive: true });
    h();
    return () => window.removeEventListener('scroll', h);
  }, []);

  // Scrollspy
  React.useEffect(() => {
    const secs = document.querySelectorAll('[data-sec-idx]');
    const h = () => {
      const y = window.scrollY + 180;
      let cur = 0;
      secs.forEach((el) => {
        if (el.offsetTop <= y) cur = +el.dataset.secIdx;
      });
      setActiveSec(cur);
    };
    window.addEventListener('scroll', h, { passive: true });
    h();
    return () => window.removeEventListener('scroll', h);
  }, [step.id]);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: 'var(--sans)' }}>
      {/* Progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 2, zIndex: 50,
        background: 'var(--line-2)',
      }}>
        <div style={{
          height: '100%', width: `${progress * 100}%`, background: 'var(--accent-ink)',
          transition: 'width 0.05s linear',
        }} />
      </div>

      {/* Top nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 40, background: 'rgba(250,249,246,0.92)',
        backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--line)',
        padding: '14px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="index.html" className="mono" style={{
          fontSize: 12, color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span>←</span> VIBE CODING
        </a>
        <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', display: 'flex', gap: 16 }}>
          <span>{step.kicker.toUpperCase()}</span>
          <span>·</span>
          <span>CH. {step.num} / 08</span>
        </div>
      </nav>

      {/* Hero */}
      <header style={{
        padding: '88px 56px 56px', maxWidth: 1280, margin: '0 auto',
        borderBottom: '1px solid var(--ink)',
      }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28,
          alignItems: 'center',
        }}>
          <Pill>{step.kicker}</Pill>
          <Pill variant="outline">{step.tag}</Pill>
          <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', marginLeft: 6 }}>
            ⏱ {step.readTime}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 40 }}>
          <div className="serif" style={{
            fontSize: 140, lineHeight: 0.85, color: 'var(--accent-ink)',
            flexShrink: 0, fontWeight: 400, letterSpacing: '-0.04em',
          }}>
            {step.num}
          </div>
          <div style={{ flex: 1, paddingTop: 12 }}>
            <h1 className="serif" style={{
              fontSize: 76, lineHeight: 1.02, letterSpacing: '-0.03em', margin: 0,
              fontWeight: 400,
            }}>
              {step.title}
            </h1>
            <div className="mono" style={{
              fontSize: 13, color: 'var(--ink-3)', marginTop: 12, letterSpacing: '0.04em',
            }}>
              {step.titleEn}
            </div>
            <p style={{
              fontSize: 22, lineHeight: 1.5, color: 'var(--ink-2)', margin: '28px 0 0',
              maxWidth: 760, textWrap: 'pretty', fontWeight: 300,
            }}>
              {step.summary}
            </p>
          </div>
        </div>
      </header>

      {/* Body — single column, centered for focus */}
      <main style={{
        maxWidth: 820, margin: '0 auto', padding: '64px 40px 96px',
      }}>
        <article>
          {step.demo ? (
            <ClaudePlayground />
          ) : (
            <Reader step={step} />
          )}

          {/* Links */}
          {step.links.length > 0 && (
            <section style={{ marginTop: 72, paddingTop: 28, borderTop: '1px solid var(--line)' }}>
              <div className="kicker" style={{ marginBottom: 14 }}>Further reading</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {step.links.map((l, i) => (
                  <li key={i}>
                    <a href={l.url} target="_blank" style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '14px 0', borderBottom: '1px dashed var(--line)',
                      color: 'var(--ink)', fontSize: 16, fontFamily: 'var(--serif)',
                      transition: 'padding 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.paddingLeft = '8px'; }}
                    onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; }}
                    >
                      <span>{l.label}</span>
                      <span className="mono" style={{ fontSize: 12, color: 'var(--ink-3)' }}>→ 외부 링크</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </main>

      {/* Floating mini-TOC — appears only on long chapters */}
      {!step.demo && step.sections.length > 3 && (
        <FloatingTOC sections={step.sections} activeSec={activeSec} />
      )}

      {/* Prev / Next */}
      <nav style={{
        borderTop: '1px solid var(--ink)', padding: '32px 56px 32px',
        maxWidth: 1280, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
      }}>
        {prev ? <PrevNext step={prev} dir="prev" /> : <div />}
        {next ? <PrevNext step={next} dir="next" /> : <div />}
      </nav>

      {/* Chapter grid */}
      <section style={{
        padding: '64px 56px 96px', maxWidth: 1280, margin: '0 auto',
        borderTop: '1px solid var(--line)',
      }}>
        <div className="kicker" style={{ marginBottom: 24 }}>All chapters</div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14,
        }}>
          {steps.map(s => (
            <a key={s.id} href={`detail.html?id=${s.id}`} style={{
              padding: 16, border: '1px solid var(--line)',
              background: s.id === step.id ? 'var(--ink)' : 'var(--paper)',
              color: s.id === step.id ? 'var(--paper)' : 'var(--ink)',
              transition: 'transform 0.15s, box-shadow 0.15s',
              display: 'block',
            }}
            onMouseEnter={e => { if (s.id !== step.id) { e.currentTarget.style.transform = 'translate(-2px, -2px)'; e.currentTarget.style.boxShadow = '4px 4px 0 var(--ink)'; } }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div className="mono" style={{
                fontSize: 10, letterSpacing: '0.12em',
                color: s.id === step.id ? 'var(--accent)' : 'var(--accent-ink)',
                marginBottom: 6,
              }}>
                CH. {s.num} · {s.kicker.toUpperCase()}
              </div>
              <div className="serif" style={{ fontSize: 18, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                {s.title}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

const Pill = ({ children, variant = 'solid' }) => (
  <span className="mono" style={{
    fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
    padding: '5px 10px',
    background: variant === 'solid' ? 'var(--accent-ink)' : 'transparent',
    color: variant === 'solid' ? 'var(--paper)' : 'var(--ink-2)',
    border: variant === 'solid' ? 'none' : '1px solid var(--line)',
    borderRadius: 2,
  }}>{children}</span>
);

const FloatingTOC = ({ sections, activeSec }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{
        position: 'fixed', right: 28, top: '50%', transform: 'translateY(-50%)',
        zIndex: 30, display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
        gap: 8, pointerEvents: 'auto',
      }}
    >
      {sections.map((s, i) => {
        const active = i === activeSec;
        return (
          <a key={i} href={`#sec-${i}`} title={s.heading}
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              textDecoration: 'none', color: 'var(--ink)',
              transition: 'all 0.2s',
            }}>
            {open && (
              <span style={{
                fontFamily: 'var(--sans)', fontSize: 12,
                background: 'var(--paper)', padding: '4px 10px',
                border: '1px solid var(--line)',
                color: active ? 'var(--ink)' : 'var(--ink-3)',
                fontWeight: active ? 500 : 400,
                whiteSpace: 'nowrap', textWrap: 'pretty',
                maxWidth: 260, overflow: 'hidden', textOverflow: 'ellipsis',
              }}>
                {s.heading}
              </span>
            )}
            <span style={{
              width: active ? 22 : 16, height: 2,
              background: active ? 'var(--accent-ink)' : 'var(--line-2)',
              transition: 'all 0.2s', flexShrink: 0,
            }} />
          </a>
        );
      })}
    </div>
  );
};

const Reader = ({ step }) => (
  <div>
    {step.sections.map((sec, i) => (
      <section key={i} id={`sec-${i}`} data-sec-idx={i}
        style={{
          paddingBottom: 48,
          marginBottom: 48,
          borderBottom: i < step.sections.length - 1 ? '1px solid var(--line)' : 'none',
          scrollMarginTop: 80,
        }}
      >
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24,
        }}>
          <span className="mono" style={{
            fontSize: 11, color: 'var(--accent-ink)', letterSpacing: '0.12em',
          }}>
            § {String(i + 1).padStart(2, '0')}
          </span>
          <h2 className="serif" style={{
            fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.025em',
            margin: 0, fontWeight: 400, flex: 1, textWrap: 'balance',
          }}>
            {sec.heading}
          </h2>
        </div>

        <SectionBody sec={sec} isFirst={i === 0} />
      </section>
    ))}
  </div>
);

const SectionBody = ({ sec, isFirst }) => (
  <>
    {sec.body && (
      <p style={{
        fontSize: 19, lineHeight: 1.75, color: 'var(--ink-2)',
        margin: '0 0 28px', textWrap: 'pretty',
      }}>
        {isFirst && sec.body.length > 80 ? (
          <>
            <span className="serif" style={{
              float: 'left', fontSize: 64, lineHeight: 0.9, padding: '6px 10px 0 0',
              color: 'var(--accent-ink)', fontWeight: 400,
            }}>
              {sec.body.charAt(0)}
            </span>
            {sec.body.slice(1)}
          </>
        ) : sec.body}
      </p>
    )}

    {sec.bullets && (
      <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 28px' }}>
        {sec.bullets.map((b, i) => (
          <li key={i} style={{
            display: 'flex', gap: 20, padding: '14px 0',
            borderBottom: '1px dashed var(--line)',
            fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)',
          }}>
            <span className="mono" style={{
              color: 'var(--accent-ink)', fontSize: 11,
              paddingTop: 5, minWidth: 24, letterSpacing: '0.05em',
            }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span style={{ textWrap: 'pretty', flex: 1 }}>{b}</span>
          </li>
        ))}
      </ul>
    )}

    {sec.compare && (
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '24px 0 28px',
      }}>
        {['before', 'after'].map(k => (
          <div key={k} style={{
            border: '1px solid var(--ink)',
            background: k === 'after' ? 'var(--ink)' : 'var(--paper)',
            color: k === 'after' ? 'var(--paper)' : 'var(--ink)',
          }}>
            <div style={{
              padding: '10px 14px', borderBottom: `1px solid ${k === 'after' ? '#333' : 'var(--line)'}`,
              fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              opacity: k === 'after' ? 0.6 : 0.7,
            }}>
              <span>{sec.compare[k].label.toUpperCase()}</span>
              <span style={{ color: k === 'after' ? 'var(--accent)' : 'var(--accent-ink)' }}>
                {k === 'before' ? '— old way' : '+ vibe'}
              </span>
            </div>
            <pre style={{
              margin: 0, padding: '16px 18px', fontFamily: 'var(--mono)',
              fontSize: 12.5, lineHeight: 1.75, whiteSpace: 'pre-wrap',
            }}>
              {sec.compare[k].lines.join('\n')}
            </pre>
          </div>
        ))}
      </div>
    )}

    {sec.code && <CodeBlock code={sec.code} />}

    {sec.patterns && (
      <div style={{
        margin: '16px 0 24px', border: '1px solid var(--line)',
        background: 'var(--paper)',
      }}>
        {sec.patterns.map((p, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24,
            padding: '20px 22px',
            borderBottom: i < sec.patterns.length - 1 ? '1px solid var(--line)' : 'none',
            alignItems: 'baseline',
          }}>
            <div style={{
              display: 'flex', alignItems: 'baseline', gap: 10,
            }}>
              <span className="mono" style={{
                fontSize: 10, color: 'var(--ink-4)',
              }}>#{String(i + 1).padStart(2, '0')}</span>
              <span className="mono" style={{
                fontSize: 12, color: 'var(--accent-ink)', letterSpacing: '0.05em',
                textTransform: 'uppercase', fontWeight: 500,
              }}>{p.name}</span>
            </div>
            <div style={{
              fontSize: 15, lineHeight: 1.65, color: 'var(--ink-2)',
              textWrap: 'pretty',
            }}>
              {p.body}
            </div>
          </div>
        ))}
      </div>
    )}

    {sec.qa && (
      <div style={{ margin: '12px 0 24px' }}>
        {sec.qa.map((item, i) => <FAQItem key={i} item={item} />)}
      </div>
    )}

    {sec.doList && (
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '20px 0 28px',
      }}>
        <DoDontCol kind="do" items={sec.doList} />
        <DoDontCol kind="dont" items={sec.dontList} />
      </div>
    )}

    {sec.chart && <BenchmarkChart chart={sec.chart} />}

    {sec.dialog && <DialogBlock dialog={sec.dialog} />}

    {sec.timeline && <Timeline timeline={sec.timeline} />}

    {sec.note && (
      <p style={{
        fontSize: 16, lineHeight: 1.75, color: 'var(--ink-3)',
        margin: '20px 0 28px', padding: '4px 0 4px 18px',
        borderLeft: '2px solid var(--line)', textWrap: 'pretty',
        fontStyle: 'italic',
      }}>
        {sec.note}
      </p>
    )}
  </>
);

// ──────────────────────────────────────────────
// BenchmarkChart — time-axis scatter with shape-by-provider + multi-series
// x = date, y = score. △ = Anthropic, ○ = OpenAI, ◇ = Google.
// Accepts either { series: [{ name, color, points }] } or legacy { points }.
// ──────────────────────────────────────────────
const BenchmarkChart = ({ chart }) => {
  const {
    kicker = '▸ FIG · CHART', title, subtitle,
    yMax = 100, series, points, caption,
  } = chart;

  const seriesList = series && series.length
    ? series
    : [{ name: 'Score', color: 'var(--accent-ink)', points: points || [] }];
  const allPoints = seriesList.flatMap(s => s.points);
  if (!allPoints.length) return null;

  const times = allPoints.map(p => new Date(p.date).getTime());
  const xMin = Math.min(...times);
  const xMax = Math.max(...times);
  const xPad = (xMax - xMin) * 0.04 || 30 * 24 * 3600 * 1000;
  const xStart = xMin - xPad;
  const xEnd = xMax + xPad * 2.2;

  const W = 880, H = 480;
  const pad = { t: 28, r: 36, b: 58, l: 54 };
  const plotW = W - pad.l - pad.r;
  const plotH = H - pad.t - pad.b;

  const xFor = (d) => pad.l + ((new Date(d).getTime() - xStart) / (xEnd - xStart)) * plotW;
  const yFor = (v) => pad.t + plotH - (plotH * v) / yMax;

  const xTicks = [];
  const startY = new Date(xStart).getFullYear();
  const endY = new Date(xEnd).getFullYear();
  for (let y = startY; y <= endY; y++) {
    for (let m = 0; m < 12; m += 6) {
      const t = new Date(y, m, 1).getTime();
      if (t >= xStart && t <= xEnd) xTicks.push({ t, label: m === 0 ? `'${String(y).slice(2)}` : 'H2' });
    }
  }

  const gridCount = 4;
  const gridYs = Array.from({ length: gridCount + 1 }, (_, i) => Math.round((yMax * i) / gridCount));

  const shape = (provider, cx, cy, color, size = 6) => {
    if (provider === 'anthropic') {
      return <polygon points={`${cx},${cy - size} ${cx - size * 0.95},${cy + size * 0.72} ${cx + size * 0.95},${cy + size * 0.72}`} fill={color} />;
    }
    if (provider === 'google') {
      return <polygon points={`${cx},${cy - size} ${cx + size},${cy} ${cx},${cy + size} ${cx - size},${cy}`} fill={color} />;
    }
    return <circle cx={cx} cy={cy} r={size - 0.5} fill={color} />;
  };

  return (
    <figure style={{
      margin: '28px 0 32px', border: '1px solid var(--ink)', background: 'var(--paper)',
    }}>
      <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--line)' }}>
        <div className="mono" style={{
          fontSize: 10, letterSpacing: '0.14em', color: 'var(--ink-4)', marginBottom: 4,
        }}>{kicker}</div>
        <div className="serif" style={{ fontSize: 19, lineHeight: 1.2, letterSpacing: '-0.015em' }}>
          {title}
        </div>
        {subtitle && (
          <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 4 }}>{subtitle}</div>
        )}
      </div>

      {/* Legend */}
      <div style={{
        padding: '10px 18px', borderBottom: '1px solid var(--line)',
        display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'center',
        fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-2)',
      }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--ink-4)', letterSpacing: '0.1em' }}>PROVIDER</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <svg width="14" height="14" style={{ display: 'inline-block' }}>
              <polygon points="7,2 1,12 13,12" fill="var(--ink)" />
            </svg> Anthropic
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <svg width="14" height="14" style={{ display: 'inline-block' }}>
              <circle cx="7" cy="7" r="5" fill="var(--ink)" />
            </svg> OpenAI
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <svg width="14" height="14" style={{ display: 'inline-block' }}>
              <polygon points="7,1 13,7 7,13 1,7" fill="var(--ink)" />
            </svg> Google
          </span>
        </div>
        {seriesList.length > 1 && (
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--ink-4)', letterSpacing: '0.1em' }}>BENCHMARK</span>
            {seriesList.map((s, i) => (
              <span key={i} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6, color: s.color,
              }}>
                <svg width="18" height="6" style={{ display: 'inline-block' }}>
                  <line x1="0" y1="3" x2="18" y2="3" stroke={s.color} strokeWidth="1.4" strokeDasharray="4 3" />
                </svg>
                {s.name}
              </span>
            ))}
          </div>
        )}
      </div>

      <div style={{ padding: '20px 16px 12px' }}>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" preserveAspectRatio="xMidYMid meet"
          role="img" style={{ display: 'block', overflow: 'visible' }}>
          <title>{title}</title>
          <desc>{subtitle || caption || title}</desc>

          {/* horizontal gridlines + y labels */}
          {gridYs.map(g => (
            <g key={g}>
              <line x1={pad.l} x2={W - pad.r} y1={yFor(g)} y2={yFor(g)}
                stroke="var(--line-2)" strokeWidth="1"
                strokeDasharray={g === 0 ? undefined : '3 4'} />
              <text x={pad.l - 10} y={yFor(g) + 4} textAnchor="end"
                fontFamily="var(--mono)" fontSize="10" fill="var(--ink-3)">{g}</text>
            </g>
          ))}

          {/* axes */}
          <line x1={pad.l} x2={pad.l} y1={pad.t - 8} y2={H - pad.b}
            stroke="var(--ink)" strokeWidth="1" />
          <line x1={pad.l} x2={W - pad.r} y1={H - pad.b} y2={H - pad.b}
            stroke="var(--ink)" strokeWidth="1" />

          {/* x-axis year ticks */}
          {xTicks.map(t => {
            const x = pad.l + ((t.t - xStart) / (xEnd - xStart)) * plotW;
            const isYear = t.label.startsWith("'");
            return (
              <g key={t.t}>
                <line x1={x} x2={x} y1={H - pad.b} y2={H - pad.b + (isYear ? 6 : 3)}
                  stroke="var(--ink-3)" strokeWidth="1" />
                {isYear && (
                  <text x={x} y={H - pad.b + 20} textAnchor="middle"
                    fontFamily="var(--mono)" fontSize="11" fill="var(--ink-3)">{t.label}</text>
                )}
              </g>
            );
          })}

          {/* axis labels */}
          <text x={pad.l - 40} y={pad.t - 12}
            fontFamily="var(--mono)" fontSize="10" fill="var(--ink-3)">점수 (%)</text>
          <text x={W - pad.r} y={H - pad.b + 44} textAnchor="end"
            fontFamily="var(--mono)" fontSize="10" fill="var(--ink-3)">출시 시점 →</text>

          {/* connecting trend lines per series */}
          {seriesList.map((s, si) => {
            const sorted = [...s.points].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            const pts = sorted.map(p => `${xFor(p.date)},${yFor(p.y)}`).join(' ');
            return (
              <polyline key={`line-${si}`} points={pts} fill="none"
                stroke={s.color} strokeWidth="1.4" strokeDasharray="4 3" opacity="0.45" />
            );
          })}

          {/* points + labels */}
          {seriesList.map((s, si) => (
            <g key={`pts-${si}`}>
              {s.points.map((p, pi) => {
                const cx = xFor(p.date);
                const cy = yFor(p.y);
                const defaultDX = p.labelDX != null ? p.labelDX : 9;
                const defaultDY = p.labelDY != null
                  ? p.labelDY
                  : (si === 0 ? (pi % 2 === 0 ? -10 : -22) : (pi % 2 === 0 ? 16 : 28));
                const anchor = p.labelAnchor || 'start';
                return (
                  <g key={pi}>
                    {shape(p.provider, cx, cy, s.color)}
                    <text x={cx + defaultDX} y={cy + defaultDY}
                      textAnchor={anchor}
                      fontFamily="var(--sans)" fontSize="10.5" fontWeight="500"
                      fill="var(--ink-2)">{p.label}</text>
                  </g>
                );
              })}
            </g>
          ))}
        </svg>
      </div>

      {caption && (
        <figcaption style={{
          padding: '12px 18px', borderTop: '1px solid var(--line)',
          fontSize: 13, lineHeight: 1.6, color: 'var(--ink-3)',
          background: 'var(--bg-2)',
        }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

// ──────────────────────────────────────────────
// DialogBlock — chat-style transcript for narrative anecdotes
// ──────────────────────────────────────────────
const DialogBlock = ({ dialog }) => {
  const turns = Array.isArray(dialog) ? dialog : (dialog.turns || []);
  const kicker = Array.isArray(dialog) ? '▸ DIALOG' : (dialog.kicker || '▸ DIALOG');
  const note = Array.isArray(dialog) ? '' : (dialog.note || '');
  return (
    <div style={{
      margin: '24px 0 28px', border: '1px solid var(--line)',
      background: 'var(--paper)',
    }}>
      <div className="mono" style={{
        fontSize: 10, letterSpacing: '0.14em', color: 'var(--ink-4)',
        padding: '10px 18px', borderBottom: '1px solid var(--line)',
        display: 'flex', justifyContent: 'space-between',
      }}>
        <span>{kicker}</span>
        {note && <span>{note}</span>}
      </div>
      <div style={{ padding: '4px 18px' }}>
        {turns.map((d, i) => {
          const me = d.role === '나' || d.role === 'me' || d.role === 'user';
          return (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '92px 1fr', gap: 18,
              padding: '16px 0',
              borderBottom: i < turns.length - 1 ? '1px dashed var(--line)' : 'none',
              alignItems: 'flex-start',
            }}>
              <div className="mono" style={{
                fontSize: 11, letterSpacing: '0.08em', paddingTop: 3,
                color: me ? 'var(--ink)' : 'var(--accent-ink)',
                fontWeight: 500,
              }}>
                {me ? '▸ 나' : `↳ ${d.role}`}
              </div>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: 13, lineHeight: 1.75,
                color: 'var(--ink-2)', whiteSpace: 'pre-wrap',
                textWrap: 'pretty',
              }}>
                {d.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────
// Timeline — vertical timeline of events
// ──────────────────────────────────────────────
const Timeline = ({ timeline }) => {
  const items = Array.isArray(timeline) ? timeline : (timeline.items || []);
  const kicker = Array.isArray(timeline) ? '▸ TIMELINE' : (timeline.kicker || '▸ TIMELINE');
  const note = Array.isArray(timeline) ? '' : (timeline.note || '');
  return (
  <div style={{
    margin: '24px 0 28px', border: '1px solid var(--ink)',
    background: 'var(--paper)', padding: '24px 26px',
  }}>
    <div className="mono" style={{
      fontSize: 10, letterSpacing: '0.14em', color: 'var(--ink-4)', marginBottom: 20,
      display: 'flex', justifyContent: 'space-between',
    }}>
      <span>{kicker}</span>
      {note && <span>{note}</span>}
    </div>
    <div style={{ position: 'relative', paddingLeft: 28 }}>
      <div style={{
        position: 'absolute', left: 7, top: 6, bottom: 6, width: 1,
        background: 'var(--line)',
      }} />
      {items.map((it, i) => (
        <div key={i} style={{
          position: 'relative', paddingBottom: i < items.length - 1 ? 22 : 0,
        }}>
          <div style={{
            position: 'absolute', left: -25, top: 4,
            width: 13, height: 13, borderRadius: 7,
            border: '2px solid var(--accent-ink)', background: 'var(--paper)',
          }} />
          <div style={{
            display: 'grid', gridTemplateColumns: '80px 1fr', gap: 18,
            alignItems: 'baseline',
          }}>
            <div className="mono" style={{
              fontSize: 11, letterSpacing: '0.08em', color: 'var(--ink-3)',
            }}>{it.when}</div>
            <div>
              <div className="serif" style={{
                fontSize: 22, letterSpacing: '-0.015em', lineHeight: 1.2,
              }}>{it.model}</div>
              {it.note && (
                <div style={{
                  fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)',
                  marginTop: 5, textWrap: 'pretty',
                }}>{it.note}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

const CodeBlock = ({ code, lang = 'markdown' }) => {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div style={{ margin: '20px 0 28px', border: '1px solid var(--ink)' }}>
      <div style={{
        padding: '8px 14px', background: 'var(--ink)', color: 'var(--ink-4)',
        fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span>📄 {lang.toUpperCase()}</span>
        <button onClick={copy} style={{
          background: 'transparent', border: '1px solid #444',
          color: copied ? 'var(--accent)' : 'var(--ink-4)',
          fontFamily: 'inherit', fontSize: 10, letterSpacing: '0.12em',
          padding: '4px 10px', cursor: 'pointer',
          transition: 'all 0.15s',
        }}>
          {copied ? '✓ COPIED' : 'COPY'}
        </button>
      </div>
      <pre style={{
        background: 'var(--ink)', color: 'var(--paper)', padding: 20,
        fontFamily: 'var(--mono)', fontSize: 12.5, lineHeight: 1.75,
        overflowX: 'auto', margin: 0,
      }}>{code}</pre>
    </div>
  );
};

const DoDontCol = ({ kind, items }) => {
  const isDo = kind === 'do';
  return (
    <div style={{
      border: `1.5px solid ${isDo ? 'var(--ok)' : 'var(--bad)'}`,
      background: 'var(--paper)',
    }}>
      <div className="mono" style={{
        fontSize: 11, letterSpacing: '0.16em', padding: '12px 16px',
        color: isDo ? 'var(--ok)' : 'var(--bad)',
        borderBottom: `1px solid ${isDo ? 'var(--ok)' : 'var(--bad)'}`,
        background: isDo ? 'rgba(50,120,70,0.04)' : 'rgba(160,50,30,0.04)',
      }}>
        {isDo ? '✓  DO' : '✕  DON\'T'}
      </div>
      <ul style={{ listStyle: 'none', padding: '4px 16px 12px', margin: 0 }}>
        {items.map((it, i) => (
          <li key={i} style={{
            fontSize: 15, lineHeight: 1.55, padding: '10px 0',
            borderBottom: i < items.length - 1 ? '1px dashed var(--line)' : 'none',
            color: 'var(--ink-2)', textWrap: 'pretty',
          }}>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FAQItem = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--line)' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', padding: '22px 0', textAlign: 'left', background: 'none',
        border: 0, cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', gap: 16, color: 'var(--ink)',
      }}>
        <span className="serif" style={{
          fontSize: 22, letterSpacing: '-0.015em', fontWeight: 400,
          textWrap: 'pretty', textAlign: 'left',
        }}>
          {item.q}
        </span>
        <span className="mono" style={{
          fontSize: 18, color: 'var(--accent-ink)', flexShrink: 0,
          transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s',
        }}>+</span>
      </button>
      <div style={{
        maxHeight: open ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease',
      }}>
        <p style={{
          fontSize: 16, lineHeight: 1.65, color: 'var(--ink-2)',
          margin: '0 0 22px', maxWidth: 720, textWrap: 'pretty',
        }}>
          {item.a}
        </p>
      </div>
    </div>
  );
};

const PrevNext = ({ step, dir }) => {
  const isNext = dir === 'next';
  return (
    <a href={`detail.html?id=${step.id}`} style={{
      display: 'block', padding: '24px 26px', border: '1px solid var(--line)',
      background: 'var(--paper)', textAlign: isNext ? 'right' : 'left',
      transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = 'var(--ink)';
      e.currentTarget.style.color = 'var(--paper)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = 'var(--paper)';
      e.currentTarget.style.color = 'var(--ink)';
    }}
    >
      <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', marginBottom: 8, letterSpacing: '0.12em' }}>
        {isNext ? 'NEXT →' : '← PREV'} · CH. {step.num}
      </div>
      <div className="serif" style={{
        fontSize: 28, lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 400,
      }}>
        {step.title}
      </div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 6, textWrap: 'pretty' }}>
        {step.summary.slice(0, 60)}{step.summary.length > 60 ? '…' : ''}
      </div>
    </a>
  );
};

// ──────────────────────────────────────────────
// Claude Playground
// `window.claude.complete` only exists inside the Claude Design canvas.
// In any other host we fall back to a clear message instead of throwing.
// ──────────────────────────────────────────────
const PRESETS = [
  { label: "Paper → Code", prompt: "아래 의사코드를 PyTorch로 구현해주세요. shape 주석 포함, 단위 테스트 2개도 작성.\n\nfunction scaled_dot_product_attention(Q, K, V):\n  d_k = Q.shape[-1]\n  scores = (Q @ K.T) / sqrt(d_k)\n  weights = softmax(scores)\n  return weights @ V" },
  { label: "Debug helper", prompt: "이 에러 메시지의 가능한 원인 3가지와, 각각을 확인할 수 있는 방법을 알려주세요.\n\nRuntimeError: CUDA out of memory. Tried to allocate 2.00 GiB (GPU 0; 23.69 GiB total capacity; 20.41 GiB already allocated)" },
  { label: "Red-team", prompt: "다음 연구 방법의 약점을 NeurIPS reviewer 관점에서 3가지 지적해주세요. 각각에 대해 저자가 할 수 있는 가장 강한 반박도 함께:\n\n방법: 간단한 linear probe로 LLM의 내부 표현에서 '진실성(truthfulness)'을 추출했다고 주장." },
  { label: "Plot polish", prompt: "이 matplotlib 코드를 Nature 스타일로 다듬어주세요. CVD-safe 색상, serif 폰트, 논문용 300dpi.\n\nimport matplotlib.pyplot as plt\nplt.plot([1,2,3],[4,5,6])\nplt.title('Results')\nplt.show()" },
];

const PLAYGROUND_AVAILABLE = typeof window !== 'undefined'
  && window.claude && typeof window.claude.complete === 'function';

const ClaudePlayground = () => {
  const [input, setInput] = React.useState(PRESETS[0].prompt);
  const [output, setOutput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState('');
  const [activePreset, setActivePreset] = React.useState(0);

  const run = async () => {
    if (!input.trim() || loading) return;
    setLoading(true); setErr(''); setOutput('');
    try {
      if (!PLAYGROUND_AVAILABLE) {
        throw new Error("이 라이브 데모는 Claude Design 캔버스 안에서만 동작합니다. 외부 배포 환경에서는 위 프롬프트를 복사해 Claude Code (claude CLI) 또는 claude.ai에서 직접 실행해보세요.");
      }
      const res = await window.claude.complete(input);
      setOutput(res);
    } catch (e) {
      setErr(String(e.message || e));
    } finally {
      setLoading(false);
    }
  };

  const copyPrompt = () => {
    navigator.clipboard?.writeText(input);
  };

  return (
    <div>
      <div style={{
        padding: '22px 24px', background: 'var(--paper)',
        border: '1px solid var(--ink)', marginBottom: 28,
        display: 'flex', gap: 20, alignItems: 'flex-start',
      }}>
        <div style={{
          width: 44, height: 44, background: 'var(--accent-ink)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--paper)', fontFamily: 'var(--mono)', fontSize: 18,
          flexShrink: 0,
        }}>◈</div>
        <div style={{ flex: 1 }}>
          <div className="mono" style={{
            fontSize: 11, letterSpacing: '0.12em', color: 'var(--accent-ink)', marginBottom: 4,
          }}>
            {PLAYGROUND_AVAILABLE ? 'LIVE DEMO · Claude Haiku 4.5' : 'PROMPT EXPLORER · COPY-AND-RUN'}
          </div>
          <div className="serif" style={{
            fontSize: 22, fontWeight: 400, letterSpacing: '-0.015em', marginBottom: 6,
          }}>
            직접 던져보세요
          </div>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6 }}>
            {PLAYGROUND_AVAILABLE
              ? '프리셋을 선택하거나 자유롭게 프롬프트를 입력하세요. 응답은 최대 1024 토큰.'
              : '라이브 응답은 Claude Design 캔버스에서만 가능합니다. 여기에서는 프리셋을 살펴보고 [복사] 버튼으로 가져가 claude CLI 또는 claude.ai에서 실행하세요.'}
          </p>
        </div>
      </div>

      {/* Presets */}
      <div style={{ marginBottom: 12 }}>
        <div className="kicker" style={{ marginBottom: 10 }}>프리셋</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {PRESETS.map((p, i) => {
            const active = i === activePreset;
            return (
              <button key={i} onClick={() => { setInput(p.prompt); setActivePreset(i); }}
                style={{
                  fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.06em',
                  padding: '8px 14px',
                  background: active ? 'var(--ink)' : 'var(--bg)',
                  color: active ? 'var(--paper)' : 'var(--ink-2)',
                  border: `1px solid ${active ? 'var(--ink)' : 'var(--line)'}`,
                  cursor: 'pointer', transition: 'all 0.15s',
                }}
              >
                {p.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Input */}
      <div style={{ border: '1px solid var(--ink)', background: 'var(--paper)' }}>
        <div style={{
          padding: '10px 14px', borderBottom: '1px solid var(--line)',
          fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span>❯ PROMPT</span>
          <span>{input.length} chars</span>
        </div>
        <textarea
          value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) run(); }}
          style={{
            width: '100%', minHeight: 200, border: 0, outline: 'none',
            resize: 'vertical', padding: 18, fontFamily: 'var(--mono)',
            fontSize: 13, lineHeight: 1.7, background: 'var(--paper)',
            color: 'var(--ink)', display: 'block',
          }}
        />
        <div style={{
          padding: 12, borderTop: '1px solid var(--line)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8,
        }}>
          <span className="mono" style={{ fontSize: 10, color: 'var(--ink-4)' }}>
            ⌘/Ctrl + Enter to run
          </span>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={copyPrompt} style={{
              background: 'transparent', color: 'var(--ink-2)',
              border: '1px solid var(--line)',
              padding: '10px 18px', fontFamily: 'var(--mono)', fontSize: 12,
              letterSpacing: '0.12em', cursor: 'pointer',
            }}>
              COPY
            </button>
            <button onClick={run} disabled={loading || !input.trim()} style={{
              background: 'var(--ink)', color: 'var(--paper)', border: 0,
              padding: '10px 22px', fontFamily: 'var(--mono)', fontSize: 12,
              letterSpacing: '0.12em', cursor: loading ? 'wait' : 'pointer',
              opacity: loading || !input.trim() ? 0.5 : 1,
            }}>
              {loading ? 'THINKING…' : 'RUN ↵'}
            </button>
          </div>
        </div>
      </div>

      {/* Output */}
      {(loading || output || err) && (
        <div style={{
          marginTop: 20, border: '1px solid var(--ink)',
          background: 'var(--ink)', color: 'var(--paper)',
        }}>
          <div style={{
            padding: '10px 14px', borderBottom: '1px solid #333',
            fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-4)',
            display: 'flex', justifyContent: 'space-between',
          }}>
            <span>❯ RESPONSE</span>
            <span>{loading ? <Typing /> : 'claude-haiku-4-5'}</span>
          </div>
          <pre style={{
            margin: 0, padding: 20, fontFamily: 'var(--mono)',
            fontSize: 13, lineHeight: 1.75, whiteSpace: 'pre-wrap',
            minHeight: 120, color: err ? 'var(--warn)' : 'var(--paper)',
          }}>
            {err ? `⚠ ${err}` : output || (loading ? '…' : '')}
          </pre>
        </div>
      )}
    </div>
  );
};

const Typing = () => {
  const [n, setN] = React.useState(0);
  React.useEffect(() => { const i = setInterval(() => setN(x => (x + 1) % 4), 300); return () => clearInterval(i); }, []);
  return <span>{'generating' + '.'.repeat(n)}</span>;
};

ReactDOM.createRoot(document.getElementById('root')).render(<DetailPage />);
