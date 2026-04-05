import { BackButton } from "./BackButton";

const specials = [
  { e: "☕", n: "Signature Rose Latte", d: "Ethiopian espresso, steamed oat milk, house rose syrup, edible petals", p: "$7.50", bg: "w1" },
  { e: "🥐", n: "Almond & Honey Croissant", d: "French-style laminated dough, wild honey, toasted almonds, apricot glaze", p: "$6.00", bg: "w2" },
  { e: "🍰", n: "Seasonal Tart du Jour", d: "Handmade pastry shell, fresh seasonal fruit, vanilla crème pâtissière", p: "$9.50", bg: "w3" },
] as const;

type FloraCafeViewProps = {
  onBack: () => void;
};

export function FloraCafeView({ onBack }: FloraCafeViewProps) {
  return (
    <div className="fc">
      <BackButton onBack={onBack} />
      <nav className="fc-nav">
        <div className="fc-logo">
          <em>Flora</em> Café
        </div>
        <ul className="fc-nl">
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Visit</a>
          </li>
        </ul>
        <button type="button" className="fc-obtn">
          Order Online
        </button>
      </nav>
      <section className="fc-hero">
        <div className="fc-hl">
          <div className="fc-htag">Small Batch · Hand-Crafted · Seasonal</div>
          <h1 className="fc-h1">
            Your <em>Morning Ritual,</em> Elevated
          </h1>
          <p className="fc-hp">
            Nestled in the heart of the neighbourhood, Flora is a sanctuary of slow mornings, artisan coffee, and pastries made before
            dawn by hands that care deeply about every crumb.
          </p>
          <div className="fc-hbtns">
            <button type="button" className="fc-bd">
              See Our Menu
            </button>
            <button type="button" className="fc-bt">
              Our Story →
            </button>
          </div>
        </div>
        <div className="fc-hr">
          <div className="fc-blob" />
          <div className="fc-blob2" />
          <div className="fc-leaf1">🌸</div>
          <div className="fc-leaf2">🌿</div>
          <div className="fc-leaf3">🌱</div>
          <div className="fc-hri">
            <div className="fc-cup">☕</div>
            <div className="fc-bpill">Open Daily 7am–6pm</div>
          </div>
        </div>
      </section>
      <section className="fc-spec">
        <div className="fc-sh">
          <h2 className="fc-sh2">
            Today&apos;s <em>Favourites</em>
          </h2>
          <span className="fc-sl">Full Menu →</span>
        </div>
        <div className="fc-sg">
          {specials.map((s) => (
            <div key={s.n} className="fc-sc">
              <div className={`fc-si ${s.bg}`}>{s.e}</div>
              <div className="fc-sb">
                <div className="fc-sn">{s.n}</div>
                <div className="fc-sd">{s.d}</div>
                <div className="fc-sf">
                  <span className="fc-sp">{s.p}</span>
                  <button type="button" className="fc-sa">
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="fc-story">
        <div className="fc-stl">
          <div className="fc-stt">Our Story</div>
          <h2 className="fc-sth2">
            Made with <em>Intention,</em> Served with Love
          </h2>
          <p className="fc-stp">
            &quot;I opened Flora because I wanted a place where slowing down felt natural — where the coffee was thoughtful and the
            pastries tasted like Sunday morning.&quot;
          </p>
          <p className="fc-stp2">
            Every item on our menu is made in-house each morning using locally-sourced, seasonal ingredients. We work with three nearby
            farms and a single-origin roaster who visits our kitchen every month.
          </p>
          <div className="fc-sig">— Priya, Founder</div>
        </div>
        <div className="fc-str">
          <div className="fc-gi" style={{ height: 145 }}>
            🌸
          </div>
          <div className="fc-gi" style={{ height: 145, background: "#b89555" }}>
            🥧
          </div>
          <div
            className="fc-gi"
            style={{
              height: 95,
              gridColumn: "span 2",
              background: "#a07840",
              gap: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "2.5rem" }}>☕</span>
            <span style={{ fontSize: "2.5rem" }}>🥐</span>
            <span style={{ fontSize: "2.5rem" }}>🌿</span>
          </div>
        </div>
      </section>
      <footer className="fc-foot">
        <div className="fc-flogo">
          <em>Flora</em> Café
        </div>
        <div className="fc-flinks">
          <span>Instagram</span>
          <span>Menu</span>
          <span>Contact</span>
        </div>
        <div className="fc-fcopy">© 2026 Flora Café. Made with love.</div>
      </footer>
    </div>
  );
}
