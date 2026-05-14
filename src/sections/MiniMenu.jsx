import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./MiniMenu.css";
import Img from "../components/Img";
import { categories, menuByCategory } from "../data/menuData";
import menuImg from "../assets/HBK Images/combo.jpeg";
const TABS = ["ALL FOODS", ...categories];

export default function MiniMenu() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [scrollPct, setScrollPct] = useState(0);
  const listRef = useRef(null);

  function handleListScroll() {
    const el = listRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setScrollPct(max > 0 ? (el.scrollTop / max) * 100 : 0);
  }

  const displayItems = useMemo(() => {
    if (activeTab === "ALL FOODS") {
      return categories.flatMap((category) => menuByCategory[category] || []);
    }
    return menuByCategory[activeTab] || [];
  }, [activeTab]);

  const featuredItem = useMemo(() => {
    const pool = categories.flatMap(
      (category) => menuByCategory[category] || [],
    );
    return (
      pool.find((item) => item.name.toLowerCase().includes("vada")) || pool[0]
    );
  }, []);

  return (
    <section id="menu" className="home-mini-menu-wrap">
      <div className="home-mini-menu-card">
        <div className="home-mini-menu-image-panel">
          {featuredItem && (
            <Img
              src={menuImg}
              alt={featuredItem.name}
              className="home-mini-menu-image"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
        <div className="home-mini-menu-content">
          <h2 className="home-mini-menu-title">Menu</h2>
          <p className="home-mini-menu-location-sub">
            Taste of South India, Right Here in Atlanta
          </p>

          <div
            className="home-mini-menu-tabs"
            role="tablist"
            aria-label="Menu preview categories"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  className={`home-mini-menu-tab${isActive ? " is-active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                  role="tab"
                  aria-selected={isActive}
                >
                  <span className="home-mini-menu-tab-text">{tab}</span>
                  <span
                    className="home-mini-menu-tab-underline"
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          <div className="home-mini-menu-list-wrap">
            <div
              ref={listRef}
              onScroll={handleListScroll}
              className="home-mini-menu-list"
            >
              {displayItems.map((item) => (
                <article key={item.id} className="home-mini-menu-item">
                  <div className="home-mini-menu-item-head">
                    <h3
                      className="home-mini-menu-item-name"
                      title={item.name}
                      tabIndex={0}
                    >
                      {item.name}
                    </h3>
                    <span
                      className="home-mini-menu-item-dotline"
                      aria-hidden="true"
                    />
                    <span className="home-mini-menu-item-price">
                      {item.price}
                    </span>
                  </div>
                  <p className="home-mini-menu-item-desc">{item.description}</p>
                </article>
              ))}
            </div>
            <div className="home-mini-menu-scroll-progress" aria-hidden="true">
              <div
                className="home-mini-menu-scroll-thumb"
                style={{ height: "24%", top: `${scrollPct * 0.76}%` }}
              />
            </div>
          </div>
          <Link
            to="/menu"
            className="explore-btn-wrapper"
            style={{
              marginTop: "20px",
              alignSelf: "center",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <span className="explore-btn-text">View More &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
