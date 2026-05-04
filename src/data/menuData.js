import menuItemsRaw from "./menu_items_final_enhanced.json";

function normalizeImageUrl(url) {
  if (!url || typeof url !== "string") return "";
  const trimmed = url.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed) || trimmed.startsWith("data:"))
    return trimmed;
  return `/${trimmed.replace(/^\/+/, "")}`;
}

function formatVariantLabel(type) {
  if (!type) return "";
  const normalized = String(type).trim();
  if (!normalized || normalized === "base" || normalized === "raw") return "";
  return normalized
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}

function formatPriceValue(price) {
  if (price == null) return "";
  if (typeof price === "number" && Number.isFinite(price)) {
    return `$${price.toFixed(2)}`;
  }
  const str = String(price).trim();
  if (!str) return "";
  const numericText = str.replace(/[^0-9.]+/g, "");
  if (numericText) {
    const numeric = Number(numericText);
    if (!Number.isNaN(numeric)) return `$${numeric.toFixed(2)}`;
  }
  return str;
}

function formatVariants(variants) {
  if (!Array.isArray(variants) || variants.length === 0) return "";
  const entries = variants
    .map((variant) => {
      if (!variant) return "";
      const price = formatPriceValue(variant.price);
      if (!price) return "";
      const label = formatVariantLabel(variant.type);
      return label ? `${label} ${price}` : price;
    })
    .filter(Boolean);
  return entries.join(" / ");
}

const menuItems = (Array.isArray(menuItemsRaw) ? menuItemsRaw : []).map(
  (item) => {
    const variants = Array.isArray(item.variants) ? item.variants : [];
    const regularVariants = variants.filter((v) => v.type !== "family");
    const familyVariants = variants.filter((v) => v.type === "family");
    const familyPrice = familyVariants.length
      ? familyVariants.map((v) => formatPriceValue(v.price)).join(" / ")
      : null;
    return {
      ...item,
      imageUrl: normalizeImageUrl(item.imageUrl),
      price: formatVariants(regularVariants),
      familyPrice,
    };
  },
);

export const categories = Array.from(
  new Set(menuItems.map((item) => item.category).filter(Boolean)),
);
export const allCategories = ["ALL", ...categories];

export const menuByCategory = categories.reduce((acc, cat) => {
  acc[cat] = menuItems.filter((item) => item.category === cat);
  return acc;
}, {});

export const menuGrouped = categories.map((cat) => ({
  category: cat,
  items: menuByCategory[cat],
}));

export default menuItems;
