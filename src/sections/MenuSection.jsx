import { useState, useRef, useMemo, useEffect } from "react";
import "./MenuSection.css";
import Img from "../components/Img";
import { allCategories, menuGrouped } from "../data/menuData";

function filterItems(groups, query) {
  const q = query.trim().toLowerCase();
  if (!q) return groups;
  return groups
    .map((g) => ({
      ...g,
      items: g.items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q),
      ),
    }))
    .filter((g) => g.items.length > 0);
}

export default function MenuSection({ isMobile, standalone = false }) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [search, setSearch] = useState("");
  const [tabsPinned, setTabsPinned] = useState(false);
  const [tabScrollPct, setTabScrollPct] = useState(0);

  const sentinelRef = useRef(null);
  const stickyRef = useRef(null);
  const tabBarRef = useRef(null);
  const itemsTopRef = useRef(null);
  const categoryRefs = useRef({});

  const filteredGroups = useMemo(
    () =>
      filterItems(
        activeCategory === "ALL"
          ? menuGrouped
          : menuGrouped.filter((g) => g.category === activeCategory),
        search,
      ),
    [activeCategory, search],
  );

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const navH =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--navbar-height",
        ),
      ) || 84;
    const observer = new IntersectionObserver(
      ([entry]) => setTabsPinned(!entry.isIntersecting),
      { root: null, threshold: 0, rootMargin: `-${navH}px 0px 0px 0px` },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleTabScrollPct() {
    const el = tabBarRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const max = scrollWidth - clientWidth;
    setTabScrollPct(max > 0 ? (scrollLeft / max) * 100 : 0);
  }

  function selectCategory(cat) {
    setActiveCategory(cat);
    requestAnimationFrame(() => {
      const navH =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--navbar-height",
          ),
        ) || 84;
      const stickyH = stickyRef.current?.offsetHeight || 0;
      const target =
        cat === "ALL" ? itemsTopRef.current : categoryRefs.current[cat];
      if (!target) return;
      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        navH -
        stickyH -
        8;
      window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    });
  }

  return (
    <section
      id="menu"
      className={`menu-section${standalone ? " menu-section-standalone" : ""}`}
      style={isMobile ? { padding: "0 16px" } : undefined}
    >
      <div className="menu-right">
        <h2 className="menu-title">Menu</h2>

        <div
          ref={sentinelRef}
          className="menu-tabs-start-sentinel"
          aria-hidden="true"
        />

        <div
          ref={stickyRef}
          className={`menu-tabs-sticky${tabsPinned ? " menu-tabs-pinned" : ""}`}
        >
          {isMobile ? (
            <div className="menu-mobile-tabs-wrap">
              <select
                className="menu-category-dropdown"
                value={activeCategory}
                onChange={(e) => selectCategory(e.target.value)}
                aria-label="Select menu category"
              >
                {allCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <>
              <div
                ref={tabBarRef}
                onScroll={handleTabScrollPct}
                className="tab-bar hide-scrollbar"
              >
                {allCategories.map((cat) => {
                  const active = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      className="tab"
                      onClick={() => selectCategory(cat)}
                    >
                      <div
                        className={`tab-line-long${active ? " tab-line-active" : ""}`}
                      />
                      <div
                        className={`tab-line-short${active ? " tab-line-active" : ""}`}
                      />
                      <span
                        className={`tab-text${active ? " tab-text-active" : ""}`}
                      >
                        {cat}
                      </span>
                      <div
                        className={`tab-line-short${active ? " tab-line-active" : ""}`}
                      />
                      <div
                        className={`tab-line-long${active ? " tab-line-active" : ""}`}
                      />
                    </button>
                  );
                })}
              </div>
              <div className="menu-tabs-progress-container" aria-hidden="true">
                <div
                  className="menu-tabs-progress-bar"
                  style={{
                    width: "20%",
                    left: `${tabScrollPct * 0.8}%`,
                    transition: "left 0.1s ease-out",
                  }}
                />
              </div>
            </>
          )}
        </div>

        <div
          className={`menu-tabs-spacer${tabsPinned ? " menu-tabs-spacer-active" : ""}`}
          aria-hidden="true"
        />

        <div className="menu-controls">
          <input
            type="search"
            className="menu-search-input"
            placeholder="Search dishes"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div ref={itemsTopRef} className="menu-items-wrapper">
          {filteredGroups.map((group) => (
            <div
              key={group.category}
              className="menu-category-group"
              ref={(el) => {
                if (el) categoryRefs.current[group.category] = el;
                else delete categoryRefs.current[group.category];
              }}
            >
              <h3 className="menu-category-title">{group.category}</h3>
              <div className="menu-items-grid">
                {group.items.map((item) => (
                  <article key={item.id} className="menu-item">
                    <Img
                      src={item.imageUrl}
                      className="menu-item-image"
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="menu-item-content">
                      <div className="menu-item-left">
                        <span
                          className="menu-item-name"
                          title={item.name}
                          tabIndex={0}
                        >
                          {item.name}
                        </span>
                        <span className="menu-item-price">{item.price}</span>
                      </div>
                      <p className="menu-item-desc">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
          {filteredGroups.length === 0 && (
            <p className="menu-empty-state">
              No items found for the selected filters.
            </p>
          )}
        </div>

        <div
          className="explore-btn-wrapper"
          style={{
            marginTop: "40px",
            alignSelf: "center",
            cursor: "default",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span className="explore-btn-text">View More &rarr;</span>
        </div>
      </div>
    </section>
  );
}
