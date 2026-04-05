import { BackButton } from "./BackButton";

const zestyItems = [
  { e: "🌮", n: "The O.G. Taco Stack", d: "Triple-layered smash beef, ghost pepper salsa, pickled jalapeños", p: "$14" },
  { e: "🌯", n: "Flame Burrito XL", d: "Charred chicken, black beans, habanero crema, loaded extras", p: "$16" },
  { e: "🍟", n: "Devil Fries", d: "Shoestring fries, sriracha dust, nacho cheese, crispy onions", p: "$9" },
  { e: "🥤", n: "Mango Habanero Shake", d: "Fresh mango, ghost pepper syrup, coconut milk, tajín rim", p: "$8" },
];

const mqWords = ["BOLD FLAVORS", "FRESH DAILY", "NO APOLOGIES", "MADE TO SLAP", "ORDER NOW"];

const zyStats: [string, string][] = [
  ["50K+", "Orders/Month"],
  ["4.9★", "Rating"],
  ["12", "Locations"],
];

const zySteps: [string, string][] = [
  ["ORDER", "Pick your weapons from our menu of mouth-destroyers"],
  ["PREP", "Our crew fires it fresh — no heat lamps, no shortcuts"],
  ["DEVOUR", "Eat it while it's hot. Don't say we didn't warn you."],
];

type ZestyViewProps = {
  onBack: () => void;
};

export function ZestyView({ onBack }: ZestyViewProps) {
  return (
    <div className="zy">
      <BackButton onBack={onBack} />
      <nav className="zy-nav">
        <div className="zy-logo">
          ZES<span>TY</span>
        </div>
        <ul className="zy-nl">
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
          <li>
            <a href="#">Catering</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <button type="button" className="zy-obtn">
          🔥 Order Now
        </button>
      </nav>
      <section className="zy-hero">
        <div className="zy-hl">
          <div className="zy-stripe" />
          <div className="zy-badge">🌶️ New Location Open</div>
          <h1 className="zy-h1">
            EAT<span>BOLD.</span>
            <em>Life&apos;s too short for bland food.</em>
          </h1>
          <p className="zy-sub">
            Street food so good it&apos;ll slap your taste buds into another dimension. Fresh, fast, ferociously flavored — every single
            time.
          </p>
          <div className="zy-hbtns">
            <button type="button" className="zy-by">
              🔥 Order Online
            </button>
            <button type="button" className="zy-br">
              📍 Find Us
            </button>
          </div>
        </div>
        <div className="zy-hr">
          <div className="zy-hpat" />
          <div className="zy-hem">🌮</div>
          <div className="zy-hct">ZESTY</div>
        </div>
      </section>
      <div className="zy-mq">
        <div className="zy-mqi">
          {[0, 1, 2].map((round) =>
            mqWords.flatMap((t) => [
              <span key={`${round}-${t}-w`} className="zy-mq-item">
                {t}
              </span>,
              <span key={`${round}-${t}-s`} className="zy-mq-star">
                ★
              </span>,
            ]),
          )}
        </div>
      </div>
      <section className="zy-feat">
        <div className="zy-fh">
          <h2 className="zy-fh2">
            THE <span>MENU</span>
          </h2>
          <a href="#" className="zy-fl">
            Full Menu →
          </a>
        </div>
        <div className="zy-items">
          {zestyItems.map((i) => (
            <div key={i.n} className="zy-item">
              <div className="zy-item-img">{i.e}</div>
              <div className="zy-item-body">
                <div className="zy-item-name">{i.n}</div>
                <div className="zy-item-desc">{i.d}</div>
                <div className="zy-item-ft">
                  <span className="zy-item-price">{i.p}</span>
                  <button type="button" className="zy-add">
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="zy-ab">
        <div className="zy-abl">
          <div className="zy-abtag">Who We Are</div>
          <h2 className="zy-abh2">
            WE DON&apos;T <span>DO</span> BORING.
          </h2>
          <p className="zy-abp">
            Zesty was born in a food truck with one belief: flavor should be fearless. We source the hottest peppers, freshest produce,
            and boldest spices to deliver street food that actually lives up to the hype.
          </p>
          <div className="zy-sts">
            {zyStats.map(([n, l]) => (
              <div key={l}>
                <div className="zy-st-n">{n}</div>
                <div className="zy-st-l">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="zy-abr">
          <div className="zy-abrt">HOW IT WORKS</div>
          {zySteps.map(([title, desc], i) => (
            <div key={title} className="zy-step">
              <div className="zy-sn">0{i + 1}</div>
              <div>
                <div className="zy-st-title">{title}</div>
                <div className="zy-st-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="zy-foot">
        <div className="zy-flogo">
          ZES<span>TY</span>
        </div>
        <div className="zy-fcopy">© 2026 Zesty Foods. Eat bold, live loud.</div>
        <div className="zy-fsoc">
          {["IG", "TK", "YT", "FB"].map((s) => (
            <div key={s} className="zy-sb">
              {s}
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
