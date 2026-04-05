import type { JSX } from "react";
import type { PortfolioView } from "./types";
import { MiniPreview1, MiniPreview2, MiniPreview3, MiniPreview4 } from "./MiniPreviews";

const stats: [string, string][] = [
  ["200+", "Clients"],
  ["98%", "Retention"],
  ["3.2×", "Bookings"],
  ["48hr", "Delivery"],
];

const footerCols: [string, string[]][] = [
  ["Services", ["Restaurant Websites", "Menu Design", "Online Ordering", "Brand Identity", "SEO"]],
  ["Company", ["About Us", "Our Process", "Case Studies", "Blog", "Careers"]],
  ["Contact", ["hello@platestudio.co", "Book a Free Call", "Instagram", "LinkedIn"]],
];

const designs: {
  id: Exclude<PortfolioView, "agency">;
  num: string;
  type: string;
  name: string;
  desc: string;
  tags: string[];
  Preview: () => JSX.Element;
}[] = [
  {
    id: "d1",
    num: "01",
    type: "Fine Dining Steakhouse",
    name: "Ember & Oak",
    desc: "Dark luxury aesthetic built for high-end steakhouses. Moody golds, layered textures, and reservation-forward design.",
    tags: ["Fine Dining", "Dark Theme", "Reservations", "Premium"],
    Preview: MiniPreview1,
  },
  {
    id: "d2",
    num: "02",
    type: "Bold Fast Casual",
    name: "Zesty",
    desc: "High-energy street food brand with punchy Bebas Neue typography, electric yellow-black contrast, and conversion-optimized ordering flow.",
    tags: ["Fast Casual", "Bold Type", "Online Ordering", "High Energy"],
    Preview: MiniPreview2,
  },
  {
    id: "d3",
    num: "03",
    type: "Cozy Café & Bakery",
    name: "Flora Café",
    desc: "Warm, organic café identity built around community and handcrafted quality. Perfect for artisan coffee shops.",
    tags: ["Café", "Warm Tones", "Organic Feel", "Community"],
    Preview: MiniPreview3,
  },
  {
    id: "d4",
    num: "04",
    type: "Modern Japanese Omakase",
    name: "Mizu",
    desc: "Ultra-minimal Japanese restaurant identity with surgical precision and a red-accent system that commands respect.",
    tags: ["Fine Japanese", "Minimalist", "Omakase", "Luxury"],
    Preview: MiniPreview4,
  },
];

type AgencyViewProps = {
  onSelectDesign: (id: Exclude<PortfolioView, "agency">) => void;
};

export function AgencyView({ onSelectDesign }: AgencyViewProps) {
  return (
    <div className="ag">
      <nav className="ag-nav">
        <div className="ag-logo">
          Plate<span>Studio</span>
        </div>
        <ul className="ag-nav-links">
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Process</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <button type="button" className="ag-cta">
          Start a Project
        </button>
      </nav>
      <section className="ag-hero">
        <div className="hero-grid" />
        <div className="hero-orb" />
        <div className="hero-inner">
          <div className="hero-badge">Restaurant Web Design Agency</div>
          <h1 className="hero-h1">
            We Build Websites That <em>Fill Tables</em>
          </h1>
          <p className="hero-sub">
            PlateStudio crafts high-converting, visually stunning websites exclusively for restaurants, cafés, and food brands.
            Every pixel is designed to make guests hungry before they even arrive.
          </p>
          <div className="hero-btns">
            <button type="button" className="btn-gold">
              View Our Designs
            </button>
            <button type="button" className="btn-outline">
              Book a Free Call
            </button>
          </div>
          <div className="stats-row">
            {stats.map(([n, l]) => (
              <div key={l}>
                <div className="stat-n">{n}</div>
                <div className="stat-l">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="designs-sec">
        <div className="sec-head">
          <div className="sec-tag">Our Design Styles</div>
          <h2 className="sec-h2">
            Four Distinct <em>Restaurant Identities</em>
          </h2>
          <p className="sec-sub">Click any card below to experience a full live preview of each restaurant website design.</p>
        </div>
        <div className="designs-grid">
          {designs.map((d) => {
            const P = d.Preview;
            return (
              <button
                key={d.id}
                type="button"
                className="dcard"
                onClick={() => onSelectDesign(d.id)}
                style={{ textAlign: "left", font: "inherit" }}
              >
                <div className="dcard-preview">
                  <P />
                  <div className="dcard-overlay">
                    <div className="dcard-overlay-btn">View Full Design →</div>
                  </div>
                </div>
                <div className="dcard-info">
                  <div className="dcard-num">
                    {d.num} — {d.type}
                  </div>
                  <div className="dcard-name">{d.name}</div>
                  <div className="dcard-desc">{d.desc}</div>
                  <div className="dcard-tags">
                    {d.tags.map((t) => (
                      <span key={t} className="dcard-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>
      <footer className="ag-foot">
        <div className="ag-fg">
          <div className="ag-fb-brand">
            <div className="ag-logo" style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.05rem", letterSpacing: ".1em" }}>
              Plate<span style={{ color: "#e8a030" }}>Studio</span>
            </div>
            <p>
              The only web design agency that works exclusively with restaurants and food brands. We speak your language — covers,
              seatings, and tableside experiences translated into pixels.
            </p>
          </div>
          {footerCols.map(([h, ls]) => (
            <div key={h} className="ag-fcol">
              <h4>{h}</h4>
              <ul>
                {ls.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="ag-fbot">
          <p>© 2026 PlateStudio. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service</p>
        </div>
      </footer>
    </div>
  );
}
