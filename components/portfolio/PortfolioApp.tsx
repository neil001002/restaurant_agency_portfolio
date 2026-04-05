"use client";

import { useState } from "react";
import type { MenuTab } from "@/lib/menuData";
import { AgencyView } from "./AgencyView";
import { EmberOakView } from "./EmberOakView";
import { FloraCafeView } from "./FloraCafeView";
import { MizuView } from "./MizuView";
import type { PortfolioView } from "./types";
import { ZestyView } from "./ZestyView";

export function PortfolioApp() {
  const [view, setView] = useState<PortfolioView>("agency");
  const [menuTab, setMenuTab] = useState<MenuTab>("starters");

  const goAgency = () => setView("agency");

  return (
    <div className="portfolio-root">
      {view === "agency" && (
        <AgencyView
          onSelectDesign={(id) => {
            setMenuTab("starters");
            setView(id);
          }}
        />
      )}
      {view === "d1" && <EmberOakView menuTab={menuTab} onMenuTab={setMenuTab} onBack={goAgency} />}
      {view === "d2" && <ZestyView onBack={goAgency} />}
      {view === "d3" && <FloraCafeView onBack={goAgency} />}
      {view === "d4" && <MizuView onBack={goAgency} />}
    </div>
  );
}
