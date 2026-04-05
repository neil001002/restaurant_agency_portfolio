import { menuData, type MenuTab } from "@/lib/menuData";
import { BackButton } from "./BackButton";

const scrollTitles = ["Dry-Aged Steaks", "Wood-Fired Grill", "Sommelier Selection", "Private Dining", "Chef's Table", "Farm-to-Table"];

const statBoxes: [string, string][] = [
  ["12+", "Years of Craft"],
  ["3", "Michelin Stars"],
  ["98%", "Guest Return"],
  ["500+", "Wine Labels"],
];

const tabs: MenuTab[] = ["starters", "mains", "desserts"];

type EmberOakViewProps = {
  menuTab: MenuTab;
  onMenuTab: (t: MenuTab) => void;
  onBack: () => void;
};

export function EmberOakView({ menuTab, onMenuTab, onBack }: EmberOakViewProps) {
  const items = menuData[menuTab];

  return (
    <div className="eo">
      <BackButton onBack={onBack} />
      <nav className="eo-nav">
        <ul className="eo-nl">
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <div className="eo-logo-w">
          <div className="eo-logo-m">Ember & Oak</div>
          <div className="eo-logo-s">Est. 2018 · Fine Dining</div>
        </div>
        <ul className="eo-nl">
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#" className="eo-rl">
              Reserve
            </a>
          </li>
        </ul>
      </nav>
      <section className="eo-hero">
        <div className="eo-hbg" />
        <div className="eo-htex" />
        <div className="eo-himg" />
        <div className="eo-hplate">
          <div className="eo-hpi">🥩</div>
        </div>
        <div className="eo-hc">
          <div className="eo-pre">
            <div className="eo-line" />
            <span className="eo-pt">Award-winning Fine Dining</span>
          </div>
          <h1 className="eo-h1">
            <em>Where Fire</em>
            <strong>Meets Flavor</strong>
          </h1>
          <p className="eo-hdesc">
            An intimate dining experience where the ancient art of fire meets the precision of modern cuisine. Every cut is a story,
            every flame a tradition.
          </p>
          <div className="eo-hbtns">
            <button type="button" className="eo-bgold">
              Reserve a Table
            </button>
            <button type="button" className="eo-bghost">
              View Menu
            </button>
          </div>
        </div>
      </section>
      <div className="eo-scroll">
        <div className="eo-sci">
          {[0, 1].map((i) => (
            <span key={i} style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
              {scrollTitles.flatMap((t) => [
                <span key={`${i}-${t}-l`} className="eo-si">
                  {t}
                </span>,
                <span key={`${i}-${t}-d`} className="eo-sd">
                  ✦
                </span>,
              ])}
            </span>
          ))}
        </div>
      </div>
      <section className="eo-about">
        <div>
          <div className="eo-atag">Our Story</div>
          <h2 className="eo-ah2">
            The Art of the <em>Perfect Cut</em>
          </h2>
          <p className="eo-ap">
            &quot;I believe the finest dining experience begins long before the first bite — it starts with the farmer, the fire, and
            the philosophy that extraordinary ingredients deserve extraordinary respect.&quot;
          </p>
          <p className="eo-ap2">
            Chef Marcus Holloway spent twelve years mastering his craft across three Michelin-starred kitchens before returning home to
            open Ember & Oak. Our wood-fired hearth burns white oak from local farms, imparting a unique character to every dish.
          </p>
        </div>
        <div className="eo-sgrid">
          {statBoxes.map(([n, l], i) => (
            <div key={l} className={`eo-sbox${i === 1 ? " f" : ""}`}>
              <div className="eo-snum">{n}</div>
              <div className="eo-slabel">{l}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="eo-menu">
        <div className="eo-mhead">
          <div className="eo-mtag">Culinary Offerings</div>
          <h2 className="eo-mh2">
            The <em>Menu</em>
          </h2>
        </div>
        <div style={{ textAlign: "center" }}>
          <div className="eo-tabs">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                className={`eo-tab${menuTab === t ? " active" : ""}`}
                onClick={() => onMenuTab(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="eo-mgrid">
          {items.map((item) => (
            <div key={item.n} className="eo-mi">
              <div className="eo-mie">{item.e}</div>
              <div className="eo-mitags">
                {item.tags.map((tag) => (
                  <span key={tag} className="eo-mitag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="eo-min">{item.n}</div>
              <div className="eo-mid">{item.d}</div>
              <div className="eo-mip">{item.p}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="eo-res">
        <div className="eo-resbg" />
        <h2 className="eo-resh2">
          Make Your <em>Reservation</em>
        </h2>
        <p className="eo-resp">Secure your table and begin your evening of culinary excellence</p>
        <div className="eo-form">
          <input className="eo-inp" placeholder="Full Name" />
          <input className="eo-inp" placeholder="Date" type="date" />
          <input className="eo-inp" placeholder="Guests" type="number" min={1} />
          <button type="button" className="eo-bgold">
            Confirm
          </button>
        </div>
      </section>
      <footer className="eo-foot">
        <div className="eo-flogo">Ember & Oak</div>
        <div className="eo-fcopy">© 2026 Ember & Oak. All rights reserved.</div>
        <div className="eo-flinks">
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Privacy</span>
        </div>
      </footer>
    </div>
  );
}
