const base = {
  sand: "#F2EBDF",
  teal: "#025951",
  gold: "#F2A649",
  peach: "#F29985",
  coral: "#F26363",
} as const;

export const colors = {
  brand: base.coral,
  brandDark: base.teal,
  accent: base.gold,
  background: base.sand,
  surface: "rgba(242, 235, 223, 0.76)",
  surfaceAlt: base.peach,
  border: "rgba(2, 89, 81, 0.16)",
  text: base.teal,
  textMuted: "rgba(2, 89, 81, 0.72)",
  white: base.sand,
};
