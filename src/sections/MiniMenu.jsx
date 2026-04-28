import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Img from '../components/Img';
import { menuByCategory } from '../data/menuData';

const TABS = ['ALL FOODS', 'APPETIZERS', 'ENTREES', 'DESSERTS'];

export default function MiniMenu() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const previewItems =
    activeTab === TABS[0]
      ? TABS.slice(1).flatMap((cat) => (menuByCategory[cat] || []).slice(0, 1))
      : (menuByCategory[activeTab] || []).slice(0, 5);

  const displayItems = previewItems.slice(0, 5);
  const featuredItem = displayItems[0];

  return (
    <section className="home-mini-menu-wrap">
      <div className="home-mini-menu-card">
        <div className="home-mini-menu-image-panel">
          {featuredItem && (
            <Img
              src={featuredItem.imageUrl}
              alt={featuredItem.name}
              className="home-mini-menu-image"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
        <div className="home-mini-menu-content">
          <h2 className="home-mini-menu-title">Menu</h2>

          <div className="home-mini-menu-tabs" role="tablist" aria-label="Menu preview categories">
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  className={`home-mini-menu-tab${isActive ? ' is-active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                  role="tab"
                  aria-selected={isActive}
                >
                  <span className="home-mini-menu-tab-line" />
                  <span className="home-mini-menu-tab-text">{tab}</span>
                  <span className="home-mini-menu-tab-line" />
                </button>
              );
            })}
          </div>

          <div className="home-mini-menu-list">
            {displayItems.map((item) => (
              <article key={item.id} className="home-mini-menu-item">
                <div className="home-mini-menu-item-head">
                  <h3 className="home-mini-menu-item-name">{item.name}</h3>
                  <span className="home-mini-menu-item-dotline" aria-hidden="true" />
                  <span className="home-mini-menu-item-price">{item.price}</span>
                </div>
                <p className="home-mini-menu-item-desc">{item.description}</p>
              </article>
            ))}
          </div>

          <Button as={Link} to="/menu" className="home-mini-menu-explore-btn">
            EXPLORE MENU
          </Button>
        </div>
      </div>
    </section>
  );
}
