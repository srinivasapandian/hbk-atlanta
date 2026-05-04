import { useState, useRef, useMemo, useEffect } from "react";
import "./MenuSection.css";
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
  const [tabScrollPct, setTabScrollPct] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const tabBarRef = useRef(null);
  const itemsTopRef = useRef(null);
  const categoryRefs = useRef({});
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!dropdownOpen) return;
    function handleOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [dropdownOpen]);

  // Only filter by search — tabs scroll to sections, never hide categories
  const filteredGroups = useMemo(
    () => filterItems(menuGrouped, search),
    [search],
  );

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
      if (cat === "ALL") {
        itemsTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      const el = categoryRefs.current[cat];
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
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

        <div className="menu-tabs-sticky">
          {isMobile ? (
            <div
              ref={dropdownRef}
              className="menu-dropdown-wrap"
            >
              <button
                className="menu-dropdown-btn"
                onClick={() => setDropdownOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
              >
                <span>{activeCategory}</span>
                <span
                  className={`menu-dropdown-chevron${dropdownOpen ? " menu-dropdown-chevron-open" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {dropdownOpen && (
                <ul className="menu-dropdown-list" role="listbox">
                  {allCategories.map((cat) => (
                    <li
                      key={cat}
                      role="option"
                      aria-selected={activeCategory === cat}
                      className={`menu-dropdown-option${activeCategory === cat ? " menu-dropdown-option-active" : ""}`}
                      onClick={() => {
                        selectCategory(cat);
                        setDropdownOpen(false);
                      }}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
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
                {group.items.map((item) => {
                  const isNonVeg = item.category
                    .toUpperCase()
                    .includes("NON VEG");
                  return (
                    <article key={item.id} className="menu-item">
                      <div className="menu-item-top-row">
                        <div className="menu-item-top-left">
                          <span
                            className={`menu-item-dot${isNonVeg ? " menu-item-dot-nonveg" : " menu-item-dot-veg"}`}
                            aria-label={isNonVeg ? "Non-veg" : "Veg"}
                          />
                          <span
                            className="menu-item-name"
                            title={item.name}
                            tabIndex={0}
                          >
                            {item.name}
                          </span>
                        </div>
                        <span className="menu-item-price">{item.price}</span>
                      </div>
                      <p className="menu-item-desc">{item.description}</p>
                    </article>
                  );
                })}
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
