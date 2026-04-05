const p1StripColors = ["#d4af37", "#8b6914", "#5a3e1b", "#2d1a05"];

export function MiniPreview1() {
  return (
    <div className="p1">
      <div className="p1-nav">
        <div className="p1-logo">EMBER & OAK</div>
        <div className="p1-links">
          <span>Menu</span>
          <span>Reserve</span>
        </div>
      </div>
      <div className="p1-hero">
        <div className="p1-glow" />
        <div className="p1-eye">✦ Fine Dining · Est. 2018</div>
        <div className="p1-h">
          Where Fire
          <br />
          <em>Meets Flavor</em>
        </div>
        <span className="p1-btn">Reserve a Table</span>
        <div className="p1-strips">
          {p1StripColors.map((c) => (
            <div key={c} className="p1-strip" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function MiniPreview2() {
  return (
    <div className="p2">
      <div className="p2-nav">
        <div className="p2-logo">ZESTY</div>
        <span className="p2-obtn">Order Now</span>
      </div>
      <div className="p2-hero">
        <div className="p2-dots">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="p2-dot" />
          ))}
        </div>
        <div className="p2-big">
          EAT<span>BOLD.</span>
        </div>
        <div className="p2-s">Street food. No apologies.</div>
        <div className="p2-pills">
          <div className="p2-pill">🌮 Tacos</div>
          <div className="p2-pill r">🔥 Spicy</div>
          <div className="p2-pill">🌯 Burritos</div>
        </div>
      </div>
    </div>
  );
}

const p3Bottom = [
  ["Hours", "7am – 6pm"],
  ["Location", "Old Town"],
  ["Special", "Almond Croissant"],
] as const;

export function MiniPreview3() {
  return (
    <div className="p3">
      <div className="p3-nav">
        <div className="p3-logo">
          <em>Flora</em> Café
        </div>
        <div className="p3-lnks">
          <span>Menu</span>
          <span>About</span>
          <span>Visit</span>
        </div>
      </div>
      <div className="p3-hero">
        <div className="p3-left">
          <div className="p3-eye">✦ Artisan · Seasonal</div>
          <div className="p3-h">
            Your Morning <em>Ritual,</em> Elevated
          </div>
          <div className="p3-d">Handcrafted coffee & pastries made with love, sourced locally.</div>
          <span className="p3-btn">See Our Menu</span>
        </div>
        <div className="p3-right">
          <div className="p3-leaf" style={{ top: "8%", left: "8%", transform: "rotate(-28deg)" }}>
            🌸
          </div>
          <div className="p3-circle">
            <div className="p3-ci" />
          </div>
        </div>
      </div>
      <div className="p3-bottom">
        {p3Bottom.map(([l, v]) => (
          <div key={l} className="p3-si">
            <div className="p3-sl">{l}</div>
            <div className="p3-sv">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const p4Bottom = [
  ["Seats", "18 Only"],
  ["Rating", "Michelin ★★★"],
  ["Style", "Omakase"],
] as const;

export function MiniPreview4() {
  return (
    <div className="p4">
      <div className="p4-nav">
        <div className="p4-logo">
          MI<span>ZU</span>
        </div>
        <div className="p4-nr">
          <div className="p4-nls">
            <span>Menu</span>
            <span>Omakase</span>
            <span>About</span>
          </div>
          <span className="p4-rbtn">Reserve</span>
        </div>
      </div>
      <div className="p4-hero">
        <div className="p4-left">
          <div className="p4-jp">水 · 火 · 土 · 風 · 空</div>
          <div className="p4-h">
            PURE
            <br />
            <strong>JAPANESE</strong>
          </div>
          <div className="p4-line" />
          <div className="p4-sub">Omakase rooted in harmony, season, and silence.</div>
        </div>
        <div className="p4-right">
          <div className="p4-ring">
            <div className="p4-ring2">
              <div className="p4-ring3">
                <div className="p4-dot" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p4-bottom">
        {p4Bottom.map(([l, v]) => (
          <div key={l} className="p4-bi">
            <div className="p4-bl">{l}</div>
            <div className="p4-bv">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
