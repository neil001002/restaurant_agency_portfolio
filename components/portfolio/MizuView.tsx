import { BackButton } from "./BackButton";

const mizuItems = [
  { cat: "Sashimi", n: "OTORO SELECTION", jp: "大トロ盛り合わせ", d: "Premium bluefin tuna belly, aged 10 days, served at cellar temperature with aged soy", p: "¥4,800", sig: true },
  { cat: "Nigiri", n: "UNI IKURA", jp: "雲丹いくら", d: "Hokkaido sea urchin, salmon roe, shiso-infused vinegar rice, gold flake", p: "¥3,200", sig: false },
  { cat: "Signature Roll", n: "SAKURA DRAGON", jp: "桜ドラゴン", d: "Spicy tuna, cucumber, topped with seared wagyu, truffle ponzu, micro shiso", p: "¥5,400", sig: true },
  { cat: "Soup", n: "DASHI CONSOMMÉ", jp: "出汁コンソメ", d: "72-hour kombu and katsuobushi, seasonal mushrooms, tofu, spring onion oil", p: "¥1,800", sig: false },
] as const;

const mzStrip: [string, string][] = [
  ["18", "Seat Omakase"],
  ["72hrs", "Aged Cuts"],
  ["3", "Michelin Stars"],
  ["1989", "Founded"],
];

const mzPhil: [string, string, string][] = [
  ["01", "Provenance", "We know every farmer, fisher, and forager we work with"],
  ["02", "Timing", "Every dish is prepared at the precise moment it reaches perfection"],
  ["03", "Silence", "The dining room is a place of quiet contemplation and focused pleasure"],
];

type MizuViewProps = {
  onBack: () => void;
};

export function MizuView({ onBack }: MizuViewProps) {
  return (
    <div className="mz">
      <BackButton onBack={onBack} />
      <nav className="mz-nav">
        <ul className="mz-nl">
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Omakase</a>
          </li>
        </ul>
        <div className="mz-logo">
          MI<span>ZU</span>
        </div>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <ul className="mz-nl">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Visit</a>
            </li>
          </ul>
          <button type="button" className="mz-rbtn">
            Reserve
          </button>
        </div>
      </nav>
      <section className="mz-hero">
        <div className="mz-hl">
          <div className="mz-jp">水 · 火 · 土 · 風 · 空</div>
          <h1 className="mz-h1">
            PURE
            <br />
            <span className="mz-h1b">JAPANESE</span>
          </h1>
          <div className="mz-rl" />
          <p className="mz-sub">
            An omakase experience rooted in the ancient Japanese philosophy of harmony — between ingredient, technique, and season.
          </p>
          <div className="mz-hbtns">
            <button type="button" className="mz-btr">
              Book Omakase
            </button>
            <button type="button" className="mz-btg">
              View Menu
            </button>
          </div>
        </div>
        <div className="mz-hr">
          <div className="mz-hpat" />
          <div className="mz-ro">
            <div className="mz-rm">
              <div className="mz-ri">
                <div className="mz-cd" />
              </div>
            </div>
          </div>
          <div className="mz-hst">Tokyo · New York · London</div>
        </div>
      </section>
      <div className="mz-strip">
        {mzStrip.map(([n, l]) => (
          <div key={l} className="mz-si">
            <div className="mz-sn">{n}</div>
            <div className="mz-sl">{l}</div>
          </div>
        ))}
      </div>
      <section className="mz-menu">
        <div className="mz-mh">
          <div>
            <div className="mz-mtag">Seasonal Offerings</div>
            <h2 className="mz-mh2">
              THE
              <br />
              <strong>MENU</strong>
            </h2>
          </div>
          <p className="mz-mp">
            Our menu changes with the season, guided by the finest imports from Tsukiji and our relationships with local purveyors who
            share our reverence for quality.
          </p>
        </div>
        <div className="mz-mg">
          {mizuItems.map((i) => (
            <div key={i.n} className="mz-mi">
              <div className="mz-mc">
                {i.cat}
                {i.sig ? " · Chef's Selection" : ""}
              </div>
              <div className="mz-mn">{i.n}</div>
              <div className="mz-mnj">{i.jp}</div>
              <div className="mz-md">{i.d}</div>
              <div className="mz-mf">
                <span className="mz-mprice">{i.p}</span>
                {i.sig ? <div className="mz-mdot" /> : null}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mz-phil">
        <div className="mz-phl">
          <div className="mz-phtag">Our Philosophy</div>
          <h2 className="mz-phh2">
            RESPECT THE<strong>INGREDIENT.</strong>
          </h2>
          <p className="mz-php">
            At Mizu, we believe that the chef&apos;s greatest role is restraint. Our job is to listen to the ingredient, understand its
            nature, and present it at the exact moment of its perfection.
          </p>
          <div className="mz-phq">
            &quot;Cooking is not about cleverness. It is about clarity.&quot;
            <br />— Chef Kenji Murai
          </div>
        </div>
        <div className="mz-phr">
          {mzPhil.map(([n, t, d]) => (
            <div key={n} className="mz-phi">
              <div className="mz-phn">{n}</div>
              <div>
                <div className="mz-phtitle">{t}</div>
                <div className="mz-phbody">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mz-res">
        <div className="mz-rtag">Reservations</div>
        <h2 className="mz-rh2">
          SECURE YOUR<strong>EXPERIENCE.</strong>
        </h2>
        <p className="mz-rp">Omakase seats are limited to 18 guests per seating. Advance reservation required.</p>
        <div className="mz-form">
          <input className="mz-inp" placeholder="Name" />
          <input className="mz-inp" placeholder="Date" type="date" />
          <input className="mz-inp" placeholder="Guests" type="number" min={1} max={18} />
          <input className="mz-inp" placeholder="Email" type="email" />
          <button type="button" className="mz-fbtn">
            Reserve →
          </button>
        </div>
      </section>
      <footer className="mz-foot">
        <div className="mz-flogo">
          MI<span>ZU</span>
        </div>
        <div className="mz-fcopy">© 2026 Mizu Restaurant Group. All rights reserved.</div>
        <div className="mz-flinks">
          <span>Privacy</span>
          <span>Instagram</span>
          <span>Press</span>
        </div>
      </footer>
    </div>
  );
}
