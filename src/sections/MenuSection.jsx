import { useState, useRef, useMemo, useEffect } from "react";
import "./MenuSection.css";
import { allCategories, menuGrouped } from "../data/menuData";

const NON_VEG_KEYWORDS = [
  "chicken",
  "mutton",
  "fish",
  "prawn",
  "shrimp",
  "egg",
  "lamb",
  "beef",
  "goat",
  "seafood",
  "kheema",
  "keema",
  "shawarma",
  "crab",
  "lobster",
];

function isNonVegItem(item) {
  const tags = Array.isArray(item.tags)
    ? item.tags.map((tag) => String(tag).toLowerCase())
    : [];
  if (tags.includes("non-veg") || tags.includes("non veg")) return true;
  if (item.category.toUpperCase().includes("NON VEG")) return true;
  const nameL = item.name.toLowerCase();
  if (nameL.startsWith("veg ")) return false;
  return NON_VEG_KEYWORDS.some((k) => nameL.includes(k));
}

function isSubheadingItem(item) {
  const name = typeof item?.name === "string" ? item.name.trim() : "";
  return name.endsWith(":");
}

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
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  const filteredGroups = useMemo(
    () => filterItems(menuGrouped, search),
    [search],
  );

  function selectCategory(cat) {
    setActiveCategory(cat);
    requestAnimationFrame(() => {
      if (cat === "ALL") {
        itemsTopRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return;
      }
      const el = categoryRefs.current[cat];
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <>
      {/* Title — handles top spacing to clear the absolute navbar */}
      <div
        className={`menu-title-area${standalone ? " menu-title-area-standalone" : ""}`}
      >
        <h2 className="menu-title">Menu</h2>
      </div>

      {/* Mobile: original dropdown | Desktop: sticky pill tabs */}
      {isMobile ? (
        <div ref={dropdownRef} className="menu-dropdown-outer">
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
        <div className="menu-category-tabs">
          <div className="menu-category-tabs-inner">
            {allCategories.map((cat) => (
              <button
                key={cat}
                className={`menu-tab-item${activeCategory === cat ? " active" : ""}`}
                onClick={() => selectCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main content */}
      <section
        id="menu"
        className={`menu-section${standalone ? " menu-section-standalone" : ""}`}
        style={isMobile ? { padding: "0 16px" } : undefined}
      >
        <div className="menu-right">
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
                    const isSubheading = isSubheadingItem(item);
                    const isNonVeg = isNonVegItem(item);
                    if (isSubheading) {
                      return (
                        <div key={item.id} className="menu-subheading">
                          {item.name}
                        </div>
                      );
                    }
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
                          <div className="menu-item-price-col">
                            <span className="menu-item-price">
                              {item.price}
                            </span>
                            {item.familyPrice && (
                              <span className="menu-item-family-price">
                                Family&nbsp;{item.familyPrice}
                              </span>
                            )}
                          </div>
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
        </div>
      </section>
    </>
  );
}
